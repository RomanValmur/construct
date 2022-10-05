<template>
<div class="col-12 text-center justify-content-center color-list">
    <b-list-group class="d-flex justify-content-center" horizontal>
      <b-list-group-item
        v-for="color in colors"
        :key="color.hexCode"
        :style="{ backgroundColor: `${color.hexCode}` }"
        :alt="color.title"
        :title="color.title"
        @click.prevent="setActiveColor(color)"
      ></b-list-group-item>
    </b-list-group>
  </div>
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
.list-group-item {
  height: 50px;
  width: 50px;
  margin: 2px;
  cursor: pointer;
}
</style>
