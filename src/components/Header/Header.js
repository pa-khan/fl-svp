import Container from '@/components/Container/Container.vue'
import StickyButton from '@/components/StickyButton/StickyButton.vue';

export default {
  name: 'Header',
  data() {
    return {
      isActive: false,
      isOut: false,
      isOutActive: false,
      isStikyButtonActive: false,
      classActive: 'active',
      classOut: 'header-out',
      classOutActive: 'header-out-active',
      classBodyOveflow: 'ov-hidden',
      classButtonStikyActive: 'sticky_button-active',
      links: [
        {
          title: 'О депрессии',
          href: '#about',
        },
        {
          title: 'Симптомы',
          href: '#symp'
        },
        {
          title: 'Причины',
          href: '#reas'
        },
        {
          title: 'Решение',
          href: '#solu'
        },
        {
          title: 'Тренинг',
          href: '#train'
        },
      ]
    }
  },
  mounted() {
    let scrollPrev = 0;

    let scrolled = window.pageYOffset;

    console.log(scrolled);
    if (scrolled > 100) {
      this.isOut = true;
    }
    if (scrolled > 250) {
      this.isOutActive = true;
    }
    window.addEventListener('scroll', () => {
      let scrolled = window.pageYOffset;

      if (scrolled > 100 && scrolled > scrollPrev) {
        this.isOut = true;
      } else {
        this.isOut = false;
      }
      scrollPrev = scrolled;

      if (scrolled > 240) {
        this.isOutActive = true;
      } else {
        this.isOutActive = false;
      }

      if (scrolled > 800) {
        this.isStikyButtonActive = true;
      } else {
        this.isStikyButtonActive = false;
      }
    });
  },
  watch: {
    isActive() {
      if (this.isActive) {
        document.body.classList.add(this.classBodyOveflow);
      } else {
        document.body.classList.remove(this.classBodyOveflow);
      }
    }
  },
  components: {
    Container,
    StickyButton
  }
}
