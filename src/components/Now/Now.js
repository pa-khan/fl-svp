import Container from "../Container/Container.vue"

export default {
  name: 'Now',
  data() {
    return {
      list: [
        {
          type: 1,
          poster: require('@/assets/images/now-3.jpg'),
          title: 'Смотреть 1 серию',
        },
        {
          type: 2,
          poster: require('@/assets/images/now-2.jpg'),
          title: 'Начала психоанализа',
        },
        {
          type: 2,
          poster: require('@/assets/images/now-4.jpg'),
          title: 'Начала психоанализа',
        },
        {
          type: 2,
          poster: require('@/assets/images/now-1.jpg'),
          title: 'Ещё раз про энергичность',
        },
        {
          type: 2,
          poster: require('@/assets/images/now-5.jpg'),
          title: 'Об апатии и прокрастинации',
        },
      ]
    }
  },
  methods: {
    toLink() {
      window.open('https://www.yburlan.ru/serial/', '_blank');
    }
  },
  components: {
    Container
  },
}
