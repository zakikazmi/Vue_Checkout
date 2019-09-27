  <template>
    <div style="height: 500px">
      <!-- swiper1 -->
      <swiper :options="swiperOptionTop" class="gallery-top" ref="swiperTop">
        <swiper-slide class="slide-1"></swiper-slide>
        <swiper-slide class="slide-2"></swiper-slide>
        <swiper-slide class="slide-3"></swiper-slide>
        <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
        <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
      </swiper>
      <!-- swiper2 Thumbs -->
      <swiper :options="swiperOptionThumbs" class="gallery-thumbs" ref="swiperThumbs">
        <swiper-slide class="slide-1"></swiper-slide>
        <swiper-slide class="slide-2"></swiper-slide>
        <swiper-slide class="slide-3"></swiper-slide>
        <div class="black-arrow right swiper-button-next" slot="button-next"></div>
        <div class="black-arrow left swiper-button-prev" slot="button-prev"></div>
      </swiper>
  </div>
</template>

<script>
export default {
  data () {
    return {
      swiperOptionTop: {
        spaceBetween: 10,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      swiperOptionThumbs: {
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: 'auto',
        touchRatio: 0.2,
        slideToClickedSlide: true
      }
    }
  },
  mounted () {
    this.$nextTick(() => {
      const swiperTop = this.$refs.swiperTop.swiper
      const swiperThumbs = this.$refs.swiperThumbs.swiper
      swiperTop.controller.control = swiperThumbs
      swiperThumbs.controller.control = swiperTop
    })
  }
}
</script>

<style lang="scss" scoped>
.swiper-container {
  background-color: #000;
}
.swiper-slide {
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  &.slide-1 {
    background-image: url(../assets/h-angle.jpg);
  }
  &.slide-2 {
    background-image: url(../assets/h-side.jpg);
  }
  &.slide-3 {
    background-image: url("../assets/h-front.jpg");
  }
}
.gallery-top {
  height: 80% !important;
  width: 100%;
  background-color: #ffffff;
  border-radius: 25px;
}
.gallery-thumbs {
  width: 400px;
  height: 20% !important;
  margin-right: inherit;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 10px 0;
  background-color: #ffffff;
}
.gallery-thumbs .swiper-slide {
  width: 25%;
  height: 100%;
  opacity: 0.4;
}
.gallery-thumbs .swiper-slide-active {
  opacity: 1;
}

.black-arrow{
    display: inline-block;
    width: 1.5em;
    height: 1.5em;
    border: 0.1em;
    background-color: #cacaca;
    border-radius: 50%;
    background-image: inherit;
    margin-top: -0.5em;
}

.right:after {
    content: '';
    display: inline-block;
    margin-left: -0.1em;
    width: 0.6em;
    height: 0.6em;
    border-top: 0.15em solid #333;
    border-right: 0.15em solid #333;
    -moz-transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
}

.left:after {
    content: '';
content: '';
    display: inline-block;
    margin-left: 0.1em;
    width: 0.6em;
    height: 0.6em;
    border-top: 0.15em solid #333;
    border-right: 0.15em solid #333;
    -webkit-transform: rotate(-135deg);
    transform: rotate(-135deg);
}
// .left {
//   transform: rotate(135deg);
//   -webkit-transform: rotate(135deg);
// }

</style>
