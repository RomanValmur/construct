<template>
  <div
    class="col-12 text-center d-flex align-items-center justify-content-center exemplar"
    ref="exemplar"
    :style="{
      backgroundImage: `url(${activeSurfaceImage})`,
      height: `${clientDeviceWidth}px`,
      maxHeight: '600px',
    }"
    @pointerup="setIsDragFalse"
    @pointermove="relocateText($event)"
    @touchmove="touchRelocateText($event)"
    @touchend="setIsDragFalse"
  >
    <div
      class="exemplar__text"
      ref="exemplar__text"
      :isDrag=isDrag
      :isUsed=isUsed
      @pointerdown="pointerDownEvent"
      @dragstart.prevent
      @touchmove.prevent
    >
      <span
        class="exemplar__span"
        ref="exemplar__span"
        :style="{
          color: `${activeColorHexCode}`,
          fontSize: `${fontSize}px`,
          lineHeight: `${lineHeight}px`,
          fontFamily: `${activeFont.name}`,
        }"
      >
        {{ defaultTextValue }}
      </span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'ConstructExemplar',
  data() {
    return {
      isDrag: false,
      isUsed: false,
      shiftY: '',
      shiftX: '',
    };
  },
  computed: {
    ...mapGetters([
      'activeSurfaceImage',
      'activeColorHexCode',
      'textValue',
      'activeFont',
      'defaultTextValue',
      'formattedTextValue',
      'clientDeviceWidth',
    ]),
    fontSize: {
      get() {
        return this.$store.getters.normalizedFontSize;
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
    updateFontSize(value) {
      this.fontSize = value;
    },
    updateLineHeight(value) {
      this.lineHeight = value;
    },
    pointerDownEvent(event) {
      this.isDrag = true;
      this.caclShifts(event);
      if (this.isUsed) return;
      this.isUsed = true;
    },
    caclShifts(event) {
      const EXEMPLARTEXT = this.$refs.exemplar__text;
      this.shiftX = event.clientX - EXEMPLARTEXT.getBoundingClientRect().left;
      this.shiftY = event.clientY - EXEMPLARTEXT.getBoundingClientRect().top;
    },
    setIsDragFalse() {
      this.isDrag = false;
    },
    touchRelocateText(event) {
      const EXEMPLAR = this.$refs.exemplar;
      const EXEMPLARTEXT = this.$refs.exemplar__text;
      const limits = {
        left: EXEMPLAR.getBoundingClientRect().left,
        top: EXEMPLAR.getBoundingClientRect().top,
        right: EXEMPLAR.getBoundingClientRect().right,
        bottom: EXEMPLAR.getBoundingClientRect().bottom,
      };
      const EXEMPLARTEXTWIDTH = EXEMPLARTEXT.getBoundingClientRect().width;
      const EXEMPLARTEXTHEIGHT = EXEMPLARTEXT.getBoundingClientRect().height;
      const touch = event.targetTouches[0];

      if (this.isDrag) {
        EXEMPLARTEXT.style.position = 'absolute';

        const newLocation = {
          x: limits.left,
          y: limits.top,
        };

        if (touch.clientX - this.shiftX + EXEMPLARTEXTWIDTH > limits.right) {
          newLocation.x = limits.right - limits.left - EXEMPLARTEXTWIDTH;
        } else if (touch.clientX - this.shiftX > limits.left) {
          newLocation.x = touch.clientX - limits.left - this.shiftX;
        } else if (touch.clientX - this.shiftX < limits.left) {
          newLocation.x = 0;
        }

        if (touch.clientY - this.shiftY + EXEMPLARTEXTHEIGHT > limits.bottom) {
          newLocation.y = limits.bottom - limits.top - EXEMPLARTEXTHEIGHT + this.shiftY;
        } else if (touch.clientY - this.shiftY > limits.top) {
          newLocation.y = touch.clientY - limits.top;
        } else if (touch.clientY - this.shiftY < limits.top) {
          newLocation.y = this.shiftY;
        }

        EXEMPLARTEXT.style.left = `${newLocation.x}px`;
        EXEMPLARTEXT.style.top = `${newLocation.y - this.shiftY}px`;
      }
    },
    relocateText(event) {
      const EXEMPLAR = this.$refs.exemplar;
      const EXEMPLARTEXT = this.$refs.exemplar__text;
      const limits = {
        left: EXEMPLAR.getBoundingClientRect().left,
        top: EXEMPLAR.getBoundingClientRect().top,
        right: EXEMPLAR.getBoundingClientRect().right,
        bottom: EXEMPLAR.getBoundingClientRect().bottom,
      };
      const EXEMPLARTEXTWIDTH = EXEMPLARTEXT.getBoundingClientRect().width;
      const EXEMPLARTEXTHEIGHT = EXEMPLARTEXT.getBoundingClientRect().height;

      if (this.isDrag) {
        EXEMPLARTEXT.style.position = 'absolute';

        const newLocation = {
          x: limits.left,
          y: limits.top,
        };

        if (event.clientX - this.shiftX + EXEMPLARTEXTWIDTH > limits.right) {
          newLocation.x = limits.right - limits.left - EXEMPLARTEXTWIDTH;
        } else if (event.clientX - this.shiftX > limits.left) {
          newLocation.x = event.clientX - limits.left - this.shiftX;
        } else if (event.clientX - this.shiftX < limits.left) {
          newLocation.x = 0;
        }

        if (event.clientY - this.shiftY + EXEMPLARTEXTHEIGHT > limits.bottom) {
          newLocation.y = limits.bottom - limits.top - EXEMPLARTEXTHEIGHT + this.shiftY;
        } else if (event.clientY - this.shiftY > limits.top) {
          newLocation.y = event.clientY - limits.top;
        } else if (event.clientY - this.shiftY < limits.top) {
          newLocation.y = this.shiftY;
        }

        EXEMPLARTEXT.style.left = `${newLocation.x}px`;
        EXEMPLARTEXT.style.top = `${newLocation.y - this.shiftY}px`;
      }
    },
  },

};
</script>

<style lang="scss" scoped>

.exemplar {
  overflow: hidden;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;

  &__text {
    min-height: 72px;
    position: absolute;
    max-width: 400px;
    max-height: 560px;
    text-align: center;
    user-select: none;
  }

  &__span {
    touch-action: none;
    white-space: pre-line;
    position: relative;
    font-size: 72px;
    line-height: 72px;
    outline: none;
    user-select: none;
  }
}
</style>
