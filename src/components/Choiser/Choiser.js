import Container from "../Container/Container.vue"

export default {
  name: 'Choiser',
  data() {
    return {
      classChecked: '--checked',
      checks: [],
      list: [
        {
          isChecked: false,
          title: 'Деньги, успех, бизнес.',
          text: 'Как приумножить в разы доходы и сохранить их'
        },
        {
          isChecked: false,
          title: 'Уметь видеть других «насквозь»',
          text: 'Знать, о чём они думают. Научиться хорошо разбираться в людях'
        },
        {
          isChecked: false,
          title: 'Отношения, любовь, семья, секс',
          text: 'Новый уровень личного счастья'
        },
        {
          isChecked: false,
          title: 'Энергия для жизни, умноженная на 100. ',
          text: 'Синдром отложенной счастливой жизни'
        },
        {
          isChecked: false,
          title: 'В чем смысл - действий, изменений, самой жизни? ',
          text: 'Разобраться в себе, получить ответ на вопрос «Кто я?»'
        },
      ]
    }
  },
  components: {
    Container
  },
}
