<template>
  <div class="now">
    <div class="now__inner">
      <Container>
        <div class="now__wrap">
          <div class="now__left">
            <div class="now__title">У вас есть возможность начать тренинг раньше.</div>
          </div>
          <div class="now__right">
            <div class="now__text">
              <p>Мы подготовили для вас экспресс-курс –психоаналитический сериал. Он бесплатный и состоит всего из 4
                серий
                видео.</p>
              <p>Именно те, кто досмотрел до конца, получают результаты. Иногда неожиданные и очень значимые.</p>
            </div>
            <div class="now__btn" @click="toLink">Смотреть сейчас</div>
          </div>
        </div>
      </Container>
    </div>
    <div class="now__list">
      <div v-for="item of list" :key="item.title" class="now__item">
        <div class="now__item-inner">
          <div v-if="item.type == 1" class="now__item-play">
            <div class="now__item-icon --play">
              <svg width="20" height="23" viewBox="0 0 20 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M17.7852 8.90199C19.7852 10.0567 19.7852 12.9434 17.7852 14.0981L4.60658 21.7068C2.60658 22.8615 0.106582 21.4181 0.106582 19.1087L0.106582 3.89141C0.106582 1.58201 2.60658 0.138641 4.60658 1.29334L17.7852 8.90199Z"
                  fill="#282D49" />
              </svg>
            </div>
            <div class="now__item-desc --bold">{{ item.title }}</div>
          </div>
          <div v-else-if="item.type == 2" class="now__item-lock">
            <div class="now__item-icon --lock">
              <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M14.25 7.75H13V5.25C13 3.92392 12.4732 2.65215 11.5355 1.71447C10.5979 0.776784 9.32608 0.25 8 0.25C6.67392 0.25 5.40215 0.776784 4.46447 1.71447C3.52678 2.65215 3 3.92392 3 5.25V7.75H1.75L0.5 9V16.5L1.75 17.75H14.25L15.5 16.5V9L14.25 7.75ZM4.25 5.25C4.25 4.25544 4.64509 3.30161 5.34835 2.59835C6.05161 1.89509 7.00544 1.5 8 1.5C8.99456 1.5 9.94839 1.89509 10.6517 2.59835C11.3549 3.30161 11.75 4.25544 11.75 5.25V7.75H4.25V5.25ZM14.25 16.5H1.75V9H14.25V16.5Z"
                  fill="white" />
              </svg>
            </div>
            <div class="now__item-desc">Посмотрите предыдущую лекцию, чтобы открыть эту</div>
          </div>
        </div>
        <div v-if="item.type == 2" class="now__item-title">{{ item.title }}</div>

        <div class="now__item-bg">
          <img :src="item.poster" alt="">
        </div>
      </div>
    </div>

  </div>
</template>
<script src="./Now.js"></script>
<style src='./Now.scss' lang="scss">
</style>
