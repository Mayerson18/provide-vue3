<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3.0 + Vite" />
  <Info />
</template>

<script setup>
import HelloWorld from './components/HelloWorld/HelloWorld.vue';
import Info from './components/Info/Info.vue';
import {provideCount} from './hooks/Count'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Info
  },
  setup() {
    provideCount
  }
}
</script>
