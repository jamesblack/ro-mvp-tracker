<template>
  <b-form-select :value="value" @change="$emit('input', $event)" :options="options" />
</template>

<script lang="ts">
import Vue from 'vue'
import MVPDatabase from '@/database/mvp.ts'
import * as R from 'ramda'
export default Vue.extend({
  name: "MVPPickerDropdown",
  props: ['value'],
  computed: {
    options() {
      return R.map((mvp) => {
        return { value: mvp.slug, text: mvp.name }
      }, MVPDatabase.MVPList)
    }
  }
})
</script>
