<template>
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
						<Button fill-width color="green" label="Edit"/>
					</nuxt-link>
					<div class="my-1" />
					<Button color="red" label="Hapus"/>
				</div>
			</div>
			<div class="my-2 bg-gray-300 h-0.5" :key="'line'+index" v-if="index+1 < items.length"/>
		</template>
	</div>
</template>

<script>
import Button from "./Button.vue";
export default {
	name: 'ListData',
	components: { Button },
	props:{
		items: {
			type: Array,
			default: () => []
		}
	},
	methods: {
		edit(v) {
			this.$router.push({ 
				name: 'buwuh-id',
				params: { id: v }
			 })
		}
	}
}
</script>

<style>

</style>