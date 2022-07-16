import Container from '@/components/Container/Container.vue'
import Episode from '@/components/Episode/Episode.vue';
import Swiper, { Navigation } from 'swiper';
import 'swiper/css';


// удалить при интеграции
import PosterSample from '@/assets/images/poster.jpg'

/* 

  TYPES OF LIST:
  1 - Не разу не просмотрен
  2 - Продолжить просмотр
  3 - Не открыт
  4 - Просмотрен, оставить отзыв и смотреть заново
  5 - Просмотрен, смотреть заново

*/

export default {
  name: 'Series',
  data() {
    return {
      counterCurrent: 1,
      list: [
        {
          type: 1,
          title: 'Где взять энергию для жизни ',
          chapter: 1,
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
          type: 2,
          title: 'Где взять энергию для жизни ',
          chapter: 2,
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
          chapter: 3,
          time: 5400000,
          duration: 0,
          review: 0,
          rating: {
            total: 867,
            like: 800,
          },
          poster: PosterSample
        },
        {
          type: 4,
          title: 'Где взять энергию для жизни ',
          chapter: 4,
          time: 5400000,
          duration: 5400000,
          review: 0,
          rating: {
            total: 867,
            like: 600,
          },
          poster: PosterSample
        },
        {
          type: 5,
          title: 'Где взять энергию для жизни ',
          chapter: 5,
          time: 5400000,
          duration: 5400000,
          review: 0,
          rating: {
            total: 867,
            like: 500,
          },
          poster: PosterSample
        },
      ]
    }
  },
  computed: {
    counterTotal() {
      return this.list.length;
    }
  },
  mounted() {
    let swiper = new Swiper(this.$refs.slider, {
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

    swiper.on('slideChange', () => {
      this.counterCurrent = swiper.activeIndex + 1
    });

  },
  components: {
    Container,
    Episode
  }
}
