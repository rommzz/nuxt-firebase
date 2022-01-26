<template>
	<nav class="p-5 bg-blue-500 text-white font-bold flex justify-between">
		<div>
			CATET BUWUH
		</div>
		<div>
			{{ $store.state.user.user.displayName || $store.state.user.user.email }}
			<button @click="logout()" class="bg-blue-500 border hover:bg-white hover:text-blue-500 px-1 rounded">Logout<font-awesome-icon :icon="['fas', 'sign-out-alt']" class="ml-1"/></button>
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
        this.$store.commit('user/clearUserData')
      }).catch(e => {
        console.log(e);
      })
    }
	}
}
</script>

<style>

</style>