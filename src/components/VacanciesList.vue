<template>
    <div>
        <div class="card">
            <div class="card-header">Информация об образовательном учреждении</div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item"><b>Наименование ОУ: </b>{{ sc_info.name }}</li>
                <li class="list-group-item"><b>Адрес: </b>{{ sc_info.address }}</li>
                <li class="list-group-item"><b>Телефон: </b>{{ sc_info.tel }}</li>
            </ul>
        </div>
        <div class="card" style="margin-top: 20px">
            <div class="card-body">
                <h4 class="card-title">Вакансии:</h4>
                <ul class="list-group list-group-flush" v-if="sc_vac">
                    <li v-for="vac in sc_vac" v-bind:key="vac.vacancy" class="list-group-item">{{ vac.vacancy }}</li>
                </ul>
                <span v-else>Вакансий нет</span>
            </div>
        </div>
    </div>

</template>

<script>
import axios from 'axios'
import { API_URL } from "/src/api.config.js"

export default {
    name: "VacanciesList",
    data() {
        return {
            sc_info: undefined,
            sc_vac: null,
        }
    },
    methods: {
        get_all_data(sc_domain) 
        {
            this.sc_vac = null;
            axios.get(API_URL + 'schools/get_by_domain', { params: { domain: sc_domain } }).
                then(response => (this.sc_info = response.data));
            axios.get(API_URL + 'vacancies/get_by_school', { params: { school_domain: sc_domain } }).
                then(response => (this.sc_vac = response.data)).catch(function (error) {
                    console.log(error);
                });
            this.$emit('vac_data_loaded')
        }
    }
}
</script>