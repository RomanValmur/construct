<template>
  <div class="container">
    <b-form-group
      label="Мне нужна надпись: "
      label-size="lg"
      label-for="text"
    >
      <b-form-textarea
        id="text"
        placeholder="Введите надпись..."
        rows="0"
        max-rows="6"
        @input="this.updateTextValue"
      ></b-form-textarea>
    </b-form-group>
    <ConstructSurfaces/>
    <div class="row my-5">
      <ConstructColorsList/>
      <ConstructExemplar/>
      <ConstructFontsList/>
    </div>
    <div class="row">
      <div class="d-flex justify-content-around col mb-5">
        <div class="btn btn-danger">Сбросить</div>
        <div
          class="btn btn-primary"
          @click="addNewDealToBitrix"
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
    ...mapGetters(['surfaces', 'dealAddUrl']),
  },
  methods: {
    ...mapActions(['updateTextValue']),
    addNewDealToBitrix() {
      fetch(this.dealAddUrl)
        .then(response => response.json())
        .then(response => console.log(response));
    },
  },
};
</script>

<style>
</style>
