import Container from "../Container/Container.vue"

export default {
  name: 'Preview',
  computed: {
    poster() {
      let img = require('@/assets/images/poster-1.jpg');
      return img;
    }
  },
  components: {
    Container
  },
  methods: {
    toLink() {
      window.open('https://www.yburlan.ru/serial/', '_blank');
    }
  },
  props: {
    bg: Boolean,
    videoTitle: String,
    videoPoster: String,
    title: String,
    text: String
  }
}
