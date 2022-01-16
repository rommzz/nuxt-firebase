<!-- Please remove this file from your project -->
<template>
  <div
    class="relative flex items-top justify-center p-5 bg-gray-100 sm:items-center sm:pt-0"
  >
    <link
      href="https://cdn.jsdelivr.net/npm/tailwindcss@2.1.2/dist/tailwind.min.css"
      rel="stylesheet"
    />
    <div class="max-w-4xl mx-auto sm:px-6 lg:px-8">
      <div class="mt-8 bg-white overflow-hidden shadow sm:rounded-lg p-6">
        <h2 class="text-2xl leading-7 font-semibold">
          Selamat datang di aplikasi catat buwuh
        </h2>
        <p class="mt-3 text-gray-600">
          Aplikasi untuk mencatat daftar buwuh teman, saudara atau siapapun.<br />
        </p>
        <p class="mt-4 pt-4 text-gray-800 border-t border-dashed">
          Untuk memulai mencatat, tekan tombol dibawah ini.
        </p>
      </div>
      <div class="flex justify-center pt-4">
        <nuxt-link to="/buwuh">
          <Button label="Mulai buat data"/>
        </nuxt-link>
      </div>
      <template v-if="false">
        <nuxt-link to="/login">
          <Button label="Login"/>
        </nuxt-link>
        <Button label="Logout" @click="logout()"/>
        <Button label="Push Data" @click="pushData()"/>
        <Button label="Load Data" @click="loadData()"/>

      </template>

    </div>
  </div>
</template>

<script>
import { collection, addDoc, query, where, getDocs } from 'firebase/firestore'
import { signOut, getAuth } from "firebase/auth";
import Button from "./Button.vue";
import { db } from "~/plugins/firebase.js"

export default {
  name: "NuxtTutorial",
  components: { Button },		
  // created () {
  // 	console.log('tes', process.env.API_KEY);
  // },
  methods: {
    async buttonClick () {
      // const ref = doc(db, 'buwuh', )
      const document = {
        name: "waluyo",
        value: 50000,
        date: '2022-01-01'
      };
      try {
        await addDoc(collection(db, 'buwuh'), document)
        alert("Success!")
      } catch (e) {
        alert("Error!")
        console.error(e)
      }
    },
		async pushData() {
			const document = {
        name: "waluyo winarno",
        value: 50000,
        date: '2022-01-01',
				user_id: this.$store.state.user.user.uid
      };
      try {
        await addDoc(collection(db, 'buwuh'), document)
        console.log('succes');
      } catch (e) {
        console.error(e)
      }
		},
		async loadData() {
			const q = query(collection(db, "buwuh"), where("user_id", "==", this.$store.state.user.user.uid));

			const querySnapshot = await getDocs(q);
			querySnapshot.forEach((doc) => {
				// doc.data() is never undefined for query doc snapshots
				console.log(doc.id, " => ", doc.data());
			});
		},
    logout() {
      const auth = getAuth()
      signOut(auth).then(() => {
        console.log('logged out');
        this.$store.commit('user/clearUserData')
      }).catch(e => {
        console.log(e);
      })
    }
  }
}
</script>
