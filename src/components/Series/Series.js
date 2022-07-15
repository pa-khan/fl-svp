import Container from '@/components/Container/Container.vue'
import Swiper, { Navigation } from 'swiper';
import 'swiper/css';


export default {
  name: 'Series',
  mounted() {
    new Swiper(this.$refs.slider, {
      slidesPerView: 2,
      spaceBetween: 30,
      navigation: {
        nextEl: this.$refs.controlNext,
        prevEl: this.$refs.controlPrev,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        992: {
          slidesPerView: 2,
        }
      },
      modules: [Navigation]
    });
  },
  components: {
    Container
  }
}
