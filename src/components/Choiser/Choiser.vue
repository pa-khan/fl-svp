<template>
  <div class="choiser">
    <Container>
      <div class="choiser__inner">
        <div class="choiser__title">
          <slot name="title"></slot>
        </div>
        <div class="choiser__list">
          <template v-for="item of list" :key="item.title">
            <div class="choiser__item" :class="item.isChecked ? classChecked : null" @click="changeCheck(item)">
              <input type="checkbox" class="choiser__item-input" :checked="item.isChecked">
              <div class="choiser__item-box">
                <svg width="10" height="9" viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M3.5638 4.3186L1.85064 2.63848L0 4.52878L3.57438 8.02781L9.78592 1.87972L7.92735 0L3.5638 4.3186Z"
                    fill="white" />
                </svg>
              </div>
              <div class="choiser__item-title" v-html="item.title"></div>
              <div class="choiser__item-text" v-html="item.text"></div>
            </div>
          </template>
        </div>
        <div class="choiser__get-wrap">
          <a href="" class="choiser__get" :class="!isFilled ? classDisabled : null">Получить письмо</a>
        </div>
      </div>
    </Container>
  </div>
</template>
<script src="./Choiser.js"></script>
<style src='./Choiser.scss' lang="scss">
</style>
