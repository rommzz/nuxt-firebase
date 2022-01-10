<template>
	<button
		:isLoading="isLoading"
		class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
		@click="$emit('click', $event);"
		>
		<template v-if="isLoading">
			<svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
				<!-- ... -->
			</svg>
		</template>
		<template v-else>
			{{ label }}
		</template>
	</button>
</template>

<script>
export default {
	name: 'ButtonBase',
	props: {
		label: {
			type: String,
			default: 'button',
		},
		isLoading: {
			type: Boolean,
			default: false,
		},
		
	}
}
</script>

<style>

</style>