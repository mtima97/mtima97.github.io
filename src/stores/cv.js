import { get as _get, isNil as _isNil } from 'lodash'
import { defineStore } from 'pinia'
import { LANG } from '@/constants/lang.js'
import { getDtFallback } from '@/utils/base.js'
import { useLanguageStore } from '@/stores/language.js'

import { toast } from 'vue3-toastify'

export const useCvStore = defineStore('cv', {
    state: () => ({
        cvEn: {},
        cvRu: {},
		isLoading: false,
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

            return _get(this.cv, 'experience', []).map(item => ({
                position: _get(item, 'position'),
                company:  _get(item, 'company'),
                period:   `${item.start_dt} &mdash; ${getDtFallback(item.end_dt, isRu)}`,
                location: _get(item, 'location'),
                achiev:   _get(item, 'achiev', [])
            }))
        },
		summary() {
			const salary = _get(this.cv, 'profile.salary', 0)

			return {
                text:       _get(this.cv, 'profile.summary', ''),
                salary:     new Intl.NumberFormat().format(salary),
                salary_sfx: _get(this.cv, 'profile.salary_sfx', ''),
            }
		},
        header() {
            const position = _get(this.experience, '0.position')
            const company  = _get(this.experience, '0.company')

            return {
                full_name: _get(this.cv, 'profile.full_name'),
                position:  position,
                company:   company,
                residence: _get(this.cv, 'profile.residence'),
            }
        },
        contacts() {
            return [
                {
                    value: _get(this.cv, 'profile.email'),
                    key:   'email',
                },
                {
                    value: _get(this.cv, 'profile.phone'),
                    key:   'phone',
                }
            ]
        },
        skills() {
            return _get(this.cv, 'profile.key_skills', [])
                .toSorted((a, b) => a.order - b.order)
        },
        education() {
            return _get(this.cv, 'education', []).map(ed => ({
                university: _get(ed, 'university'),
                points:     _get(ed, 'achiev', []),
                period:     `${ed.start_dt} &mdash; ${ed.end_dt}`,
            }))
        },
        projects() {
            return _get(this.cv, 'projects', []).map(p => ({
                name:   _get(p, 'name'),
                points: _get(p, 'points', []),
				link:   _get(p, 'link'),
            }))
        },
		languages() {
			return _get(this.cv, 'languages', [])
		}
    },
    actions: {
        load() {
			const Ls = useLanguageStore()
            const key    = `cv${Ls.language}`

			if (Ls.isLoaded) {
				return
			}

            if (!_isNil(sessionStorage.getItem(key))) {
                this.fill(JSON.parse(sessionStorage.getItem(key)), Ls.language)
            } else {
				this.isLoading = true

                let h = 'https://tmyngbay-cv.up.railway.app'

                fetch(`${h}/api/v2/cv?lang=${Ls.language}`)
                    .then(res => res.json())
                    .then(data => this.fill(_get(data, 'data'), Ls.language, key))
					.catch(err => toast.error(`${err?.name}: ${err?.message}`))
					.finally(() => this.isLoading = false)
			}

			Ls.pushToLoaded()
        },
        fill(data, language, key = '') {
            if (_isNil(data)) {
                return
            }

            if (key.length > 0 && _isNil(sessionStorage.getItem(key))) {
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