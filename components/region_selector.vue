<template lang="pug">
p
  span.select
    select(@change="countryChanged", v-model="selectedCountryID")
      option(value='') 请选择
      option(v-for="country in data", :value="country.id") {{country.name}}
  span.select
    select(@change="provinceChanged", v-if="showProvince", v-model="selectedProvinceID")
      option(v-for="province in provinces", :value="province.id") {{province.name}}
  span.select
    select(@change="cityChanged", v-if="showCity", v-model="selectedCityID")
      option(v-for="city in cities", :value="city.id") {{city.name}}
</template>

<script>
import { district } from '../helpers/data'
export default {
  data: () => {
    return {
      region: {},
      data: district.regions,
      selectedCountryID: '',
      selectedCityID: '',
      selectedProvinceID: '',
      provinces: [],
      cities: []
    };
  },
  computed: {
    showProvince: function() {
      return this.provinces.length > 0
    },
    showCity: function() {
      return this.cities.length > 0
    }  
  },
  methods: {
    updateData: function (selectedID, listData, currentSection, nextSection, nextSelectedID) {
      if(+selectedID > 0) {
        let selected = listData.find(r => +r.id === +selectedID )
        if (selected) {
          if (nextSection){
            this[nextSection] = selected.children || []
          }
          if(nextSelectedID && nextSection && this[nextSection] && this[nextSection].length > 0) {
            this[nextSelectedID] = this[nextSection][0].id
          }
          if (currentSection === 'country') {
            this.region = {}
          }
          this.region[currentSection] = {id: selected.id, name: selected.name}
          this.$emit("change", this.region) 
        }
      } else {
        if(currentSection === 'country') {
          this.region = {}
          this.provinces = []
          this.cities = []  
          this.$emit("change", this.region) 
        }
      }
    },
    countryChanged: function() {
      this.updateData(+this.selectedCountryID, this.data, "country", "provinces", "selectedProvinceID")
    },
    provinceChanged: function() {
      this.updateData(+this.selectedProvinceID, this.provinces, "province", "cities", "selectedCityID")
    },
    cityChanged: function() {
      this.updateData(+this.selectedCityID, this.cities, "city")
    }
  }
}
</script>

<style lang="stylus">
</style>