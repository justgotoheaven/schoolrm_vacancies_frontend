<template>

<select class="form-select" v-model="current_city" v-on:change="change_city" v-if="data_loaded">
    <option v-for="city in cities_list" :key="city.code" :value="city.code">{{ city.name }}</option>
</select>
<span class="load-section" v-else>Загрузка...</span>
</template>

<script>
import axios from "axios"
import { API_URL } from "/src/api.config.js"

export default {
  name: 'ChooseCity',
  data() {
    return {
        cities_list: null,
        current_city: null,
        data_loaded: false
    }
  },
  mounted() {
    this.get_cities()
  },
  methods: {
    get_cities() {
        axios.get(API_URL+'cities/').then(response => { this.cities_list = response.data; this.data_loaded = true; });
    },
    change_city() {
        this.$emit('changed_city', { city_code: this.current_city })
    }
  }
}
</script>

<style scoped>
.load-section {
  padding: 5px;
  display: flex;
  color: white;
  background-color: gray;
}
</style>
