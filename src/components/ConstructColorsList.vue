<template>
<div class="col-2 col-md-1">
  <ul class="list-group">
    <li
      class="list-group-item"
      v-for="color in colors"
      :key="color.hexCode"
      :style="{ backgroundColor: `${color.hexCode}`, ...styleColorItem}"
      :alt="color.title"
      :title="color.title"
      @click.prevent="setActiveColor(color)"
    >
    </li>
  </ul>
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'ConstructColorsList',
  data() {
    return {
      styleColorItem: {
        height: '50px',
        width: '50px',
        margin: '2px',
        cursor: 'pointer',
      },
    };
  },
  computed: {
    ...mapGetters(['colors', 'activeColorHexCode']),
  },
  methods: {
    ...mapActions(['setActiveColor']),
  },
};
</script>

<style>
</style>
