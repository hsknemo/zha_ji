<script setup >
import { onMounted, ref} from 'vue'
import "codemirror/mode/javascript/javascript.js";


const props = defineProps({
  options: { type: Object, default: () => ({}) },
  value: { type: String, default: '' }
})
const emits = defineEmits(['input-change'])
const code = ref(null)

onMounted(() => {
})
</script>

<template>
  <div>
    <Codemirror
        v-model:value="code"
        :options="{ mode: 'javascript', lineNumbers: true }"
    />
  </div>

</template>

<style scoped lang="scss">

</style>
