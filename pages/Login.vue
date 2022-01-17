<template>
  <div class="">
    <form class="shadow-lg rounded-md shadow-sm -space-y-px mx-auto max-w-screen-sm p-4 bg-gray-100" @submit.prevent>
      <div class="font-bold py-8 text-2xl text-center">
        LOGIN
      </div>
      <div class="">
        <div>
          <label for="email-address" class="sr-only">Email address</label>
          <input id="email-address" v-model="form.email" name="email" type="email" autocomplete="email" required="" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address" />
        </div>
        <div>
          <label for="password" class="sr-only">Password</label>
          <input id="password" v-model="form.password" name="password" :type="showPassword ? 'text' : 'password'" autocomplete="current-password" required="" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" />
        </div>
        <div class="pt-1 text-sm">
          <label for="showPassword">Lihat password</label>
          <input id="showPassword" v-model="showPassword" type="checkbox">
        </div>
      </div>
      <div class="flex justify-between py-4">
        <div>
          <nuxt-link to="/register">
						<span class="hover:text-blue-500" >
							Belum Punya Akun?
						</span>
					</nuxt-link>
        </div>
        <div>
          <span>
            Lupa password?
          </span>
        </div>
      </div>
      <div>
        <Button :isLoading="isLoading" label="Masuk" class="min-w-full" @click="submit()">
					<font-awesome-icon :icon="['fas', 'sign-in-alt']" class="ml-1"/>
				</Button>
        <div class="mt-2 bg-gray-400 mx-auto w-3/4" style="height: 1px;"/>
        <Button class="min-w-full my-2" label="Masuk dengan Google" @click="submitGoogle()">
					<font-awesome-icon :icon="['fab', 'google']" class="ml-1"/>
				</Button>
        <Button class="min-w-full"  label="Masuk dengan Facebook" @click="submitFb()">
					<font-awesome-icon :icon="['fab', 'facebook-square']" class="ml-1"/>
				</Button>
      </div>
    </form>
  </div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword, FacebookAuthProvider, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// import { mapMutations } from "vuex";
import Button from "~/components/Button.vue";


export default {
    name: "LoginPage",
    components: { Button },
		middleware: 'loggedin',
    data() {
      return {
        form: this.getClearForm(),
        showPassword: false,
				isLoading: false
      }
    },
    methods: {
      getClearForm() {
        return {
          email: null,
          password: null
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
        if (!this.form.email && !this.form.password) {
          this.$toast.success('Lengkapi form terlebih dahulu!')
          return
        }
				this.isLoading = true 
				const email = this.form.email
				const password = this.form.password
				const auth = getAuth();
				signInWithEmailAndPassword (auth, email, password)
					.then((userCredential) => {
						// Signed in 
            const user = {
              uid: userCredential.user.uid,
              email: userCredential.user.email,
            }
            this.$store.commit('user/setUserData', user)
						this.$toast.success('Login berhasil')
						this.$router.push({ path: '/buwuh' })
					})
					.catch((error) => {
						console.log(error.message);
						this.$toast.error('gagal login: '+error.message)
					}).finally(() => {
						this.isLoading = false
					})
			}
    }
}
</script>

<style>

</style>