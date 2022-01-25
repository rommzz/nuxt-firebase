<template>
	<div class="bg-gray-100 shadow-md p-2 rounded-md mb-10">
    <div v-if="isLoading && !search" class="flex justify-center text-2xl text-center">
      <div class="mr-2">
				<font-awesome-icon :icon="['fas', 'circle-notch']" class="animate-spin"/>
			</div>
			<span >Memuat data...</span>
    </div>
    <template v-else>
      <template v-if="items.length || search">
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
				<form class="flex focus-within:shadow-lg" @submit.prevent>
					<input v-model="search" type="search" placeholder="Cari Nama ..." class="border flex-1 focus:border-blue-500 focus:outline-none p-2 rounded-l">
					<button type="submit" class="bg-blue-500 hover:bg-blue-700 px-3 rounded-r text-white" @click="searchData()">
						<font-awesome-icon :icon="['fas', 'search']" class="mr-1"/>
					</button>
				</form>
				<div v-if="searchLoad" class="flex justify-center text-2xl text-center">
					<div class="mr-2">
						<font-awesome-icon :icon="['fas', 'circle-notch']" class="animate-spin"/>
					</div>
					<span >Mencari data...</span>
				</div>
				<template v-else>
					<div v-if="items.length">
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
						<div v-if="hasLoadMore" class="text-center mt-4">
							<Button :is-loading="isLoadMore" label="Muat Lebih" @click="loadMore()"/>
						</div>
					</div>
					<div v-else>
						Nama tidak ditemukan
					</div>
				</template>
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
import { collection, query, where, getDocs, doc, deleteDoc, orderBy, limit, startAfter } from 'firebase/firestore'
import { db } from "~/plugins/firebase.js"
import Button from '~/components/Button.vue'
export default {
    name: "BuwuhIndex",
		components: { Button },
    middleware: "authenticated",
    data() {
			return {
				hasLoadMore: true,
				items: [],
				isLoading: false,
				isLoadMore: false,
				searchLoad: false,
				lastVisible: null,
				limit: 20,
				search: null,
				searchItem: [],
			};
    },
		watch: {
			search(x) {
				if (this.searchItem.length && !x) {
					this.searchItem = []
					this.getData()
				}
			}
		},
    created() {
      this.getData();
    },
    methods: {
			async getData() {
				this.items = []
				this.isLoading = true;
				const q = query(collection(db, "buwuh"), where("user_id", "==", this.$store.state.user.user.uid), orderBy('name'), limit(this.limit));
				const querySnapshot = await getDocs(q);
				let count = 0
				querySnapshot.forEach((doc) => {
					// doc.data() is never undefined for query doc snapshots
					this.items.push({
						id: doc.id,
						data: doc.data()
					})
					count++
					this.lastVisible = doc
				})
				this.hasLoadMore = count === this.limit
				this.isLoading = false;
			},
			async searchData() {
				this.searchLoad = true;
				console.log((this.search.toLowerCase()).split(' '));
				const q = query(
					collection(db, "buwuh"),
					where("user_id", "==", this.$store.state.user.user.uid),	
					where('keys', "array-contains-any", (this.search.toLowerCase()).split(' ')),
					);
				try {
					const querySnapshot = await getDocs(q);
					const searchItem = []
					querySnapshot.forEach((doc) => {
						console.log(doc.data());
						// doc.data() is never undefined for query doc snapshots
						searchItem.push({
							id: doc.id,
							data: doc.data()
						})
					})
					if (searchItem.length) {
						this.hasLoadMore = false
						this.searchItem = searchItem
						this.items = searchItem
					}
					else {
						this.$toast.error('data tidak ditemukan')
					}
					console.log('done');
				} catch (error) {
					console.log(error);
				}
				this.searchLoad = false;
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
			async loadMore() {
				this.isLoadMore = true
				const loadMore = query(collection(db, "buwuh"),
					where("user_id", "==", this.$store.state.user.user.uid),
					orderBy('name'),
					startAfter(this.lastVisible),
					limit(this.limit));
				let count = 0
				const querySnapshot = await getDocs(loadMore);
				querySnapshot.forEach((doc) => {
					// doc.data() is never undefined for query doc snapshots
					this.items.push({
						id: doc.id,
						data: doc.data()
					})
					count++
					this.lastVisible = doc
				})
				this.hasLoadMore = count === this.limit
				this.isLoadMore = false;
			}
    }
}
</script>
