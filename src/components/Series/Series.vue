<template>
  <section class="series">
    <Container>
      <div class="series-wrap">
        <div class="series-block">
          <div class="series-title">
            Здраствуйте <br>Булат, <img src="../../assets/images/series-title-img.png" alt=""> начните
          </div>
          <div class="series-suptitle">
            Каждая следующая серия будет открываться <br>после просмотра предыдущей
          </div>
        </div>
        <div class="series-block2">
          <div class="series-restagle"></div>
        </div>
      </div>
    </Container>
    <Container class="series-cont">
      <div class="series-slayder">
        <div class="slider series-sl swiper" ref="slider">
          <div class="swiper-counter"><var ref="counterCurrent">{{ counterCurrent }}</var> из <var ref="counterTotal">{{
          counterTotal
          }}</var></div>
          <button class="slick-prev slick-arrow swiper-button-prev" ref="controlPrev">Previous</button>
          <div class="swiper-wrapper">
            <Episode v-for="item of list" :key="item.title" class="swiper-slide series__item" :item="item" />
          </div>
          <button class="slick-next slick-arrow swiper-button-next" ref="controlNext">Next</button>
        </div>
        <div class="series-slayder-absolute" :class="isAlertShow ? classAlertShow : null">
          <div class="series-slayder-border">
            <div class="series-slayder-wrap">
              <div class="series-slayder-title">
                Теперь вам доступны тематические лекции при покупке полного тренинга. Смотрите ниже.
              </div>
              <div class="series-slayder-button">
                <a href="#thematiclectures" @click="isAlertShow = false">
                  Смотреть
                  <img src="../../assets/images/series-slayder-button.svg" alt="">
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </section>
</template>
<script src="./Series.js"></script>
<style src='./Series.scss' lang="scss">
</style>
