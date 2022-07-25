import Container from "../Container/Container.vue"

export default {
  name: 'Preview',
  data() {
    return {
      isPlay: false,
      classPlay: '--played'
    }
  },
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
    },
    togglePlay() {
      this.isPlay = !this.isPlay;

      if (this.isPlay) {
        this.$refs.iframe.src = this.$refs.iframe.src + '?autoplay=1';
      } else {
        this.$refs.iframe.src = this.$refs.iframe.src;
      }
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
