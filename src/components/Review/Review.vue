<template>
  <section class="section review">


    <div v-if="$slots.title" class="review_head">
      <div class="review_title">
        <slot name="title"></slot>
      </div>
      <div v-if="link" class="review_link">
        <a href="">
          <span>Смотреть все отзывы</span>
          <svg width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M1.14999 1.1387C0.674024 1.61464 0.674024 2.38632 1.14999 2.86227L6.78809 8.50048L1.14999 14.1387C0.674025 14.6147 0.674025 15.3863 1.14999 15.8622C1.62595 16.3382 2.3975 16.3382 2.87346 15.8622L9.37351 9.36222C9.84946 8.88626 9.84946 8.11471 9.37351 7.63875L2.87346 1.1387C2.3975 0.662752 1.62595 0.662752 1.14999 1.1387Z"
              fill="url(#paint0_linear_1165_1019)" />
            <defs>
              <linearGradient id="paint0_linear_1165_1019" x1="10.0697" y1="8.25148" x2="0.79961" y2="8.00421"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#6395F8" />
                <stop offset="1" stop-color="#B68FFF" />
              </linearGradient>
            </defs>
          </svg>

        </a>
      </div>
    </div>

    <div v-else class="review_title">
      <span class="for-desktop">О тренинге написано более <br> 25 000 отзывов и результатов.</span>
      <span class="for-mobile">О тренинге написано<br> более 25 000 отзывов <br>и результатов.</span>
    </div>


    <div class="review_carousel swiper" ref="review_carousel">
      <div class="review_list swiper-wrapper">
        <div v-for="item of list" :key="item.title" class="review_item swiper-slide">
          <div class="review_item-title">{{ item.title }}</div>
          <div class="review_item-text">
            <div class="review_item-text-lg">
              {{ item.text }}
            </div>
            <div class="review_item-text-sm"></div>
            <div class="review_item-btn js-textbtn">
              <span>Показать полностью</span>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M8.15625 5.625H6.375V3.84375C6.375 3.79219 6.33281 3.75 6.28125 3.75H5.71875C5.66719 3.75 5.625 3.79219 5.625 3.84375V5.625H3.84375C3.79219 5.625 3.75 5.66719 3.75 5.71875V6.28125C3.75 6.33281 3.79219 6.375 3.84375 6.375H5.625V8.15625C5.625 8.20781 5.66719 8.25 5.71875 8.25H6.28125C6.33281 8.25 6.375 8.20781 6.375 8.15625V6.375H8.15625C8.20781 6.375 8.25 6.33281 8.25 6.28125V5.71875C8.25 5.66719 8.20781 5.625 8.15625 5.625Z"
                  fill="#074B8A"></path>
                <path
                  d="M6 0.75C3.10078 0.75 0.75 3.10078 0.75 6C0.75 8.89922 3.10078 11.25 6 11.25C8.89922 11.25 11.25 8.89922 11.25 6C11.25 3.10078 8.89922 0.75 6 0.75ZM6 10.3594C3.59297 10.3594 1.64062 8.40703 1.64062 6C1.64062 3.59297 3.59297 1.64062 6 1.64062C8.40703 1.64062 10.3594 3.59297 10.3594 6C10.3594 8.40703 8.40703 10.3594 6 10.3594Z"
                  fill="#074B8A"></path>
              </svg>
            </div>
          </div>
          <div class="review_item-author">{{ item.author }}</div>
        </div>
      </div>
    </div>

    <div class="for-mobile">
      <div class="review_arrows">
        <div class="review_arrow review_arrow-left swiper-button-prev" ref="controlPrev">
          <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="46" y="46" width="46" height="46" rx="18" transform="rotate(180 46 46)" fill="#F3F7FC"></rect>
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M24.2008 18.092C24.5181 18.4093 24.5181 18.9237 24.2008 19.241L20.4421 22.9998L24.2008 26.7587C24.5181 27.076 24.5181 27.5904 24.2008 27.9077C23.8835 28.225 23.3691 28.225 23.0518 27.9077L18.7184 23.5743C18.4011 23.257 18.4011 22.7427 18.7184 22.4253L23.0518 18.092C23.3691 17.7747 23.8835 17.7747 24.2008 18.092Z"
              fill="#074B8A"></path>
          </svg>
        </div>

        <div class="review_arrow review_arrow-right swiper-button-next" ref="controlNext">
          <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="46" height="46" rx="18" fill="#F3F7FC"></rect>
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M21.7992 27.908C21.4819 27.5907 21.4819 27.0763 21.7992 26.759L25.5579 23.0002L21.7992 19.2413C21.4819 18.924 21.4819 18.4096 21.7992 18.0923C22.1165 17.775 22.6309 17.775 22.9482 18.0923L27.2816 22.4257C27.5989 22.743 27.5989 23.2573 27.2816 23.5747L22.9482 27.908C22.6309 28.2253 22.1165 28.2253 21.7992 27.908Z"
              fill="#074B8A"></path>
          </svg>
        </div>
      </div>
    </div>

  </section>
</template>
<script src="./Review.js"></script>
<style src='./Review.scss' lang="scss">
</style>
