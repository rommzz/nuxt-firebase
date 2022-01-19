<template>
	<div class="bg-gray-100 shadow-md p-2 rounded-md">
    <div v-if="isLoading" class="text-2xl text-center">
      <span class="animate-pulse">Memuat data...</span>
    </div>
    <template v-else>
      <template v-if="items.length">
        <div class="flex justify-between mb-5">
					<span class="self-center sm:text-4xl text-2xl font-bold">
						List Data
					</span>
					<nuxt-link to="/buwuh/new">
						<Button label="Tambah data">
							<font-awesome-icon :icon="['fas', 'plus']" class="mr-1"/>
						</Button>
					</nuxt-link>
				</div>
				<div>
					<template v-for="(item, index) in items">
						<div :key="index" class="flex my-2">
							<div class="w-full p-1 mr-2 pr-2 pl-2 bg-white rounded">
								<div>
									<span class="sm:text-3xl text-xl font-bold">
										{{ item.data.name }}
									</span>
								</div>
								<div>
									<span class="font-medium">
										{{ item.data.value }}
									</span>
								</div>
							</div>
							<div class="text-center">
								<nuxt-link :to="{ name: 'buwuh-id', params: { id: item.id }}">
									<Button fill-width color="green" label="Edit">
										<font-awesome-icon :icon="['fas', 'edit']" class="mr-1"/>
									</Button>
								</nuxt-link>
								<div class="my-1" />
								<Button fill-width color="red" label="Hapus" @click="deleteData(item)">
									<font-awesome-icon :icon="['fas', 'trash-alt']" class="mr-1"/>
								</Button>
							</div>
						</div>
						<div v-if="index+1 < items.length" :key="'line'+index" class="my-2 bg-gray-300 h-0.5"/>
					</template>
				</div>
      </template>
      <div v-else class="text-center py-5">
        <div class="mb-3">
          <span>
            Belum ada data
          </span>
        </div>
        <nuxt-link to="/buwuh/new">
          <Button label="Tambah data">
						<font-awesome-icon :icon="['fas', 'plus']" class="mr-1"/>
					</Button>
        </nuxt-link>
      </div>
    </template>
	</div>
</template>

<script>
import { collection, query, where, getDocs, doc, deleteDoc } from 'firebase/firestore'
import { db } from "~/plugins/firebase.js"
import Button from '~/components/Button.vue'
export default {
    name: "BuwuhIndex",
		components: { Button },
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
			},
			edit(v) {
				this.$router.push({ 
					name: 'buwuh-id',
					params: { id: v }
				})
			},
			async deleteData(item) {
				this.isLoading = true;
				try {
					await deleteDoc(doc(db, "buwuh", item.id));
					this.$toast.success('Data berhasi dihapus')
					this.items = []
					this.getData()
				} catch (error) {
					this.isLoading = false;
					console.log(error);
				}
			},
    }
}
</script>
