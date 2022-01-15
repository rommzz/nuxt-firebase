<template>
	<BuwuhForm v-if="loaded" :data="data" :id="$route.params.id"/>
</template>

<script>
import { doc, getDoc } from 'firebase/firestore'
import { db } from "~/plugins/firebase.js"
import BuwuhForm from "~/components/BuwuhForm.vue";

export default {
	name: 'NewBuwuh',
	middleware: 'authenticated',
	component: { BuwuhForm },
	data() {
		return{
			data: {},
			loaded: false,
		}
	},
	created() {
		this.getData()
	},
	methods: {
		async getData() {
			// this.isLoading = true;
			const docRef = doc(db, "buwuh", this.$route.params.id);
			const docSnap = await getDoc(docRef);
			// const q = query(collection(db, "buwuh"), where(FieldPath.documentId, "==", this.$route.params.id));
			// const querySnapshot = await getDocs(q);
			if (docSnap.exists()) {
				console.log("Document data:", docSnap.data());
				this.data = docSnap.data()
			} else {
				// doc.data() will be undefined in this case
				console.log("No such document!");
			}
			this.loaded = true
		}
	}
}
</script>

<style>

</style>