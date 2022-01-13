<template>
	<button
		:disabled="isLoading"
		:isLoading="isLoading"
		:fill-width="fillWidth"
		:color="color"
		:class="`text-white font-bold py-2 px-4 rounded ${isLoading ? 'cursor-not-allowed bg-gray-300' : 'bg-' + color + '-500 hover:bg-' + color + '-700'} ${fillWidth && 'w-full'}`"
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