<template>
  <b-col>
    <b-row>
      <b-col><mvp-picker-dropdown v-model="chosenMVP" /></b-col>
      <b-col><b-button @click="$emit('addMVP', chosenMVP)" :disabled="chosenMVP === null" variant="primary">Add MVP</b-button></b-col>
    </b-row>
  </b-col>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';
import MVPPickerDropdownVue from '@/components/MVPPickerDropdown.vue';

@Component({
  name: 'MVPPicker',
  components: {
    'mvp-picker-dropdown': MVPPickerDropdownVue
  }
})
export default class MVPPicker extends Vue {
  data() {
    return {
      chosenMVP: null
    }
  }
}
</script>

