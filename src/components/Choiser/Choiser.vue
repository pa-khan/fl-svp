<template>
  <div class="choiser">
    <Container>
      <div class="choiser__title">Выберите интересные для себя темы из списка ниже и получите подробную информацию по
        ним в следующем письме</div>
      <div class="choiser__list">
        <div class="choiser__item" v-for="item of list" :key="item.title" :class="item.isChecked ? classChecked : null">
          <input type="checkbox" class="choiser__item-input" :checked="item.isChecked">
          <div class="choiser__item-box" @click="item.isChecked = !item.isChecked">
            <svg width="10" height="9" viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M3.5638 4.3186L1.85064 2.63848L0 4.52878L3.57438 8.02781L9.78592 1.87972L7.92735 0L3.5638 4.3186Z"
                fill="white" />
            </svg>
          </div>
          <div class="choiser__item-title">{{ item.title }}</div>
          <div class="choiser__item-text">{{ item.text }}</div>
        </div>
      </div>
      <a href="" class="choiser__get">Получить письмо</a>
    </Container>
  </div>
</template>
<script src="./Choiser.js"></script>
<style src='./Choiser.scss' lang="scss">
</style>
