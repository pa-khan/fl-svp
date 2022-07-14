<template>
  <main class="main">
    <Seriesheader />
    <Series />
    <Fulltraining />
    <Thematiclectures />
    <Watchlectures />
    <FooterSeries />
  </main>
</template>

<script>
import Seriesheader from '@/components/Seriesheader/Seriesheader.vue'
import Series from '@/components/Series/Series.vue'
import Fulltraining from '@/components/Fulltraining/Fulltraining.vue'
import Thematiclectures from '@/components/Thematiclectures/Thematiclectures.vue'
import Watchlectures from '@/components/Watchlectures/Watchlectures.vue'
import FooterSeries from '@/components/FooterSeries/FooterSeries.vue'
export default {
  name: 'SeriesView',
  components: {
    Seriesheader,
    Series,
    Fulltraining,
    Thematiclectures,
    Watchlectures,
    FooterSeries
  }
}
</script>