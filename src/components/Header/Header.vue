<template>
  <header class="header">
    <nav class="header_nav"
      :class="[isActive ? classActive : null, isOut ? classOut : null, isOutActive ? classOutActive : null]">
      <Container>
        <div class="header_nav-logo">
          <a href="">
            <img src="../../assets/images/logo.svg" alt="">
          </a>
        </div>
        <ul class="header_desktop header_menu">
          <li v-for="link of links" :key="link.title" class="header_nav-item">
            <a :href="link.href" class="header_nav-link">{{ link.title }}</a>
          </li>
        </ul>
        <div class="header_desktop header_button">
          <a href="#form" class="btn btn_primary">
            Записаться на тренинг
          </a>
        </div>
        <div class="header_burger d-lg-none" :class="isActive ? classActive : null" @click="isActive = !isActive">
          <img src="../../assets/images/burger.svg" class="header_burger-open" alt="">
          <img src="../../assets/images/close.svg" class="header_burger-close" alt="">
        </div>
        <div class="header_mob d-lg-none" :class="isActive ? classActive : null">
          <ul class="header_menu">
            <li v-for="link of links" :key="link.title" class="header_nav-item">
              <a :href="link.href" class="header_nav-link" @click="isActive = false">{{ link.title }}</a>
            </li>
          </ul>
          <div class="header_button">
            <a href="#form" class="btn btn_primary">
              Записаться на тренинг
            </a>
          </div>
        </div>
      </Container>
    </nav>
    <Container>
      <div class="header_wrapper">
        <div class="header_top">
          <h1 class="header_title">
            Апатия, <br> депрессия
          </h1>
          <div class="header_img">
            <img src="../../assets/images/girl.png" alt="">
          </div>
        </div>
        <div class="header_bottom">
          <div class="header_subtitle">
            Когда желаний больше нет
          </div>
          <div class="header_date">
            Курс лекций по психологии.
            <br>
            Начало 22 июня в 21:00 по мск.
          </div>
          <div class="header_btn">
            <a href="#form" class="btn btn_primary" @click="isActive = false">
              Записаться
            </a>
          </div>

          <StickyButton :class="isStikyButtonActive ? classButtonStikyActive : null" />
          <div class="header_title">
            Апатия, <br> депрессия
          </div>
          <div class="header_img">
            <img src="../../assets/images/girl.png" alt="">
          </div>
        </div>
      </div>
    </Container>
  </header>
</template>
<script src="./Header.js"></script>
<style src='./Header.scss' lang="scss">
</style>
