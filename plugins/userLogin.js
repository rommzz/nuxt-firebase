export default (store) => {
    const userInfo = localStorage.getItem('user')
    if (userInfo) {
        const userData = JSON.parse(userInfo)
        store.store.commit('user/setUserData', userData)
        // const userData = JSON.parse(userInfo)
    }
}
