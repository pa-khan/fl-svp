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
    <Container>
      <div class="series-slayder-mobile">
        <div class="slayder-block slayder-block-mobile">
          <div class="slayder-img">
            <img class="slayder-img-none" src="../../assets/images/slayder-img.png" alt="">
            <img class="slayder-img-mb" src="../../assets/images/slayder-img2.png" alt="">
          </div>



          <div class="slayder-absolute">
            <div class="slayder-grade">
              <div class="slayder-grade-border">
                <div class="slayder-grade-border-wrap">
                  <div class="slayder-grade-border-img">
                    <img class="slayder-grade-border-img-none" src="../../assets/images/slayder-grade-border-img.svg"
                      alt="">
                    <img class="slayder-grade-border-img-mb" src="../../assets/images/slayder-grade-border-img2.svg"
                      alt="">
                  </div>
                  <div class="slayder-grade-border-text">
                    9,5
                  </div>
                </div>
              </div>
              <div class="slayder-grade-title">
                135 оценок
              </div>
            </div>
          </div>
          <div class="slayder-absolute8">
            <div class="slayder-absolute-block">
              <div class="slayder-absolute-title">
                Часть1. Где взять <br>энергию для жизни
              </div>
              <div class="slayder-absolute-suptitle">
                1ч.12мин.
              </div>
            </div>
          </div>
          <div class="slayder-absolute9">
            <div class="slayder-absolute-link">
              <a href="#">
                <img src="../../assets/images/slayder-absolute-link.svg" alt="">
                Смотреть сейчас
              </a>
            </div>
          </div>
          <div class="slayder-absolute7">
            <div class="slayder-share">
              <button class="slayder-share-button">
                <img src="../../assets/images/slayder-share-button.svg" alt="">
                Поделиться
                <div class="slayder-share-button-absolute">
                  <div class="slayder-share-button-border">
                    <ul class="slayder-share-button-ul">
                      <li class="slayder-share-button-li">
                        <a href="#">
                          <img src="../../assets/images/slayder-share-button-li.svg" alt="">
                        </a>
                      </li>
                      <li class="slayder-share-button-li">
                        <a href="#">
                          <img src="../../assets/images/slayder-share-button-li2.svg" alt="">
                        </a>
                      </li>
                      <li class="slayder-share-button-li">
                        <a href="#">
                          <img src="../../assets/images/slayder-share-button-li3.svg" alt="">
                        </a>
                      </li>
                      <li class="slayder-share-button-li">
                        <a href="#">
                          <img src="../../assets/images/slayder-share-button-li4.svg" alt="">
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div class="slayder-block slayder-block-mobile">
          <div class="slayder-img3">
            <img class="slayder-img-none" src="../../assets/images/slayder-img.png" alt="">
            <img class="slayder-img-mb" src="../../assets/images/slayder-img2.png" alt="">
          </div>

          <div class="slayder-absolute4">
            <div class="slayder-lock">
              <div class="slayder-lock-img">
                <img src="../../assets/images/slayder-lock-img2.svg" alt="">
              </div>
              <div class="slayder-lock-title">
                Просмотрена
              </div>
            </div>
          </div>

          <div class="slayder-absolute">
            <div class="slayder-grade">
              <div class="slayder-grade-border">
                <div class="slayder-grade-border-wrap">
                  <div class="slayder-grade-border-img">
                    <img class="slayder-grade-border-img-none" src="../../assets/images/slayder-grade-border-img.svg"
                      alt="">
                    <img class="slayder-grade-border-img-mb" src="../../assets/images/slayder-grade-border-img2.svg"
                      alt="">
                  </div>
                  <div class="slayder-grade-border-text">
                    9,5
                  </div>
                </div>
              </div>
              <div class="slayder-grade-title">
                135 оценок
              </div>
            </div>
          </div>
          <div class="slayder-absolute12">
            <div class="slayder-absolute-block">
              <div class="slayder-absolute-title">
                Часть1. Где взять <br>энергию для жизни
              </div>
              <div class="slayder-lock-link">
                <a href="#">
                  Смотреть заново
                  <img src="../../assets/images/slayder-lock-link.svg" alt="">
                </a>
              </div>
            </div>
          </div>

          <div class="slayder-absolute7">
            <div class="slayder-share">
              <button class="slayder-share-button">
                <img src="../../assets/images/slayder-share-button.svg" alt="">
                Поделиться
                <div class="slayder-share-button-absolute">
                  <div class="slayder-share-button-border">
                    <ul class="slayder-share-button-ul">
                      <li class="slayder-share-button-li">
                        <a href="#">
                          <img src="../../assets/images/slayder-share-button-li.svg" alt="">
                        </a>
                      </li>
                      <li class="slayder-share-button-li">
                        <a href="#">
                          <img src="../../assets/images/slayder-share-button-li2.svg" alt="">
                        </a>
                      </li>
                      <li class="slayder-share-button-li">
                        <a href="#">
                          <img src="../../assets/images/slayder-share-button-li3.svg" alt="">
                        </a>
                      </li>
                      <li class="slayder-share-button-li">
                        <a href="#">
                          <img src="../../assets/images/slayder-share-button-li4.svg" alt="">
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div class="slayder-block slayder-block-mobile">
          <div class="slayder-img2">
            <img class="slayder-img-none" src="../../assets/images/slayder-img.png" alt="">
            <img class="slayder-img-mb" src="../../assets/images/slayder-img2.png" alt="">
          </div>
          <div class="slayder-absolute10">
            <div class="slayder-absolute-block">
              <div class="slayder-absolute-title">
                Часть1. Где взять <br>энергию для жизни
              </div>
              <div class="slayder-absolute-suptitle">
                1ч.12мин.
              </div>
            </div>
          </div>

          <div class="slayder-absolute">
            <div class="slayder-grade">
              <div class="slayder-grade-border">
                <div class="slayder-grade-border-wrap">
                  <div class="slayder-grade-border-img">
                    <img class="slayder-grade-border-img-none" src="../../assets/images/slayder-grade-border-img.svg"
                      alt="">
                    <img class="slayder-grade-border-img-mb" src="../../assets/images/slayder-grade-border-img2.svg"
                      alt="">
                  </div>
                  <div class="slayder-grade-border-text">
                    9,5
                  </div>
                </div>
              </div>

            </div>
          </div>
          <div class="slayder-absolute3">
            <div class="slayder-lock">
              <div class="slayder-lock-img">
                <img src="../../assets/images/slayder-lock-img.svg" alt="">
              </div>
              <div class="slayder-play-text2 slayder-play-text3">
                Посмотрите предыдущую <br>лекцию, чтобы открыть эту
              </div>
            </div>
          </div>
        </div>
        <div class="slayder-block slayder-block-mobile">
          <div class="slayder-img2">
            <img class="slayder-img-none" src="../../assets/images/slayder-img.png" alt="">
            <img class="slayder-img-mb" src="../../assets/images/slayder-img2.png" alt="">
          </div>
          <div class="slayder-absolute10">
            <div class="slayder-absolute-block">
              <div class="slayder-absolute-title">
                Часть1. Где взять <br>энергию для жизни
              </div>
              <div class="slayder-absolute-suptitle">
                1ч.12мин.
              </div>
            </div>
          </div>

          <div class="slayder-absolute">
            <div class="slayder-grade">
              <div class="slayder-grade-border">
                <div class="slayder-grade-border-wrap">
                  <div class="slayder-grade-border-img">
                    <img class="slayder-grade-border-img-none" src="../../assets/images/slayder-grade-border-img.svg"
                      alt="">
                    <img class="slayder-grade-border-img-mb" src="../../assets/images/slayder-grade-border-img2.svg"
                      alt="">
                  </div>
                  <div class="slayder-grade-border-text">
                    9,5
                  </div>
                </div>
              </div>

            </div>
          </div>
          <div class="slayder-absolute3">
            <div class="slayder-lock">
              <div class="slayder-lock-img">
                <img src="../../assets/images/slayder-lock-img.svg" alt="">
              </div>
              <div class="slayder-play-text2 slayder-play-text3">
                Посмотрите предыдущую <br>лекцию, чтобы открыть эту
              </div>
            </div>
          </div>
        </div>
        <div class="slayder-block slayder-block-mobile">
          <div class="slayder-img2">
            <img class="slayder-img-none" src="../../assets/images/slayder-img.png" alt="">
            <img class="slayder-img-mb" src="../../assets/images/slayder-img2.png" alt="">
          </div>
          <div class="slayder-absolute10">
            <div class="slayder-absolute-block">
              <div class="slayder-absolute-title">
                Часть1. Где взять <br>энергию для жизни
              </div>
              <div class="slayder-absolute-suptitle">
                1ч.12мин.
              </div>
            </div>
          </div>

          <div class="slayder-absolute">
            <div class="slayder-grade">
              <div class="slayder-grade-border">
                <div class="slayder-grade-border-wrap">
                  <div class="slayder-grade-border-img">
                    <img class="slayder-grade-border-img-none" src="../../assets/images/slayder-grade-border-img.svg"
                      alt="">
                    <img class="slayder-grade-border-img-mb" src="../../assets/images/slayder-grade-border-img2.svg"
                      alt="">
                  </div>
                  <div class="slayder-grade-border-text">
                    9,5
                  </div>
                </div>
              </div>

            </div>
          </div>
          <div class="slayder-absolute3">
            <div class="slayder-lock">
              <div class="slayder-lock-img">
                <img src="../../assets/images/slayder-lock-img.svg" alt="">
              </div>
              <div class="slayder-play-text2 slayder-play-text3">
                Посмотрите предыдущую <br>лекцию, чтобы открыть эту
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
