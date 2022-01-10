<template>
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        {{ label }}
    </button>
</template>

<script>
export default {
    name: 'ButtonBase',
    props: {
        label: {
            type: String,
            default: 'button',
        }
    }
}
</script>

<style>

</style>