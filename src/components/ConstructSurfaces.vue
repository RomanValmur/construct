<template>
<b-list-group horizontal>
  <b-list-group-item
    v-for="surface in surfaces"
    :key="surface.title"
    :style="{ backgroundImage: `url(${surface.image})` }"
    :alt="surface.title"
    :title="surface.title"
    @click.prevent="setActiveSurface(surface)"
  ></b-list-group-item>
</b-list-group>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'ConstructSurfaces',
  computed: {
    ...mapGetters(['surfaces']),
  },
  methods: {
    ...mapActions(['setActiveSurface']),
  },
};
</script>

<style lang="scss">
@import "../../node_modules/bootstrap/scss/functions";
@import "../../node_modules/bootstrap/scss/variables";

.list-group-item {
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  height: 50px;
  width: 50px;
  cursor: pointer;
}

.list-group {
  &::-webkit-scrollbar {
    height: 5px;
  }

  &::-webkit-scrollbar-track {
    background: $light;
  }

  &::-webkit-scrollbar-thumb {
    background-color: $primary;
    border-radius: 50px;
    border: 3px solid $primary;
  }
}
</style>
