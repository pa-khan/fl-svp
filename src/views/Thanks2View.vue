<template>
  <main class="main">
    <LogoBlock />
    <Thx />
    <Sended />
    <Now />
    <Preview class="--mt" :videoTitle="'Соблазн комфорта. На поводу у лени. Психология человека'"
      videoPoster="@/assets/images/poster-2.jpg" :title="'Итак, что именно это знание даёт вам лично?'"
      :text="'Вы понимаете причину, а не безрезультатно лечите ее следствие, как обычно бывает. Люди становятся более энергичными, создают и сохраняют гармоничные отношения, получают результаты по конкретным проблемам и даже тем, от которых отчаялись избавиться. И это навсегда. Или очень надолго.'" />
    <Review class="--bg" :hide="true" :link="true">
      <template #title>
        Более чем <u>25 000</u> отзывов - <br>беспрецедентная эффективность
      </template>
    </Review>
    <Choiser>
      <template #title>
        Выберите интересные для себя темы из списка ниже и получите подробную информацию по ним в следующем письме
      </template>
    </Choiser>

    <Watchlectures />
    <FooterSeries />
  </main>
</template>

<script>
import LogoBlock from '@/components/LogoBlock/LogoBlock.vue'
import Thx from '@/components/Thx/Thx.vue'
import Sended from '@/components/Sended/Sended.vue'
import Preview from '@/components/Preview/Preview.vue'
import Review from '@/components/Review/Review.vue'
import Choiser from '@/components/Choiser/Choiser.vue'
import Now from '@/components/Now/Now.vue'


import Watchlectures from '@/components/Watchlectures/Watchlectures.vue'
import FooterSeries from '@/components/FooterSeries/FooterSeries.vue'
export default {
  name: 'SeriesView',
  components: {
    LogoBlock,
    Thx,
    Sended,
    Preview,
    Review,
    Choiser,
    Now,

    Watchlectures,
    FooterSeries
  }
}
</script>