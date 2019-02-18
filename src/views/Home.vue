<template>
  <div class="home">
    {{ $store.state.symbols }}
  </div>
</template>

<script>
// @ is an alias to /src
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
