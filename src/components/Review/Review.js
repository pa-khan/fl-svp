import Swiper, { Navigation } from 'swiper';
import 'swiper/css';

export default {
  name: 'Review',
  data() {
    return {
      list: [
        {
          title: 'Семейный врач о Системно-Векторной Психологии',
          text: 'Что дала мне Системно-векторная психология Юрия Бурлана в моей профессии? Появилась Уверенность в правильности собственных действий, пропал страх навредить другому человеку в процессе консультирования.Теперь я вижу человека изнутри.Понимаю свойства его психики, которые есть у него в соответствии с его набором векторов.Всё это помогает провести консультацию более эффективно, чем раньше, сохранив время, собственные ресурсы и дать человеку только то, что ему нужно, не навязывая и не привнося ничего своего.Психотерапия дает облегчение, а Системно- векторная психология Юрия Бурлана дает понимание, осознание причинно - следственных связей, благодаря чему появляется возможность сменить поведенческий паттерн.Увидеть всю картину проблемы целиком.Для меня Системно - векторная психология Юрия Бурлана является очень мощным инструментом для проведения диагностических и психотерапевтических сессий.Благодаря СВП я получаю конкретный, видимый результат в своей работе, а вместе с этим удовлетворение и наполнение.',
          author: 'Анна Виневская, кандидат педагогических наук'
        },
        {
          title: 'Семейный врач о Системно-Векторной Психологии',
          text: 'Что дала мне Системно-векторная психология Юрия Бурлана в моей профессии? Появилась Уверенность в правильности собственных действий, пропал страх навредить другому человеку в процессе консультирования.Теперь я вижу человека изнутри.Понимаю свойства его психики, которые есть у него в соответствии с его набором векторов.Всё это помогает провести консультацию более эффективно, чем раньше, сохранив время, собственные ресурсы и дать человеку только то, что ему нужно, не навязывая и не привнося ничего своего.Психотерапия дает облегчение, а Системно- векторная психология Юрия Бурлана дает понимание, осознание причинно - следственных связей, благодаря чему появляется возможность сменить поведенческий паттерн.Увидеть всю картину проблемы целиком.Для меня Системно - векторная психология Юрия Бурлана является очень мощным инструментом для проведения диагностических и психотерапевтических сессий.Благодаря СВП я получаю конкретный, видимый результат в своей работе, а вместе с этим удовлетворение и наполнение.',
          author: 'Анна Виневская, кандидат педагогических наук'
        },
        {
          title: 'Семейный врач о Системно-Векторной Психологии',
          text: 'Что дала мне Системно-векторная психология Юрия Бурлана в моей профессии? Появилась Уверенность в правильности собственных действий, пропал страх навредить другому человеку в процессе консультирования.Теперь я вижу человека изнутри.Понимаю свойства его психики, которые есть у него в соответствии с его набором векторов.Всё это помогает провести консультацию более эффективно, чем раньше, сохранив время, собственные ресурсы и дать человеку только то, что ему нужно, не навязывая и не привнося ничего своего.Психотерапия дает облегчение, а Системно- векторная психология Юрия Бурлана дает понимание, осознание причинно - следственных связей, благодаря чему появляется возможность сменить поведенческий паттерн.Увидеть всю картину проблемы целиком.Для меня Системно - векторная психология Юрия Бурлана является очень мощным инструментом для проведения диагностических и психотерапевтических сессий.Благодаря СВП я получаю конкретный, видимый результат в своей работе, а вместе с этим удовлетворение и наполнение.',
          author: 'Анна Виневская, кандидат педагогических наук'
        },
      ]
    }
  },
  mounted() {
    new Swiper(this.$refs.review_carousel, {
      slidesPerView: 'auto',
      spaceBetween: 20,
      loop: true,
      centeredSlides: true,
      navigation: {
        nextEl: this.$refs.controlPrev,
        prevEl: this.$refs.controlNext,
      },
      modules: [Navigation]
    });

    const items = document.querySelectorAll('.review_item');

    if (items.length > 0) {
      items.forEach((item) => {
        item.textLG = item.querySelector('.review_item-text-lg');
        item.textSM = item.querySelector('.review_item-text-sm');
        item.toggleBtn = item.querySelector('.review_item-btn');


        item.textSM.innerText = item.textLG.innerText.slice(0, 145) + '...';
        item.toggleBtn.addEventListener('click', () => {
          item.classList.add('--open');
        })

      });
    }
  }
}