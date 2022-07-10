<template>
  <div id="app">
    <div class="container" style="margin-top: 15px;">
      <div class="header-info">
        <h1>Вакансии школ Республики Мордовия</h1>
        <h4>(данные из открытых источников в системе <a href='https://schoolrm.ru'>schoolrm.ru</a>)</h4>
      </div>
      <div class="row" style="margin-top: 15px;">
        <div class="col-md-3">
          <div class="select-city">
            <p class="h5">Выберите район:</p>
            <ChooseCity @changed_city='changed_city'></ChooseCity>
          </div>
          <div class="select-school">
            <p class="h5">Выберите школу:</p>
            <ChooseSchool ref="school_select" @school_choosed="school_choosed"></ChooseSchool>
          </div>
          <button v-if="choosed_school" class="btn btn-outline-success" style="width: 100%"
            v-on:click="get_vac_data">Найти вакансии</button>
        </div>
        <div class="col-md-9">
          <LoadSpinner v-if="loader"></LoadSpinner>
          <VacanciesList ref="vacancies" @vac_data_loaded="vac_data_loaded"></VacanciesList>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import ChooseCity from './components/ChooseCity.vue'
import ChooseSchool from './components/ChooseSchool.vue'
import VacanciesList from './components/VacanciesList.vue'
import LoadSpinner from "./components/LoadSpinner.vue"

export default {
  name: 'App',
  components: {
    ChooseCity,
    ChooseSchool,
    VacanciesList,
    LoadSpinner,
  },
  data() {
    return {
      choosed_city: undefined,
      choosed_school: undefined,
      find_button: false,
      loader: false,
    }
  },
  methods: {
    changed_city(data) {
      this.choosed_school = undefined
      this.choosed_city = data.city_code
      this.$refs.school_select.get_city_schools(this.choosed_city)
    },
    school_choosed(data) {
      this.choosed_school = data.choosed_school
    },
    get_vac_data() {
      this.loader = true; 
      this.$refs.vacancies.get_all_data(this.choosed_school)
    },
    vac_data_loaded() {
      this.loader = false;
    }
  }
}
</script>

<style>
.header-info {
  padding: 10px;
  background-color: lightcyan;
}

.select-school {
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>
