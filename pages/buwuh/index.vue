<template>
	<div class="bg-gray-100 shadow-md p-2 rounded-md">
    <div v-if="isLoading">
      <span class="anitmate-pulse">Memuat data...</span>
    </div>
    <template v-else>
      <template v-if="items.length">
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
      </template>
      <div v-else class="text-center py-5">
        <div class="mb-3">
          <span>
            Belum ada data
          </span>
        </div>
        <nuxt-link to="/">
          <Button label="Tambah data"/>
        </nuxt-link>
      </div>
    </template>
	</div>
</template>

<script>
import { collection, query, where, getDocs } from 'firebase/firestore'
import { db } from "~/plugins/firebase.js"
import Button from '~/components/Button.vue'
export default {
    name: "BuwuhIndex",
    middleware: "authenticated",
    data() {
        return {
            items: [],
            isLoading: false,
        };
    },
    created() {
        this.getData();
    },
    methods: {
        async getData() {
            this.isLoading = true;
            const q = query(collection(db, "buwuh"), where("user_id", "==", this.$store.state.user.user.uid));
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                this.items.push({
                    id: doc.id,
                    data: doc.data()
                });
            });
            this.isLoading = false;
        }
    },
    components: { Button }
}
</script>
