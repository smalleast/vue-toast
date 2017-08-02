<template>
  <transition name="mint-toast-pop">
    <div class="mint-toast" v-show="visible" :class="customClass"
         :style="{ 'padding': iconClass === '' ? '.2rem' : '.3rem' }">
      <i class="mint-toast-icon" :class="iconClass" v-if="iconClass !== ''"></i>
      <span class="mint-toast-text">{{ message }}</span>
    </div>
  </transition>
</template>

<style rel="stylesheet/scss" lang="scss">
  .mint {
    &-toast {
      position: fixed;
      max-width: 80%;
      border-radius: .1rem;
      background: rgba(0, 0, 0, 0.7);
      color: #fff;
      box-sizing: border-box;
      text-align: center;
      z-index: 1000;
      transition: opacity .3s linear;
      font-size: 0;
      &-icon {
        text-align: center;
      }

      &-text {
        font-size: .24rem;
        display: block;
        text-align: center;
      }

      &.placetop {
        top: 1rem;
        left: 50%;
        transform: translate(-50%, 0);
        -webkit-transform: translate(-50%, 0);
      }

      &.placemiddle {
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        -webkit-transform: translate(-50%, -50%);
      }

      &.placebottom {
        bottom: 1rem;
        left: 50%;
        transform: translate(-50%, 0);
        -webkit-transform: translate(-50%, 0);
      }

      &-pop-enter, &-pop-leave-active {
        opacity: 0;
      }
    }
  }
</style>

<script type="text/babel">
  export default {
    props: {
      message: String,
      className: {
        type: String,
        default: ''
      },
      position: {
        type: String,
        default: 'middle'
      },
      iconClass: {
        type: String,
        default: ''
      }
    },

    data() {
      return {
        visible: false
      };
    },

    computed: {
      customClass() {
        let classes = [];
        switch (this.position) {
          case 'top':
            classes.push('placetop');
            break;
          case 'bottom':
            classes.push('placebottom');
            break;
          default:
            classes.push('placemiddle');
        }
        classes.push(this.className);

        return classes.join(' ');
      }
    }
  };
</script>
