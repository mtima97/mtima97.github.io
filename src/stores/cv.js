import _ from 'lodash'

import { defineStore } from 'pinia'
import { useLanguageStore } from '@/stores/language.js'
import { getDateStrIfExists, getStartFallback, getEndFallback } from '@/utils/date.js'

const resources = [
    'profile',
    'experience',
    'education',
    'languages',
    'projects'
]

const cacheKey = 'cv'

export const useCvStore = defineStore('cv', {
    state: () => ({
        profile: {},
        experience: {},
        education: {},
        languages: {},
        projects: {}
    }),
    getters: {
		wholePageView(state) {
			const Ls = useLanguageStore()

			return {
				profile:    _.get(state.profile, Ls.language),
				experience: _.get(state.experience, Ls.language),
				education:  _.get(state.education, Ls.language),
				languages:  _.get(state.languages, Ls.language),
				projects:   _.get(state.projects, Ls.language),
			}
		},
		summaryView() {
			return _.get(this.wholePageView.profile, 'summary', '')
		},
        headerView() {
			const profile = this.wholePageView.profile

            return {
                fullName:  _.get(profile, 'fullname', ''),
                position:  _.get(this.experienceView, '0.position', ''),
                company:   _.get(this.experienceView, '0.company', ''),
                residence: _.get(profile, 'residence', ''),
            }
        },
        contactsView() {
            const Ls = useLanguageStore()
			const profile = this.wholePageView.profile

            return [
                {
                    label: Ls.isRu ? 'Почта' : 'Email',
                    value: _.get(profile, 'email', '')
                },
                {
                    label: Ls.isRu ? 'Телефон' : 'Phone',
                    value: _.get(profile, 'phone', '')
                }
            ]
        },
        skillsView() {
            return _.get(this.wholePageView.profile, 'skills', [])
        },
        experienceView() {
            const Ls = useLanguageStore()

            return _.get(this.wholePageView, 'experience', []).map(item => {
                let d1txt = getDateStrIfExists(item.start_dt, getStartFallback(Ls.isRu))
                let d2txt = getDateStrIfExists(item.end_dt, getEndFallback(Ls.isRu))

                return {
                    position: _.get(item, 'position_name', ''),
                    company:  _.get(item, 'company_name', ''),
                    period:   `${d1txt} &mdash; ${d2txt}`,
                    location: _.get(item, 'location', ''),
                    points:   _.get(item, 'skills', [])
                }
            })
        },
        educationView() {
            const Ls = useLanguageStore()

            return _.get(this.wholePageView, 'education', []).map(el => {
                let d1txt = getDateStrIfExists(el.start_dt, getStartFallback(Ls.isRu))
                let d2txt = getDateStrIfExists(el.end_dt, getEndFallback(Ls.isRu))

                return {
                    university: _.get(el, 'university', ''),
                    points:     _.get(el, 'achievements', []).filter(Boolean),
                    period:     `${d1txt} &mdash; ${d2txt}`,
                }
            })
        },
        projectsView() {
            return _.get(this.wholePageView, 'projects', []).map(p => ({
                name:   _.get(p, 'project_name', ''),
                points: _.get(p, 'points', []),
            }))
        },
		languagesView() {
			return _.get(this.wholePageView, 'languages', [])
		}
    },
    actions: {
        load() {
            const host = 'https://tmyngbay-cv.up.railway.app'
			const Ls = useLanguageStore()
            const k    = `${cacheKey}:${Ls.language}`

			if (Ls.isLoaded) {
				return
			}

            if (!_.isNil(sessionStorage.getItem(k))) {
                this.fill(JSON.parse(sessionStorage.getItem(k)), Ls.language)
            } else {
				Promise
					.all(resources.map(r => fetch(`${host}/api/${r}?lang=${Ls.language}`).then(res => res.json())))
					.then(results => this.fill(results, Ls.language))
					.catch(err => console.error(err))
			}

			Ls.pushToLoaded()
        },
        fill(results, lang) {
            const k = `${cacheKey}:${lang}`

            if (_.isNil(sessionStorage.getItem(k))) {
                sessionStorage.setItem(k, JSON.stringify(results))
            }

            resources.forEach((r, i) => {
                switch (r) {
                    case 'profile':
                        this.profile[lang] = _.get(results, `${i}.data`, {})
                        break
                    case 'experience':
                        this.experience[lang] = _.get(results, `${i}.data`, [])
                        break
                    case 'education':
                        this.education[lang] = _.get(results, `${i}.data`, [])
                        break
                    case 'languages':
                        this.languages[lang] = _.get(results, `${i}.data`, [])
                        break
                    case 'projects':
                        this.projects[lang] = _.get(results, `${i}.data`, [])
                        break
                }
            })
        }
    }
})