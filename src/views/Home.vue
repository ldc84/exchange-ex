<template>
  <div class="home">
    {{ $store.state.symbols }}
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'home',
  created(){
    this.getSymbols();
  },
  methods: {
    ...mapActions(['getSymbols'])
  }
}
</script>
