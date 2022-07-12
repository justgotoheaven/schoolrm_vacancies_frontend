<template>
<div v-if="sc_list_loaded">
<p class="h5">Выберите школу:</p>
<select class="form-select" v-model="choosed_school" v-on:change="change_school">
    <option v-for="school in schools" :key="school.domain" :value="school.domain">{{ school.name }}</option>
</select>
</div>
</template>

<script>
import axios from 'axios';
import { API_URL } from '/src/api.config.js'

export default {
    name: 'ChooseSchool',
    data() {
        return {
            schools: undefined,
            choosed_school: null,
            sc_list_loaded: false,
        }
    },
    methods: {
        change_school() {
            this.$emit('school_choosed', { choosed_school: this.choosed_school })
        },
        get_city_schools(city_code) {
            this.sc_list_loaded = false;
            axios.get(API_URL + 'schools/get_all', { params: { city: city_code } }).
                then(response => { this.schools = response.data; this.sc_list_loaded = true; });
        }
    }
}
</script>

<style scoped>
</style>
