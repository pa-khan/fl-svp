import store from '@/store'
import Container from '@/components/Container/Container.vue'
import IMask from 'imask';

export default {
  name: 'Seriespopit',
  data() {

    return {
      block: 1,
      tabsCurrent: 1,
      classCurrent: 'current',
      classError: '--error',
      classFilled: '--filled',
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
      }
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
    login() {
      let errors = 0;
      let fieldEmail = this.fields.email;
      if (fieldEmail.isRequired == true && fieldEmail.isValid != true) {
        errors++;
        this.$refs['input_' + fieldEmail.name].classList.add(this.classError);
      }

      if (errors == 0) {
        // action submit here



        // reset fiels
        fieldEmail.value = '';

        // thanks
        this.block = 2;
      }

    },
    reg() {
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
  mounted() {


    IMask(this.$refs['input_phone'], {
      mask: '+7 (000) 000-00-00'
    })
  },
  components: {
    Container
  },
}
