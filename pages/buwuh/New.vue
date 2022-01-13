<template>
  <div class="bg-gray-100 shadow-md p-2 sm:p-10 rounded-md">
    <div>
      <InputField 
        v-model="form.name"
        label="Nama"
        placeholder="Ahmad Winarno"
      />
      <InputField 
        v-model="form.value"
        type="number"
        label="Nominal"
        placeholder="50000"
      />
    </div>
    <Button label="Simpan"/>
  </div>
</template>

<script>
import InputField from "~/components/InputField.vue";
import Button from "~/components/Button.vue";
export default {
    name: "BuwuhForm",
    components: { InputField, Button },
    data() {
      return{
        form: this.getClearForm()
      }
    },
    methods: {
      getClearForm() {
        return{
          name: null,
          value: null,
          user_id: this.$store.state.user.user.uid,
          date: null
        }
      }
    }
}
</script>

<style>

</style>