export const AtomsCompletedChallenges = () => import('../../components/atoms/CompletedChallenges.vue' /* webpackChunkName: "components/atoms-completed-challenges" */).then(c => wrapFunctional(c.default || c))
export const AtomsCountdownDigits = () => import('../../components/atoms/CountdownDigits.vue' /* webpackChunkName: "components/atoms-countdown-digits" */).then(c => wrapFunctional(c.default || c))
export const AtomsExperienceBar = () => import('../../components/atoms/ExperienceBar.vue' /* webpackChunkName: "components/atoms-experience-bar" */).then(c => wrapFunctional(c.default || c))
export const AtomsLevelUpModal = () => import('../../components/atoms/LevelUpModal.vue' /* webpackChunkName: "components/atoms-level-up-modal" */).then(c => wrapFunctional(c.default || c))
export const AtomsStartCycle = () => import('../../components/atoms/StartCycle.vue' /* webpackChunkName: "components/atoms-start-cycle" */).then(c => wrapFunctional(c.default || c))
export const MoleculesChallenge = () => import('../../components/molecules/Challenge.vue' /* webpackChunkName: "components/molecules-challenge" */).then(c => wrapFunctional(c.default || c))
export const MoleculesCountdown = () => import('../../components/molecules/Countdown.vue' /* webpackChunkName: "components/molecules-countdown" */).then(c => wrapFunctional(c.default || c))
export const MoleculesProfile = () => import('../../components/molecules/profile.vue' /* webpackChunkName: "components/molecules-profile" */).then(c => wrapFunctional(c.default || c))
export const OrganismsCard = () => import('../../components/organisms/Card.vue' /* webpackChunkName: "components/organisms-card" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
