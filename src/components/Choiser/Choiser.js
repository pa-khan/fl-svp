import Container from "../Container/Container.vue"

export default {
  name: 'Choiser',
  data() {
    return {
      isFilled: false,
      classChecked: '--checked',
      classDisabled: '--disabled',
      checks: [],
      list: [
        {
          isChecked: false,
          title: 'Деньги, успех, бизнес.',
          text: 'Как приумножить в разы <br>доходы и сохранить их'
        },
        {
          isChecked: false,
          title: 'Уметь видеть других <br>«насквозь»',
          text: 'Знать, о чём они думают. Научиться <br>хорошо разбираться в людях'
        },
        {
          isChecked: false,
          title: 'Отношения, любовь, семья, секс',
          text: 'Новый уровень личного счастья'
        },
        {
          isChecked: false,
          title: 'Энергия для жизни, <br>умноженная на 100.',
          text: 'Синдром отложенной счастливой жизни'
        },
        {
          isChecked: false,
          title: 'В чем смысл - действий, изменений, самой жизни? ',
          text: 'Разобраться в себе, получить <br>ответ на вопрос «Кто я?»'
        },
      ]
    }
  },
  methods: {
    changeCheck(item) {
      item.isChecked = !item.isChecked;

      this.toggleChecked();
    },
    toggleChecked() {
      this.firstFindCheck = this.list.find((el) => {
        if (el.isChecked) {
          return el;
        }
      });

      this.isFilled = this.firstFindCheck ? true : false;
    }
  },
  mounted() {
    this.toggleChecked();
  },
  components: {
    Container
  },
}
