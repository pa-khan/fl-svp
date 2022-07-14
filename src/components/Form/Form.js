import store from '@/store'
import Container from '@/components/Container/Container.vue'
import IMask from 'imask';


export default {
  name: 'Form',
  data() {
    return {
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
    submit() {
      let errors = 0;
      Object.entries(this.fields).forEach(([field, data]) => {
        if (data.isRequired == true && data.isValid != true) {
          errors++;
          this.$refs['input_' + data.name].classList.add(this.classError);
        }
      });

      if (errors == 0) {
        // open popup
        store.commit('popupIsShow', true);
        store.commit('userName', this.fields.name.value);
        store.commit('userEmail', this.fields.email.value);

        // action submit here



        // reset fiels
        Object.entries(this.fields).forEach(([field, data]) => {
          data.value = '';
        });
      }

    }
  },
  mounted() {
    IMask(this.$refs['input_phone'], {
      mask: '+7 (000) 000-00-00'
    })
  },
  watch: {
    tabsCurrent() {
      Object.entries(this.fields).forEach(([field, data]) => {
        this.$refs['input_' + data.name].classList.remove(this.classError);
      });
    }
  },
  components: {
    Container
  },

}
