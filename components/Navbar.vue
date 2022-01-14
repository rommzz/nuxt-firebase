<template>
	<nav class="p-5 bg-blue-500 text-white font-bold flex justify-between">
		<div>
			CATET
		</div>
		<div>
			{{ $store.state.user.user.email }}
			<button @click="logout()" class="bg-blue-500 border hover:bg-white hover:text-blue-500 px-1 rounded">Logout</button>
		</div>
	</nav>
</template>

<script>
import { signOut, getAuth } from "firebase/auth";
export default {
	name: "NavigationBar",
	methods: {
		logout() {
      const auth = getAuth()
      signOut(auth).then(() => {
        console.log('logged out');
        this.$store.commit('user/clearUserData')
				this.$router.push({ path: '/login' })
      }).catch(e => {
        console.log(e);
      })
    }
	}
}
</script>

<style>

</style>