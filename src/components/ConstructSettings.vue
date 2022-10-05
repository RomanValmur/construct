<template>
  <div class="col-12 mb-3">
    <b-tabs pills justified end>
      <b-tab>
        <template #title><b-icon-palette/></template>
        <construct-colors-list/>
      </b-tab>
      <b-tab>
        <template #title><b-icon-fonts/></template>
        <label
          for="lineHeightRange"
        >
        Размер шрифта:
        </label>
        <b-form-input
        id="fontSizeRange"
        ref="fontSizeRange"
        type="range"
        min="16"
        max="128"
        step="1"
        value="72"
        @input="this.updateFontSize"
        v-model="fontSize"
      ></b-form-input>
      </b-tab>
      <b-tab>
        <template #title><b-icon-arrow-down-up/></template>
        <label
          for="lineHeightRange"
        >
        Межстрочный интервал:
        </label>
        <b-form-input
          id="lineHeightRange"
          ref="lineHeightRange"
          type="range"
          min="16"
          max="128"
          step="1"
          value="72"
          @input="this.updateLineHeight"
          v-model="lineHeight"
        ></b-form-input>
      </b-tab>
    </b-tabs>
  </div>
</template>

<script>
import { BIconPalette, BIconFonts, BIconArrowDownUp } from 'bootstrap-vue';
import { mapActions } from 'vuex';
import ConstructColorsList from './ConstructColorsList.vue';

export default {
  name: 'ConstructSettings',
  components: {
    BIconPalette,
    BIconFonts,
    BIconArrowDownUp,
    ConstructColorsList,
  },
  computed: {
    fontSize: {
      get() {
        return this.$store.getters.fontSize;
      },
      set(value) {
        this.$store.commit('updateFontSize', value);
      },
    },
    lineHeight: {
      get() {
        return this.$store.getters.lineHeight;
      },
      set(value) {
        this.$store.commit('updateLineHeight', value);
      },
    },
  },
  methods: {
    ...mapActions([
      'setActiveSettingsElement',
    ]),
    updateFontSize(value) {
      this.fontSize = value;
    },
    updateLineHeight(value) {
      this.lineHeight = value;
    },
  },
};
</script>

<style lang="scss" scoped>
  .list-group-item:hover {
    cursor: pointer;
  }
  .tab-pane {
    padding-top: 20px;
    height: 80px;
  }
</style>
