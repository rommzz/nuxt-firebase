<template>
	<button
		:type="type"
		:disabled="isLoading"
		:is-loading="isLoading"
		:fill-width="fillWidth"
		:color="color"
		:class="`text-white font-bold py-2 px-4 rounded ${isLoading && 'cursor-not-allowed'} ${fillWidth && 'min-w-max w-full'} ${(color == 'red') ? 'bg-red-500 hover:bg-red-700' : (color == 'green') ? 'bg-green-500 hover:bg-green-700': 'bg-blue-500 hover:bg-blue-700'}`"
		@click="$emit('click', $event);"
	>
		<div v-if="isLoading" class="flex">
			<div class="mr-2">
				<font-awesome-icon :icon="['fas', 'circle-notch']" class="animate-spin"/>
			</div>
			<div>
				Processing...
			</div>
		</div>
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
			default: '',
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
		type: {
			type: String,
			default: ''
		}
		
	}
}
</script>

<style>

</style>