<script setup lang="ts">
import { ref } from "vue"


withDefaults(defineProps<{ msg: string }>(), { msg: "hello world" })

const count = ref(0)
</script>

<template>
  <h1 v-if="msg">{{ msg }}</h1>
  <button type="button" @click="count++">count is: {{ count }}</button>
</template>
