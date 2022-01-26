<template>
  <div class="shadow-lg rounded-md shadow-sm -space-y-px mx-auto max-w-screen-sm p-4 bg-gray-100">
    <form class="" @submit.prevent>
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
      <div>
        <div class="my-3">
          <Button :is-loading="isLoading" label="Register" @click="submit()"/>
					<nuxt-link to="/login">
						<Button type="button" label="Login"/>
					</nuxt-link>
        </div>
      </div>
    </form>
    <div class="mt-2 bg-gray-400 mx-auto w-3/4" style="height: 1px;"/>
    <div>
      <Button class="min-w-full my-2" label="Masuk dengan Google" @click="submitGoogle()">
        <font-awesome-icon :icon="['fab', 'google']" class="mr-1"/>
      </Button>
      <Button class="min-w-full"  label="Masuk dengan Facebook" @click="submitFb()">
        <font-awesome-icon :icon="['fab', 'facebook-square']" class="mr-1"/>
      </Button>
    </div>
  </div>
</template>

<script>
import { getAuth, createUserWithEmailAndPassword, FacebookAuthProvider, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import Button from "~/components/Button.vue";

export default {
    name: "RegisterPage",
    components: { Button },
		middleware: 'loggedin',
    data() {
      return {
        form: this.getClearForm(),
        isLoading: false
      }
    },
    methods: {
      getClearForm() {
        return {
          email: null,
          password: null,
					passwordRepeat: null,
        }
      },
      submitFb() {
        const provider = new FacebookAuthProvider();
        const auth = getAuth();
        signInWithPopup(auth, provider)
          .then((result) => {
            // The signed-in user info.
            const user = result.user;
            const storeUser = {
              uid: user.uid,
              email: user.email,
              displayName: user.displayName
            }
            this.$store.commit('user/setUserData', storeUser)
						this.$toast.success('Login berhasil')
						this.$router.push({ path: '/buwuh' })

            // ...
          })
          .catch((error) => {
            // The AuthCredential type that was used.
            const credential = FacebookAuthProvider.credentialFromError(error);
            console.log(error, credential);

            // ...
          });
      },
      submitGoogle() {
        const provider = new GoogleAuthProvider();
        const auth = getAuth();
        signInWithPopup(auth, provider)
          .then((result) => {
            // The signed-in user info.
            const user = result.user;
            const storeUser = {
              uid: user.uid,
              email: user.email,
              displayName: user.displayName
            }
            this.$store.commit('user/setUserData', storeUser)
						this.$toast.success('Login berhasil')
						this.$router.push({ path: '/buwuh' })
            // ...
          }).catch((error) => {
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            console.log(error, credential);
            // ...
          });
      },
			submit() {
        if (!this.form.email || !this.form.password || !this.form.passwordRepeat) {
          this.$toast.error('lengkapi form terlebih dahulu')
          return
        }
        if (this.form.password !== this.form.passwordRepeat) {
          this.$toast.error('password tidak cocok')
          return
        }
        this.isLoading = true
				const auth = getAuth();
				createUserWithEmailAndPassword(auth, this.form.email, this.form.password)
					.then((userCredential) => {
            const user = {
              uid: userCredential.user.uid,
              email: userCredential.user.email,
            }
            this.$store.commit('user/setUserData', user)
						this.$toast.success('Berhasil membuat akun')
						this.$router.push({ path: '/buwuh' })
					})
					.catch((error) => {
            if (error.code === 'auth/invalid-email') {
             this.$toast.error('Alamat email tidak valid') 
            }
					}).finally(() => {
            this.isLoading = false
          })
			}
    }
}
</script>

<style>

</style>