<template>
  <div class="container">
    <b-form-group
      label="Мне нужна надпись: "
      label-size="lg"
      label-for="text"
    >
      <b-form-textarea
        ref="text"
        id="text"
        placeholder="Введите надпись..."
        rows="0"
        max-rows="6"
        @input="this.updateTextValue"
        v-model="textValue"
      >{{textValue}}</b-form-textarea>
    </b-form-group>
    <ConstructSurfaces/>
    <div class="row my-5">
      <ConstructColorsList/>
      <ConstructExemplar/>
      <ConstructFontsList/>
    </div>
    <div class="row">
      <div class="col d-flex justify-content-around mb-5">
        <div
          class="btn btn-danger"
          @click="resetConstruct"
        >Сбросить</div>
        <div
          class="btn btn-primary"
          @click="addNewDealToBitrix(), resetConstruct()"
        >Отправить</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import ConstructExemplar from './ConstructExemplar.vue';
import ConstructFontsList from './ConstructFontsList.vue';
import ConstructColorsList from './ConstructColorsList.vue';
import ConstructSurfaces from './ConstructSurfaces.vue';

export default {
  name: 'ConstructOrder',
  components: {
    ConstructExemplar,
    ConstructFontsList,
    ConstructColorsList,
    ConstructSurfaces,
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

<style>
</style>
