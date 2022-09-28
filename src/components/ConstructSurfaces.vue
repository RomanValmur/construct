<template>
<div class="row flex-nowrap justify-content-around overflow-auto">
  <div
    class="col-3 col-md-1 mx-2"
    v-for="surface in surfaces"
    :key="surface.title"
    :style="{ background: `url(${surface.image}) center center no-repeat`, ...styleSurface}"
    @click.prevent="setActiveSurface(surface)"
  >
  </div>
</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'ConstructSurfaces',
  data() {
    return {
      styleSurface: {
        backgroundSize: 'contain',
        height: '100px',
      },
    };
  },
  computed: {
    ...mapGetters(['surfaces']),
  },
  methods: {
    ...mapActions(['setActiveSurface']),
  },
};
</script>

<style>
</style>
