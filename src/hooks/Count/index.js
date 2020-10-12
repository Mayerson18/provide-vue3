import { ref, readonly, provide } from "vue";
let count = ref(0);

export function provideCount() {
  provide('count', count);
}

export function incrementCount() {
  count.value++;
}

export function useCount() {
  return readonly(count);
}
