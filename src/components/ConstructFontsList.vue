<template>
<div class="col-12 col-lg-4">
  <b-list-group>
    <b-list-group-item
      class="list-group-item font-name"
      :style="{ fontFamily : `${font.name}` }"
      @click="setActiveFont(font)"
      v-for="font in this.fonts"
      :key="font.woffUrl"
    >{{ defaultTextValue }}</b-list-group-item>
  </b-list-group>
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'ConstructFontsList',
  computed: {
    ...mapGetters([
      'fonts',
      'textValue',
      'defaultTextValue',
    ]),
  },
  created() {
    for (let i = 0; i < this.fonts.length; i++) {
      this.loadFont(this.fonts[i].name, this.fonts[i].woff2Url);
    }
    this.setActiveFont(this.fonts[0]);
  },
  methods: {
    ...mapActions(['setActiveFont']),
    loadFont(fontName, woff2Url) {
      const styleFont = new FontFace(
        fontName,
        woff2Url,
      );
      styleFont.load();
      document.fonts.add(styleFont);
      document.body.classList.add('fonts-loaded');
    },
  },
};
</script>

<style lang="scss" scoped>
.font-name:hover {
  cursor: pointer;
}
</style>
