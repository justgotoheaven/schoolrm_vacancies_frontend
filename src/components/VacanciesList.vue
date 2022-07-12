<template>
<div v-if="show_block">
    <LoadSpinner :msg='msg_info' v-if="!load_info"></LoadSpinner>
    <div v-else>
        <div>
            <div class="card">
                <div class="card-header">Информация об образовательном учреждении</div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item"><b>Наименование ОУ: </b>{{ sc_info.name }}</li>
                    <li class="list-group-item"><b>Адрес: </b>{{ sc_info.address }}</li>
                    <li class="list-group-item"><b>Телефон: </b>{{ sc_info.tel }}</li>
                </ul>
            </div>
            <LoadSpinner :msg='msg_vacs' v-if="!load_vacs"></LoadSpinner>
            <div class="card" style="margin-top: 20px" v-else>
                <div class="card-body" v-if="!vac_load_error">
                    <h4 class="card-title">Вакансии:</h4>
                    <ul class="list-group list-group-flush" v-if="sc_vac">
                        <li v-for="vac in sc_vac" v-bind:key="vac.vacancy" class="list-group-item">{{ vac.vacancy }}
                        </li>
                    </ul>
                    <span v-else>Вакансий нет</span>
                </div>
                <div class="card-body" v-else>
                    <span>Ошибка загрузки вакансий.</span>
                </div>
            </div>
        </div>
    </div>
</div>

</template>

<script>
import axios from 'axios'
import { API_URL } from "/src/api.config.js"
import LoadSpinner from './LoadSpinner.vue'

export default {
    name: "VacanciesList",
    components: {
        LoadSpinner,
    },
    data() {
        return {
            sc_info: { 'name': '', 'address': '', 'tel': '' },
            sc_vac: undefined,
            
            show_block: false,
            load_info: false,
            load_vacs: false,
            vac_load_error: false,

            msg_info: 'Загрузка информации...',
            msg_vacs: 'Загрузка вакансий...'
        }
    },
    methods: {
        get_all_data(sc_domain) {
            this.show_block = true;
            axios.get(API_URL + 'schools/get_by_domain', { params: { domain: sc_domain } }).
                then(response => {
                    this.sc_info = response.data;
                    this.load_info = true;
                });

            axios.get(API_URL + 'vacancies/get_by_school', { params: { school_domain: sc_domain } }).
                then(response => { this.sc_vac = response.data; this.load_vacs = true; }).catch(
                    (error) => {
                            this.load_vacs = true
                            if(error.response.status == 404) {
                            this.sc_vac = null
                        }
                        else { this.vac_load_error = true; }
                    }
                );
        }
    }
}
</script>