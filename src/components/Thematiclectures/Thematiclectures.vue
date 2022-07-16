<template>
  <section class="thematiclectures">
    <Container>
      <div class="thematiclectures-wrap">
        <div class="thematiclectures-block">
          <div class="series-title">
            Тематические лекции
          </div>
          <div class="series-suptitle">
            Оплатите полный тренинг до 10 июля, чтобы <br>открыть доступ к тематическим лекциям
          </div>
        </div>
        <div class="thematiclectures-block2">
          <div class="series-restagle"></div>
        </div>
      </div>
    </Container>
    <Container class="series-cont">
      <div class="thematiclectures-slayder">
        <div class="slider thematiclectures-sl swiper" ref="slider">
          <div class="swiper-counter"><var ref="counterCurrent">{{ counterCurrent }}</var> из <var ref="counterTotal">{{
              counterTotal
          }}</var></div>
          <button class="slick-prev slick-arrow swiper-button-prev" ref="controlPrev">Previous</button>
          <div class="swiper-wrapper">
            <Episode v-for="item of list" :key="item.title" class="swiper-slide series__item" :item="item"
              :lock="'Оплатите полный тренинг до 10 июля, чтобы открыть доступ к лекции'" />
          </div>
          <button class="slick-next slick-arrow swiper-button-next" ref="controlNext">Next</button>
        </div>
      </div>
    </Container>
  </section>
</template>
<script src="./Thematiclectures.js"></script>
<style src='./Thematiclectures.scss' lang="scss">
</style>
