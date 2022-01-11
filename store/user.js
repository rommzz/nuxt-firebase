export const state = () => ({
    user: null
  })
  
  export const mutations = {
    setUserData(state,  userData) {
        state.user = userData
        localStorage.setItem('user', JSON.stringify(userData))
    },
    clearUserData () {
        localStorage.removeItem('user')
      },
  }