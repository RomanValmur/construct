<template>
<div class="row flex-nowrap justify-content-around overflow-auto">
  <div
    class="col-3 col-md-1 mx-2 surface"
    v-for="surface in surfaces"
    :key="surface.title"
    :style="{ backgroundImage: `url(${surface.image})` }"
    @click.prevent="setActiveSurface(surface)"
  >
  </div>
</div>
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

<style lang="scss" scoped>
  .surface {
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    height: 100px;
  }
</style>
