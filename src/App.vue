<script setup lang="ts">
// import HelloWorld from "@/components/HelloWorld.vue"
// import TabIndex from "@/components/tabs/TabIndex.vue"
// import Addition from "@/components/addition/Additon.vue"
// import MyDialog from "@/components/MyDialog.vue"
// import BasicKnowledgeVue from "@/components/BasicKnowledge.vue"
// import MyForm from "@/components/form/MyForm.vue"
// import Layout from "@/components/layout/5.vue"
</script>

<template>
  <div>
    <router-link to="/hello1">Hello1</router-link>|
    <router-link to="/hello2">Hello2</router-link>|
    <div>
      <router-view />
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
