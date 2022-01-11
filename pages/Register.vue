<template>
  <div class="p-11">
    <form v-on:submit.prevent="submit()" class="shadow-lg rounded-md shadow-sm -space-y-px mx-auto max-w-screen-sm p-4 bg-gray-100">
      <div class="font-bold py-8 text-2xl text-center">
        REGISTER
      </div>
      <div class="">
        <div>
          <label for="email-address" class="sr-only">Email</label>
          <input id="email-address" v-model="form.email" name="email" type="email" autocomplete="email" required="" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email" />
        </div>
        <div>
          <label for="password" class="sr-only">Password</label>
          <input id="password" v-model="form.password" name="password" type="password" required="" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" />
        </div>
        <div>
          <label for="passwordC" class="sr-only">Konfirmasi Password</label>
          <input id="passwordC" v-model="form.passwordRepeat" name="password" type="password" required="" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Konfrimasi password" />
        </div>
      </div>
      <div class="flex justify-between py-4">
        <div>
					<nuxt-link to="/login">
						<span class="hover:text-blue-500" >
							Sudah Punya Akun?
						</span>
					</nuxt-link>
        </div>
      </div>
      <div>
        <Button @click="submit()" class="min-w-full" label="Daftar"/>
				<div class="mt-2 bg-gray-400 mx-auto w-3/4"/>
        <Button class="min-w-full my-2" label="Masuk dengan Google"/>
        <Button class="min-w-full" label="Masuk dengan Facebook "/>
      </div>
    </form>
  </div>
</template>

<script>
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import Button from "~/components/Button.vue";

export default {
    name: "RegisterPage",
    components: { Button },
    data() {
      return {
        form: this.getClearForm(),
        showPassword: false
      }
    },
		created () {
			this.getUser()
		},
    methods: {
			getUser() {
				const auth = getAuth();
				onAuthStateChanged(auth, (user) => {
					if (user) {
						// User is signed in, see docs for a list of available properties
						// https://firebase.google.com/docs/reference/js/firebase.User
						const uid = user.uid;
						console.log(uid);
						// ...
					} else {
						// User is signed out
						// ...
					}
				});
			},
      getClearForm() {
        return {
          email: null,
          password: null,
					passwordRepeat: null,
        }
      },
			submit() {
				const auth = getAuth();
				createUserWithEmailAndPassword(auth, this.form.email, this.form.password)
					.then((userCredential) => {
						console.log("succes create", userCredential);
						// const user = userCredential.user;
						// ...
					})
					.catch((error) => {
						console.log(error);
					});
			}
    }
}
</script>

<style>

</style>