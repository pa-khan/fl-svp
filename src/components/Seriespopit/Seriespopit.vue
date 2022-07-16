<template>
  <section class="seriespopit">
    <Container>
      <div class="seriespopit-title">
        Психоаналитический <br>сериал от системно- <br>векторной психологии
      </div>
      <div class="seriespopit-block">
        <div class="seriespopit-border">
          <template v-if="block == 1">

            <ul class="tabs">
              <li class="tab-link" :class="tabsCurrent == 1 ? classCurrent : null" @click="tabsCurrent = 1">Регистрация
              </li>
              <li class="tab-link" :class="tabsCurrent == 2 ? classCurrent : null" @click="tabsCurrent = 2">Войти</li>
            </ul>
            <div class="tab-content current">
              <div class="tabs-block">
                <div v-if="tabsCurrent == 1" class="tabs-title">
                  Заполните поля, чтобы зарегистрироваться и войти
                </div>
                <div v-else-if="tabsCurrent == 2" class="tabs-title">
                  Чтобы войти введите Email, который привязан к вашему аккаунту
                </div>
                <div class="tabs-input">
                  <input v-if="tabsCurrent == 1" type="text" size="40" placeholder="Ваше имя" ref="input_name"
                    v-model="fields.name.value" @keyup="validate(fields.name)">
                </div>
                <div class="tabs-input">
                  <input type="text" size="40" placeholder="Email" ref="input_email" v-model="fields.email.value"
                    @keyup="validate(fields.email)">
                </div>
                <div class="tabs-input">
                  <input v-if="tabsCurrent == 1" type="text" size="40" placeholder="+7 000 000 00 00" ref="input_phone"
                    v-model="fields.phone.value" @keyup="validate(fields.phone)">
                </div>
                <div class="tabs-button">
                  <button v-if="tabsCurrent == 1" @click.prevent="reg">Получить код активации</button>
                  <button v-else-if="tabsCurrent == 2" @click.prevent="login">Получить ссылку на вход</button>
                </div>
                <div v-if="tabsCurrent == 1" class="tabs-suptitle">
                  Регистрируясь, вы соглашаетесь с <a href="#">условиями</a> <br>использования персональных данных
                </div>
              </div>
            </div>
          </template>
          <template v-else-if="block == 2">
            <div class="seriespopit-img">
              <img src="../../assets/images/seriespopit-img.png" alt="">
            </div>
            <div class="seriespopit-suptitle">
              Спасибо! Мы отправили ссылку на вход <br>на <a href="#">{{ fields.email.value }}</a> Перейдите по ссылке,
              чтобы
              войти
              в личный кабинет
            </div>
          </template>
          <template v-else-if="block == 3">
            <div class="seriespopit-img">
              <img src="../../assets/images/seriespopit-img.png" alt="">
            </div>
            <div class="seriespopit-suptitle">
              Спасибо! Мы отправили ссылку на вход <br>на <a href="#">{{ fields.email.value }}</a> Перейдите по ссылке,
              чтобы
              войти
              в личный кабинет
            </div>
          </template>
        </div>
      </div>
    </Container>
    <div class="seriespopit__bg">
      <img src="@/assets/images/seriespopit-bg.jpg" alt="">
    </div>
  </section>
</template>
<script src="./Seriespopit.js"></script>
<style src='./Seriespopit.scss' lang="scss">
</style>
