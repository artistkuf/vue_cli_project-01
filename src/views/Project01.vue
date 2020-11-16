<template>
  <div>
    <PlusAndMinus />
    <Vmodel msg="this is Props" />
  </div>
</template>

<script>
import PlusAndMinus from "@/components/PlusAndMinus.vue";
import Vmodel from "@/components/Vmodel.vue";

export default {
  name: "Project01",
  components: {
    PlusAndMinus,
    Vmodel,
  },
};
</script>

<style></style>
