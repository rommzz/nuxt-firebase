<template>
	<button
		:disabled="isLoading"
		:is-loading="isLoading"
		:fill-width="fillWidth"
		:color="color"
		:class="`text-white font-bold py-2 px-4 rounded ${isLoading ? 'cursor-not-allowed bg-gray-300' : (color == 'red') ? 'bg-red-500 hover:bg-red-700' : (color == 'green') ? 'bg-green-500 hover:bg-green-700': 'bg-blue-500 hover:bg-blue-700'} ${fillWidth && 'min-w-max w-full'}`"
		@click="$emit('click', $event);"
		>
		<template v-if="isLoading">
			<div class="animate-pulse">
				Processing...
			</div>
		</template>
		<template v-else>
			<slot />
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
		color: {
			type: String,
			default: 'blue',
		},
		isLoading: {
			type: Boolean,
			default: false,
		},
		fillWidth: {
			type: Boolean,
			default: false,
		},
		
	}
}
</script>

<style>

</style>