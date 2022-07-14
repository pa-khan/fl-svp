<template>
  <section class="popapp" :class="popappIsShow ? classShow : null">
    <div class="container">
      <div class="popapp-block">
        <div class="popapp-border">
          <div class="popapp-title">
            Спасибо, {{ userName }}.
          </div>
          <div class="popapp-suptitle">
            Ждём вас на онлайн-тренинге, который пройдёт 26 июля в 22:00 по московскому времени. Информацию и ссылку на
            вход мы отправили на вашу почту <a href="#">{{ userEmail }}</a>.
          </div>
          <div class="popapp-suptitle">
            Посмотреть психоаналитический сериал можно с помощью нашего <a href="#">мобильного приложения Люси.</a>
            Ссылку на установку мы также отправили на ваш Email.
          </div>
          <div class="popapp-button" @click="close">
            <button>Дальше</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script src="./Popapp.js"></script>
<style src='./Popapp.scss' lang="scss">
</style>
