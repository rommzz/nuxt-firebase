<template>
	<div>
		<span>
			DATA
		</span>
		<table class="table-auto">
			<thead>
				<tr>
					<th>Nama</th>
					<th>Nominal</th>
					<th>Aksi</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(item, index) in items" :key="index">
					<td>{{ item.data.name }}</td>
					<td>{{ item.data.value }}</td>
					<td>1961</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
import { collection, query, where, getDocs } from 'firebase/firestore'
import { db } from "~/plugins/firebase.js"
export default {
  name: 'BuwuhIndex',
  middleware: 'authenticated',
	data() {
		return{
			items: []
		}
	},
	created() {
		this.getData()
	},
	methods: {
		async getData() {
			const q = query(collection(db, "buwuh"), where("user_id", "==", this.$store.state.user.user.uid));

			const querySnapshot = await getDocs(q);
			querySnapshot.forEach((doc) => {
				// doc.data() is never undefined for query doc snapshots
				this.items.push({
					id: doc.id,
					data: doc.data()
				})
			});
		}
	},
}
</script>
