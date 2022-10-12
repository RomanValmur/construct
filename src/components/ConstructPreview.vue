<template>
  <div
    ref="preview"
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
      class="preview__text"
      ref="preview__text"
      :isDrag=isDrag
      :isUsed=isUsed
      @pointerdown="pointerDownEvent"
      @dragstart.prevent
      @touchmove.prevent
    >
      <span
        class="preview__span"
        ref="preview__span"
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
  name: 'ConstructPreview',
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
        return this.$store.getters.normalizedLineHeight;
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
      const PREVIEWTEXT = this.$refs.preview__text;
      this.shiftX = event.clientX - PREVIEWTEXT.getBoundingClientRect().left;
      this.shiftY = event.clientY - PREVIEWTEXT.getBoundingClientRect().top;
    },
    setIsDragFalse() {
      this.isDrag = false;
    },
    touchRelocateText(event) {
      const PREVIEW = this.$refs.preview;
      const PREVIEWTEXT = this.$refs.preview__text;
      const limits = {
        left: PREVIEW.getBoundingClientRect().left,
        top: PREVIEW.getBoundingClientRect().top,
        right: PREVIEW.getBoundingClientRect().right,
        bottom: PREVIEW.getBoundingClientRect().bottom,
      };
      const PREVIEWTEXTWIDTH = PREVIEWTEXT.getBoundingClientRect().width;
      const PREVIEWTEXTHEIGHT = PREVIEWTEXT.getBoundingClientRect().height;
      const touch = event.targetTouches[0];

      if (this.isDrag) {
        PREVIEWTEXT.style.position = 'absolute';

        const newLocation = {
          x: limits.left,
          y: limits.top,
        };

        if (touch.clientX - this.shiftX + PREVIEWTEXTWIDTH > limits.right) {
          newLocation.x = limits.right - limits.left - PREVIEWTEXTWIDTH;
        } else if (touch.clientX - this.shiftX > limits.left) {
          newLocation.x = touch.clientX - limits.left - this.shiftX;
        } else if (touch.clientX - this.shiftX < limits.left) {
          newLocation.x = 0;
        }

        if (touch.clientY - this.shiftY + PREVIEWTEXTHEIGHT > limits.bottom) {
          newLocation.y = limits.bottom - limits.top - PREVIEWTEXTHEIGHT + this.shiftY;
        } else if (touch.clientY - this.shiftY > limits.top) {
          newLocation.y = touch.clientY - limits.top;
        } else if (touch.clientY - this.shiftY < limits.top) {
          newLocation.y = this.shiftY;
        }

        PREVIEWTEXT.style.left = `${newLocation.x}px`;
        PREVIEWTEXT.style.top = `${newLocation.y - this.shiftY}px`;
      }
    },
    relocateText(event) {
      const PREVIEW = this.$refs.preview;
      const PREVIEWTEXT = this.$refs.preview__text;
      const limits = {
        left: PREVIEW.getBoundingClientRect().left,
        top: PREVIEW.getBoundingClientRect().top,
        right: PREVIEW.getBoundingClientRect().right,
        bottom: PREVIEW.getBoundingClientRect().bottom,
      };
      const PREVIEWTEXTWIDTH = PREVIEWTEXT.getBoundingClientRect().width;
      const PREVIEWTEXTHEIGHT = PREVIEWTEXT.getBoundingClientRect().height;

      if (this.isDrag) {
        PREVIEWTEXT.style.position = 'absolute';

        const newLocation = {
          x: limits.left,
          y: limits.top,
        };

        if (event.clientX - this.shiftX + PREVIEWTEXTWIDTH > limits.right) {
          newLocation.x = limits.right - limits.left - PREVIEWTEXTWIDTH;
        } else if (event.clientX - this.shiftX > limits.left) {
          newLocation.x = event.clientX - limits.left - this.shiftX;
        } else if (event.clientX - this.shiftX < limits.left) {
          newLocation.x = 0;
        }

        if (event.clientY - this.shiftY + PREVIEWTEXTHEIGHT > limits.bottom) {
          newLocation.y = limits.bottom - limits.top - PREVIEWTEXTHEIGHT + this.shiftY;
        } else if (event.clientY - this.shiftY > limits.top) {
          newLocation.y = event.clientY - limits.top;
        } else if (event.clientY - this.shiftY < limits.top) {
          newLocation.y = this.shiftY;
        }

        PREVIEWTEXT.style.left = `${newLocation.x}px`;
        PREVIEWTEXT.style.top = `${newLocation.y - this.shiftY}px`;
      }
    },
  },

};
</script>

<style lang="scss" scoped>

.preview {

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
