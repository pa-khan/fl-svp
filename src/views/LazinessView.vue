<template>
  <main class="main">
    <Header />

    <LazinessIntro />

    <Form />
    <Willopen />
    <Footer />
    <Popapp />
  </main>
</template>

<script>
import Header from '@/components/Header/Header.vue'

import LazinessIntro from '@/components/Laziness/Intro/Intro.vue'

import Form from '@/components/Form/Form.vue'
import Willopen from '@/components/Willopen/Willopen.vue'
import Footer from '@/components/Footer/Footer.vue'
import Popapp from '@/components/Popapp/Popapp.vue'

export default {
  name: 'HomeView',
  components: {
    Header,

    LazinessIntro,

    Form,
    Willopen,
    Footer,
    Popapp
  }
}
</script>
