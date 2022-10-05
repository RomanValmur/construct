<template>
  <b-container>
    <b-form-group label="Мне нужна надпись: " label-size="lg" label-for="text">
      <b-form-textarea ref="text" id="text" placeholder="Введите надпись..." rows="0" max-rows="6"
      @input="this.updateTextValue" v-model="textValue">{{textValue}}</b-form-textarea>
    </b-form-group>
    <construct-surfaces/>
    <div class="row my-3">
      <div class="col-12 col-lg-8">
        <construct-preview/>
        <construct-settings class="d-flex justify-content-center col-12 mb-3"/>
      </div>
      <construct-fonts-list/>
    </div>
    <div class="row">
      <div class="col d-flex justify-content-around my-3">
        <div class="btn btn-danger" @click="resetConstruct">Сбросить</div>
        <div class="btn btn-primary" @click="addNewDealToBitrix(), resetConstruct()">Отправить</div>
      </div>
    </div>
  </b-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import ConstructPreview from './ConstructPreview.vue';
import ConstructFontsList from './ConstructFontsList.vue';
import ConstructSurfaces from './ConstructSurfaces.vue';
import ConstructSettings from './ConstructSettings.vue';

export default {
  name: 'ConstructOrder',
  components: {
    ConstructPreview,
    ConstructFontsList,
    ConstructSurfaces,
    ConstructSettings,
  },
  computed: {
    ...mapGetters([
      'surfaces',
      'dealAddUrl',
    ]),
    textValue: {
      get() {
        return this.$store.getters.textValue;
      },
      set(value) {
        return this.$store.commit('updateTextValue', value);
      },
    },
  },
  methods: {
    ...mapActions([
      'updateTextValue',
      'updateFontSize',
      'updateLineHeight',
      'setDefaultActiveColor',
      'setDefaultActiveFont',
    ]),
    addNewDealToBitrix() {
      fetch(this.dealAddUrl);
    },
    resetConstruct() {
      this.updateTextValue('');
      this.textValue = '';
      this.updateFontSize(72);
      this.updateLineHeight(72);
      this.setDefaultActiveColor();
      this.setDefaultActiveFont();
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
