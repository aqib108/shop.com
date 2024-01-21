<template>
   <div class="form-outline">
    <label :for="name">{{label}}</label>
    <VeeField
      :name="name"
      :label="label"
      :modelValue="modelValue"
      @input="$emit('modelUpdate', $event)"
      :id="name"
      class="form-control"
      v-bind="$attrs"
    />
    <VeeErrorMessage :name="name" class="text-danger" />
  </div>
</template>
<script>
export default {
  inheritAttrs: false,
  props: {
    name: { type: String, required: true },
    label: { type: String, default: '' },
    modelValue: { type: String, default: '' }
  }
}
</script>
