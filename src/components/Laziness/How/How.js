import Container from "@/components/Container/Container.vue"

export default {
  name: 'How',
  data() {
    return {
      isPopupShow: false,
      classShow: '--show',
      classCurrent: 'current',
      classError: '--error',
      classFilled: '--filled',
      classBodyOverflow: 'ov-hidden',
      emailPattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      fields: {
        name: {
          value: '',
          name: 'name',
          type: 'name',
          isRequired: true,
          isValid: false,
        },
        email: {
          value: '',
          name: 'email',
          type: 'email',
          isRequired: true,
          isValid: false,
        },
        phone: {
          value: '',
          name: 'phone',
          type: 'phone',
          isRequired: true,
          isValid: false,
        },
      },
      list: [
        'Лениться – так приятно… <br>но жизнь проходит мимо',
        'Есть секрет - о нем вы узнаете на бесплатной лекции уже завтра, в 21:00',
        'Планируя, мотивируя, наказывая себя избавиться от лени невозможно',
        'Внимание! Возможен <br>быстрый результат!'
      ],
    }
  },
  methods: {
    addError(field) {
      field.isValid = false;
      // this.$refs['input_' + field.name].classList.add(this.classError);
    },
    removeError(field) {
      field.isValid = true;
      // this.$refs['input_' + field.name].classList.remove(this.classError);
    },

    validate(field) {
      this.$refs['input_' + field.name].classList.remove(this.classError);

      if (field.value != '') {
        this.$refs['input_' + field.name].classList.add(this.classFilled);
      } else {
        this.$refs['input_' + field.name].classList.remove(this.classFilled);
      }

      switch (field.type) {
        case "name":
          // field.value = field.value.replace(/[\d]/g, '');
          if (field.value.length < 3) {
            this.addError(field);
          } else {
            this.removeError(field);
          }
          break;
        case "email":
          if (!this.emailPattern.test(field.value)) {
            this.addError(field);
          } else {
            this.removeError(field);
          }
          break;

        case "phone":
          if (field.value.length < 18) {
            this.addError(field);
          } else {
            this.removeError(field);
          }
          break;
      }
    },
    book() {
      let errors = 0;
      Object.entries(this.fields).forEach(([field, data]) => {
        if (data.isRequired == true && data.isValid != true) {
          errors++;
          this.$refs['input_' + data.name].classList.add(this.classError);
        }
      });

      if (errors == 0) {
        // action submit here


        // reset fiels
        Object.entries(this.fields).forEach(([field, data]) => {
          data.value = '';
        });

        // thanks
        this.block = 3;
      }

    }
  },
  watch: {
    isPopupShow() {
      if (this.isPopupShow) {
        document.body.classList.add(this.classBodyOverflow);
      } else {
        document.body.classList.remove(this.classBodyOverflow);
      }
    }
  },
  components: {
    Container
  }
}
