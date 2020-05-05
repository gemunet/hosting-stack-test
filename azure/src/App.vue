<template>
  <div id="app">
    {{ hello }}
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'App',
  data() {
    return {
      hello: '- no data -',
    }
  },

  methods: {
    async helloWorld() {
      try {
        const res = await axios.get('http://127.0.0.1:5000/hello')
        console.debug(res)
        this.hello = res.data
      } catch (e) {
        console.error(e)
      }
    },
  },

  created() {
    this.helloWorld();
  }
}
</script>
