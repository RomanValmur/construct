<template>
  <b-container>
    <b-form-group label="Мне нужна надпись: " label-size="lg" label-for="text">
      <b-form-textarea ref="text" id="text" placeholder="Введите надпись..." rows="0" max-rows="6"
      @input="this.updateTextValue" v-model="textValue"
      class="b-form-group">{{textValue}}</b-form-textarea>
    </b-form-group>
    <div class="row my-3">
      <div class="col-12 col-lg-8">
        <construct-preview class="col-12 text-center d-flex align-items-center
        justify-content-center preview"/>
        <construct-settings class="col-12 d-flex justify-content-center mb-3"/>
      </div>
      <construct-fonts-list class="col-12 col-lg-4 construct-fonts-list"/>
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
import ConstructSettings from './ConstructSettings.vue';

export default {
  name: 'ConstructOrder',
  components: {
    ConstructPreview,
    ConstructFontsList,
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
@import "../../node_modules/bootstrap/scss/functions";
@import "../../node_modules/bootstrap/scss/variables";

.construct-fonts-list {
  max-height: 600px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 5px;
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

.b-form-group {
  &::-webkit-scrollbar {
    width: 5px;
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

.preview {
  overflow: hidden;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
}
</style>
