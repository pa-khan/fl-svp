export default {
  name: 'Episode',
  data() {
    return {
      isShareShow: false,
      classLock: '--lock',
      classViewed: '--viewed',
      classShareShow: '--show',
      classColorRed: '--red',
      classColorRedLight: '--red-light',
      classColorOrange: '--orange',
      classColorOrangeLight: '--orange-light',
      classColorGreen: '--green',
      classColorGreenLight: '--green-light',
      time: {
        secs: 0,
        mins: 0,
        hours: 0,
      },
      review: 0,
      viewPercent: 0,
    }
  },
  created() {
    this.time.secs = Math.floor(this.item.time / 1000) % 60;
    this.time.mins = Math.floor(this.item.time / 1000 / 60) % 60;
    this.time.hours = Math.floor(this.item.time / 1000 / 60 / 24) % 60;

    if (this.item.duration > 0) {
      let percent = this.item.time / 100;
      this.viewPercent = Math.floor(this.item.duration / percent);
    }
  },

  computed: {
    descTime() {
      let time = [];

      if (this.time.hours > 0) {
        time.push(this.time.hours + 'ч');
      }
      if (this.time.mins > 0) {
        time.push(this.time.mins + 'мин');
      }
      if (this.time.secs > 0) {
        time.push(this.time.secs + 'сек');
      }
      return time.join(' ');
    },
    playTime() {
      let time = [];

      if (this.time.hours > 0) {
        time.push(this.time.hours);
      }
      if (this.time.mins > 0) {
        time.push(this.time.mins);
      }
      if (this.time.secs > 0) {
        time.push(this.time.secs + ' сек');
      }
      return time.join(':');
    },
    viewedTime() {
      let time = [];
      let duration = this.item.duration,
        secs = Math.floor(duration / 1000) % 60,
        mins = Math.floor(duration / 1000 / 60) % 60,
        hours = Math.floor(duration / 1000 / 60 / 24) % 60;


      time.push(secs < 9 ? '0' + hours : hours);
      time.push(mins < 9 ? '0' + mins : mins);
      time.push(secs < 9 ? '0' + secs : secs);

      return time.join(':');
    },
    like() {
      if (!this.item.rating.total || !this.item.rating.like) {
        return false;
      }
      let percent = this.item.rating.total / 10;
      return (this.item.rating.like / percent).toFixed(1).replace('.', ',');
    },

  },
  methods: {
    setColor(item, i) {
      let cls = '';
      if (i < 2) {
        cls = this.classColorRedLight;
      } else if (i == 2) {
        cls = this.classColorRed;
      } else if (i < 5) {
        cls = this.classColorOrangeLight;
      } else if (i == 5) {
        cls = this.classColorOrange;
      } else if (i < 9) {
        cls = this.classColorGreenLight;
      } else if (i == 9) {
        cls = this.classColorGreen;
      }

      item.className = 'episode__feedback-item ' + cls;
    }
  },
  mounted() {
    document.addEventListener('click', (e) => {
      if (this.isShareShow && !e.target.closest('.share')) {
        this.isShareShow = false;
      }
    });


    let feedbackItems = this.$refs.episode.querySelectorAll('.episode__feedback-item');
    if (feedbackItems.length > 0) {

      for (let i = 0; i < feedbackItems.length; i++) {
        feedbackItems[i].addEventListener('click', () => {
          for (let j = 0; j < feedbackItems.length; j++) {
            if (j < i) {
              this.setColor(feedbackItems[j], i);
            } else {
              feedbackItems[j].className = 'episode__feedback-item';
            }
          }
          this.setColor(feedbackItems[i], i);
        });
      }
    }

  },
  props: {
    item: Object,
    lock: String
  }
}
