export function useAnimations() {
  return {
    transitionRight: {
      initial:{ opacity: 0, x: -100 },
      animate:{ opacity: 1, x: 0 },
    }, 
    fade: {
      initial:{ opacity: 0 },
      animate:{ opacity: 1 }
    },
    transitionLeft: {
      initial:{ opacity: 0, x: 100 },
      animate:{ opacity: 1, x: 0 }
    },
    transitionBottom: {
      initial:{ opacity: 0, y: 100 },
      animate:{ opacity: 1, y: 0 }
    }
  }
}
