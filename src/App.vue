<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  // defineComponent方便ts类型推导
  name: "App",
});
</script>

<style lang="less">
.app {
  height: 100%;
}
</style>
