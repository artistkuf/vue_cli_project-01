<template>
  <div>
    <h1>{{ title }}</h1>
    <h2>{{ count }}</h2>
    <button @click="onClickAdd">Add</button>
    <button @click="onClickMinus">Minus</button>
  </div>
</template>

<script>
export default {
  name: "PlusAndMinus",
  data() {
    return {
      title: "Plus and Minus",
      count: 0,
    };
  },
  methods: {
    onClickAdd() {
      this.count = this.count + 1;
    },
    onClickMinus() {
      this.count = this.count - 1;
    },
  },
};
</script>

<style></style>
