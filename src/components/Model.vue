<template>
  <div class="hello">
    <div>
      <system-view :system="system"/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { System } from "@/types/System";
import SystemView from "@/components/System";

Vue.component('system-view', SystemView);
@Component
export default class Model extends Vue {
  props = [];
  data(){
    return {system: new System()};
  };
  components = ['system-view'];
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
