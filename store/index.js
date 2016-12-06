import Vue from 'vue'
import Vuex from 'vuex'
import {validationsMap} from '../validators/index'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    fields: [],
    validations: {form: {}},
  },
  mutations: {
    SET_FIELDS(state, fields) {
      state.fields = fields;
    },
    SET_VALIDATIONS(state) {
      state.fields = state.fields || []
      let validations = {}
      state.fields.filter((field)=> field.validators && field.validators.length > 0).map( (field)=> { 
        let validators = {}
        field.validators.map( function(v, index) {
          validators[v] = validationsMap[v]
        })
        validations[field.name] = validators
      })
      state.validations = { form: validations }
    },
  },
  actions: {
    FetchFields({ commit }, { raceID }) {
      let fields = [
        {name:"name", type: 'text', validators: ['required'], display_name: "姓名", value: '', placeholder: '请输入姓名'},
        {name:"email", type: 'email', validators: ['required', 'email'], display_name: "邮箱", value: '', placeholder: '请输入电子邮箱'},
        {name:"phone", type: 'text', validators: ['required', 'phone'], display_name: "手机号码", value: '', placeholder: '请输入手机号码'},
      ]
      commit('SET_FIELDS', fields)
      commit('SET_VALIDATIONS')
    },
  },
})

export default store