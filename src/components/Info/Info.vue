<template>
  <div class="info">
    <pre>{{ count }}</pre>
  </div>
</template>

<script >
  import { ref } from 'vue';
  import {useCount} from '../../hooks/Count'
  export default {
    name: 'info',
    setup() {
      const count = ref(useCount());
      console.log('count', count)
      return {
        count
      }
    }
  }
</script>

<style>

</style>