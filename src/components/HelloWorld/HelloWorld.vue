<template>
  <h1>{{ msg }}</h1>
  <button @click="incrementCount" >count is: {{ count }}</button>
  <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>
</template>

<script>
import { ref } from 'vue';
import {useCount, incrementCount} from '../../hooks/Count'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  setup() {
    const count = useCount();
    return {
      count,
      incrementCount
    }
  }
}
</script>
