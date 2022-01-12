<template>
	<button
		:disabled="isLoading"
		:isLoading="isLoading"
		:class="`text-white font-bold py-2 px-4 rounded ${isLoading ? 'cursor-not-allowed bg-gray-300' : 'bg-blue-500 hover:bg-blue-700'}`"
		@click="$emit('click', $event);"
		>
		<template v-if="isLoading">
			<div class="animate-pulse">
				Processing...
			</div>
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