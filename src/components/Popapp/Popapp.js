import store from '@/store'
import { mapGetters } from 'vuex';

export default {
  name: 'Popapp',
  data() {
    return {
      classShow: '--show'
    }
  },
  computed: {
    ...mapGetters([
      // проксирует в this.count доступ к store.state.count
      'popappIsShow',
      'userName',
      'userEmail'
    ])
  },
  methods: {
    close() {
      store.commit('popupIsShow', false);
    }
  }
}
