import Container from '@/components/Container/Container.vue'
import Episode from '@/components/Episode/Episode.vue';
import Swiper, { Navigation } from 'swiper';
import 'swiper/css';

// удалить при интеграции
import PosterSample from '@/assets/images/poster.jpg'

export default {
  name: 'Thematiclectures',
  data() {
    return {
      counterCurrent: 1,
      list: [
        {
          type: 3,
          title: 'Где взять энергию для жизни ',
          time: 5450000,
          duration: 0,
          review: 0,
          rating: {
            total: 867,
            like: 750,
          },
          poster: PosterSample
        },
        {
          type: 3,
          title: 'Где взять энергию для жизни ',
          time: 5800000,
          duration: 1000000,
          review: 0,
          rating: {
            total: 867,
            like: 700,
          },
          poster: PosterSample
        },
        {
          type: 3,
          title: 'Где взять энергию для жизни ',
          time: 5400000,
          duration: 0,
          review: 0,
          rating: {
            total: 867,
            like: 800,
          },
          poster: PosterSample
        },
      ]
    }
  },
  mounted() {
    new Swiper(this.$refs.slider, {
      slidesPerView: 'auto',
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
          slidesPerView: 'auto',
        }
      },
      modules: [Navigation]
    });
  },
  components: {
    Container,
    Episode
  }
}
