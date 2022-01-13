<template>
	<BuwuhForm />
</template>

<script>
import BuwuhForm from "~/components/BuwuhForm.vue";
export default {
	name: 'NewBuwuh',
	middleware: 'authenticated',
	component: { BuwuhForm }
}
</script>

<style>

</style>