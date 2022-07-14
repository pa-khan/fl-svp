<template>
  <main class="main">
    <Header />
    <About />
    <Symp />
    <Reas />
    <Water />
    <Solu />
    <Info />
    <Train />
    <Review />
    <Form />
    <Willopen />
    <Footer />
    <Popapp />
  </main>
</template>

<script>
import Header from '@/components/Header/Header.vue'
import About from '@/components/About/About.vue'
import Symp from '@/components/Symp/Symp.vue'
import Reas from '@/components/Reas/Reas.vue'
import Water from '@/components/Water/Water.vue'
import Solu from '@/components/Solu/Solu.vue'
import Info from '@/components/Info/Info.vue'
import Train from '@/components/Train/Train.vue'
import Review from '@/components/Review/Review.vue'
import Form from '@/components/Form/Form.vue'
import Willopen from '@/components/Willopen/Willopen.vue'
import Footer from '@/components/Footer/Footer.vue'
import Popapp from '@/components/Popapp/Popapp.vue'

export default {
  name: 'HomeView',
  components: {
    Header,
    About,
    Symp,
    Reas,
    Water,
    Solu,
    Info,
    Train,
    Review,
    Form,
    Willopen,
    Footer,
    Popapp
  }
}
</script>
