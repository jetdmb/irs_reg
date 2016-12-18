<template lang="pug">
p
  span(:class="{'select': true, 'is-danger': validator}")
    select(@change="countryChanged", v-model="selectedCountryID")
      option(value='') 请选择
      option(v-for="country in data", :value="country.id") {{country.name}}
  span(v-if="showProvince", :class="{'select': true, 'is-danger': validator}")
    select(@change="provinceChanged", v-model="selectedProvinceID")
      option(v-for="province in provinces", :value="province.id") {{province.name}}
  span(v-if="showCity", :class="{'select': true, 'is-danger': validator}")
    select(@change="cityChanged", v-model="selectedCityID")
      option(v-for="city in cities", :value="city.id") {{city.name}}
</template>

<script>
import { district } from '../helpers/data'
export default {
  props: {
    validator: {
      type: Boolean,
      required: true
    },
  },
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
span.select:not(:first-child) 
  margin-left: 5px
</style>