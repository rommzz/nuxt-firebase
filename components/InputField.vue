<template>
  <div class="w-full">
    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
      {{ label }}
    </label>
    <input
      id="grid-first-name"
      v-model="inputVal" 
      class="appearance-none block w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-blue-900 border-blue-500" 
      :type="type" 
      :placeholder="placeholder">
  </div>
</template>

<script>
export default {
  name: 'InputField',
  props: {
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      default: 'placeholder'
    },
    label: {
      type: String,
      default: 'label'
    }
  },
  computed: {
    inputVal: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit('input', val);
      }
    },
  }
}
</script>

<style>

</style>