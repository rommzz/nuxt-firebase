<template>
  <div class="bg-gray-100 shadow-md p-2 sm:p-10 rounded-md">
		<form @submit.prevent>
			<div>
				<InputField 
					v-model="form.name"
					required
					label="Nama"
					placeholder="Ahmad Winarno"
				/>
				<InputField 
					v-model="form.value"
					type="number"
					label="Nominal"
					placeholder="50000"
				/>
				<InputField 
					v-model="form.date"
					type="date"
					label="Tanggal"
				/>
				<div class="w-full">
					<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
						Catatan
					</label>
					<textarea
						v-model="form.notes" 
						class="appearance-none block w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-blue-900 border-blue-500" 
						placeholder="(opsional)"></textarea>
				</div>
			</div>
			<Button :is-loading="isLoading" label="Simpan" @click="submit()"/>
		</form>
  </div>
</template>

<script>
import { collection, addDoc } from 'firebase/firestore'
import InputField from "~/components/InputField.vue";
import Button from "~/components/Button.vue";
import { db } from "~/plugins/firebase.js"
export default {
    name: "BuwuhForm",
    components: { InputField, Button },
		props: {
			data: {
				type: Object,
				default: ()=> {}
			}
		},
    data() {
      return{
        form: this.getClearForm(),
				isLoading: false
      }
    },
		created() {
			if (this.data) {
				this.form = this.data
			}
		},
    methods: {
      getClearForm() {
        return{
          name: null,
          value: null,
          user_id: this.$store.state.user.user.uid,
          date: '2022-01-06'
        }
      },
			async submit() {
				this.isLoading = true
				try {
					await addDoc(collection(db, 'buwuh'), this.form)
					console.log('succes');
					this.$toast.success('Data berhasi ditambahkan')
					this.$router.push({ path: '/buwuh' })
				} catch (e) {
					console.error(e)
				}
				this.isLoading = false
			}
    }
}
</script>

<style>

</style>