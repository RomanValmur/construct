<template>
<b-list-group class="col-12 overflow-auto d-flex" horizontal>
  <b-list-group-item
    v-for="color in colors"
    :key="color.hexCode"
    :style="{ backgroundColor: `${color.hexCode}` }"
    :alt="color.title"
    :title="color.title"
    @click.prevent="setActiveColor(color)"
  ></b-list-group-item>
</b-list-group>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'ConstructColorsList',
  computed: {
    ...mapGetters([
      'colors',
    ]),
  },
  methods: {
    ...mapActions(['setActiveColor']),
  },
};
</script>

<style lang="scss" scoped>
@import "../../node_modules/bootstrap/scss/functions";
@import "../../node_modules/bootstrap/scss/variables";

.col-12::-webkit-scrollbar {
  height: 5px;
}
.col-12::-webkit-scrollbar-track {
  background: $light;
}
.col-12::-webkit-scrollbar-thumb {
  background-color: $primary;
  border-radius: 50px;
  border: 3px solid $primary;
}
.list-group-item {
  height: 50px;
  width: 50px;
  margin: 2px;
  cursor: pointer;
}
</style>
