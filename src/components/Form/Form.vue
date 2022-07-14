<template>
  <section class="section form" id="form">
    <Container>
      <form class="form_wrapper form-dark">
        <div class="form_left">
          <div class="form_title">
            <span class="for-desktop">Получите три первые лекции бесплатно, которые пройдут 22,23,24 июня</span>
            <span class="for-mobile">Получите три первые<br> лекции бесплатно,<br> которые пройдут <br>22,23,24
              июня</span>
          </div>
          <div class="form_subtitle">
            <span class="for-desktop">Уже на этих занятиях вы получите уникальные <br>результаты меняющие жизнь.</span>
            <span class="for-mobile">Уже на этих занятиях вы <br> получите уникальные<br> результаты меняющие
              жизнь.</span>
          </div>
        </div>
        <div class="form_right">
          <div class="form_input">
            <input type="name" placeholder="Имя" ref="input_name" v-model="fields.name.value"
              @keyup="validate(fields.name)">
            <label>Имя </label>
            <div class="bar"></div>
          </div>
          <div class="form_inputs">
            <div class="form_input">
              <input type="email" placeholder="Email" ref="input_email" v-model="fields.email.value"
                @keyup="validate(fields.email)">
              <label>Email </label>
              <div class="bar"></div>
            </div>
            <div class="form_input">
              <input type="tel" placeholder="Телефон" ref="input_phone" v-model="fields.phone.value"
                @keyup="validate(fields.phone)">
              <label>Телефон </label>
              <div class="bar"></div>
            </div>
          </div>
          <div class="form_button">
            <button class="btn btn_primary" @click.prevent="submit">Подать заявку</button>
          </div>
          <label class="form_check" for="check1">
            <input type="checkbox" id="check1" checked="">
            <span>Соглашаюсь с <a href="#">правилами <br> обработки персональных данных</a></span>
          </label>
        </div>
      </form>

    </Container>
  </section>
</template>
<script src="./Form.js"></script>
<style src='./Form.scss' lang="scss">
</style>
