<template>
  <b-container id="app">
    <b-row>
      <mvp-picker @addMVP="onAddMVP"/>
    </b-row>
  </b-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import MVPPicker from '@/components/MVPPicker.vue';

const App = Vue.extend({
 name: 'tracker',
 components: {
    'mvp-picker': MVPPicker
  }
})

export default App
// export default class App extends Vue {
//   onAddMVP() {
//     console.log('hey')
//   }
// }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
