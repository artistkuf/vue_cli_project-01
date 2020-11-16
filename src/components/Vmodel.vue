<template>
  <div>
    <!-- 2 Way Data Blinding ด้วย V Model -->
    <h1>V model</h1>
    <input v-model="messege" type="text" placeholder="Enter your text" />
    <div>{{ messege }}</div>
    <button @click="messege = ''">Reset</button>
  </div>
</template>

<script>
export default {
  name: "Vmodel",
  data() {
    return {
      messege: "",
    };
  },
};
</script>

<style></style>
