<template>
  <main class="main">
    <LogoBlock />
    <Thx />
    <Sended />
    <Preview :bg="true" :videoTitle="'Соблазн комфорта. На поводу у лени. Психология человека'"
      videoPoster="@/assets/images/poster-1.jpg" :title="'Итак, что именно это знание даёт вам лично?'"
      :text="'Вы понимаете причину, а не безрезультатно лечите ее следствие, как обычно бывает. Люди становятся более энергичными, создают и сохраняют гармоничные отношения, получают результаты по конкретным проблемам и даже тем, от которых отчаялись избавиться. И это навсегда. Или очень надолго.'" />
    <Review :link="true">
      <template #title>
        Более чем <u>25 000</u> отзывов - <br>беспрецедентная эффективность
      </template>
    </Review>
    <Choiser />
    <Now />
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