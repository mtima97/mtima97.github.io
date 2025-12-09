import _ from 'lodash'
import { defineStore } from 'pinia'
import { LANG } from '@/constants/lang.js'
import { getDtFallback } from '@/utils/base.js'
import { useLanguageStore } from '@/stores/language.js'

export const useCvStore = defineStore('cv', {
    state: () => ({
        cvEn: {},
        cvRu: {}
    }),
    getters: {
        cv(state) {
            const language = useLanguageStore().language

            switch (language) {
                case LANG.EN:
                    return state.cvEn
                case LANG.RU:
                    return state.cvRu
                default:
                    return {}
            }
        },
        headers() {
            const isRu = useLanguageStore().isRu

            return (header) => {
                switch (header) {
                    case 'experience':
                        return isRu ? 'Опыт работы' : 'Experience'
                    case 'about me':
                        return isRu ? 'Обо мне' : 'About Me'
                    case 'contacts':
                        return isRu ? 'Контакты' : 'Contacts'
                    case 'email':
                        return isRu ? 'Почта' : 'Email'
                    case 'phone':
                        return isRu ? 'Телефон' : 'Phone'
                    case 'skills':
                        return isRu ? 'Навыки' : 'Skills'
                    case 'languages':
                        return isRu ? 'Языки' : 'Languages'
                    case 'projects':
                        return isRu ? 'Проекты' : 'Projects'
                    case 'education':
                        return isRu ? 'Образование' : 'Education'
                    default:
                        return ''
                }
            }
        },
        experience() {
            const isRu = useLanguageStore().isRu

            return _.get(this.cv, 'experience', []).map(item => ({
                position: _.get(item, 'position'),
                company:  _.get(item, 'company'),
                period:   `${item.start_dt} &mdash; ${getDtFallback(item.end_dt, isRu)}`,
                location: _.get(item, 'location'),
                achiev:   _.get(item, 'achiev', [])
            }))
        },
		summary() {
			const salary = _.get(this.cv, 'profile.salary', 0)

			return {
                text:       _.get(this.cv, 'profile.summary', ''),
                salary:     new Intl.NumberFormat().format(salary),
                salary_sfx: _.get(this.cv, 'profile.salary_sfx', ''),
            }
		},
        header() {
            const position = _.get(this.experience, '0.position')
            const company  = _.get(this.experience, '0.company')

            return {
                full_name: _.get(this.cv, 'profile.full_name'),
                position:  position,
                company:   company,
                residence: _.get(this.cv, 'profile.residence'),
            }
        },
        contacts() {
            return [
                {
                    value: _.get(this.cv, 'profile.email'),
                    key:   'email',
                },
                {
                    value: _.get(this.cv, 'profile.phone'),
                    key:   'phone',
                }
            ]
        },
        skills() {
            return _.get(this.cv, 'profile.key_skills', [])
                .toSorted((a, b) => a.order - b.order)
        },
        education() {
            return _.get(this.cv, 'education', []).map(ed => ({
                university: _.get(ed, 'university'),
                points:     _.get(ed, 'achiev', []),
                period:     `${ed.start_dt} &mdash; ${ed.end_dt}`,
            }))
        },
        projects() {
            return _.get(this.cv, 'projects', []).map(p => ({
                name:   _.get(p, 'name'),
                points: _.get(p, 'points', []),
				link:   _.get(p, 'link'),
            }))
        },
		languages() {
			return _.get(this.cv, 'languages', [])
		}
    },
    actions: {
        load() {
			const Ls = useLanguageStore()
            const key    = `cv${Ls.language}`

			if (Ls.isLoaded) {
				return
			}

            if (!_.isNil(sessionStorage.getItem(key))) {
                this.fill(JSON.parse(sessionStorage.getItem(key)), Ls.language)
            } else {
                let h = 'https://tmyngbay-cv.up.railway.app'

                fetch(`${h}/api/v2/cv?lang=${Ls.language}`)
                    .then(res => res.json())
                    .then(data => {
                        this.fill(_.get(data, 'data'), Ls.language, key)
                    })
			}

			Ls.pushToLoaded()
        },
        fill(data, language, key = '') {
            if (_.isNil(data)) {
                return
            }

            if (key.length > 0 && _.isNil(sessionStorage.getItem(key))) {
                sessionStorage.setItem(key, JSON.stringify(data))
            }

            switch (language) {
                case LANG.EN:
                    this.cvEn = data
                    break
                default:
                    this.cvRu = data
            }
        }
    }
})