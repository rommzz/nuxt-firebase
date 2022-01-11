<template>
  <div class="p-11">
    <div class="shadow-lg rounded-md shadow-sm -space-y-px mx-auto max-w-screen-sm p-4 bg-gray-100">
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
          <span >
            Belum punya akun?
          </span>
        </div>
        <div>
          <span>
            Lupa password?
          </span>
        </div>
      </div>
      <div>
        <Button class="min-w-full" label="Masuk"/>
        <Button class="min-w-full my-2" label="Masuk dengan Google"/>
        <Button class="min-w-full" label="Masuk dengan Facebook "/>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "~/components/Button.vue";
export default {
    name: "LoginPage",
    components: { Button },
    data() {
      return {
        form: this.getClearForm(),
        showPassword: false
      }
    },
    methods: {
      getClearForm() {
        return {
          email: null,
          password:  null
        }
      }
    }
}
</script>

<style>

</style>