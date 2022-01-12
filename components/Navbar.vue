<template>
	<nav class="p-5 bg-blue-500 text-white font-bold flex justify-between">
		<div>
			CATET
		</div>
		<div>
			{{ $store.state.user.user.email }}
		</div>
	</nav>
</template>

<script>
export default {
	name: "NavigationBar"
}
</script>

<style>

</style>