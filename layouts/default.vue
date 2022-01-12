<template>
  <div>
    <Navbar v-if="$store.state.user.user" />
		<div class="mx-2 sm:mx-auto sm:mt-10 mt-2 md:w-3/4 l:w-3/4 sm:w-3/4">
			<Nuxt />
		</div>
  </div>
</template>
<script>
export default {
	name: "MainApp"
}
</script>