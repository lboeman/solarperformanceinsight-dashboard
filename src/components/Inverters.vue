<template>
  <div class="Inverters">
    <div class="inverters-list">
      <button @click="addInverter">Add Inverter</button>
      <ul>
        <li v-for="(inverter, index) in inverters" :key="index">
          <input v-model="inverter.name"/>
          <input v-model="inverter.makeModel"/>
          <!--
          <input v-model:"inverter.inverterParameters"/>
          <input v-model:"inverter.arrays"/>
           -->
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Inverter } from "@/types/Inverter";

@Component
export default class Inverters extends Vue {
  @Prop() inverters: Array<Inverter>;

  addInverter(){
    this.inverters.push(new Inverter());
  }
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
