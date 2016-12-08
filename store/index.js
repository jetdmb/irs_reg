import Vue from 'vue'
import Vuex from 'vuex'
import {transformField, getValidations} from '../helpers/form'


Vue.use(Vuex)


const store = new Vuex.Store({
  state: {
    fields: [],
    validations: {form: {}},
  },
  mutations: {
    SET_FIELDS(state, fields) {
      state.fields = fields.map( (field) => {
        return transformField(field)
      })
    },
    SET_VALIDATIONS(state) {
      state.fields = state.fields || []
      state.validations = { form: getValidations(state.fields) }
    },
  },
  actions: {
    FetchFields({ commit }, { raceID }) {
      let fields = [
        {name:"name", type: 'text', validators: ['required'], display_name: "姓名", value: '', placeholder: '请输入姓名'},
        {name:"email", type: 'email', validators: ['required', 'email'], display_name: "邮箱", value: '', placeholder: '请输入电子邮箱'},
        {name:"phone", type: 'text', validators: ['required', 'phone'], display_name: "手机号码", value: '', placeholder: '请输入手机号码'},
        {name:"date", type: 'date', validators: ['dateRequired', "dateRange('2016-12-05', '2016-12-18')"], display_name: "测试日期", value: '', placeholder: '请输入测试日期'},
        {name:"number", type: 'number', validators: ['required', "between(20, 50)"], display_name: "测试Range数字", value: '', placeholder: '请输入测试日期'},
        {name:"checkboxes", type: 'checkboxes', validators: ['required'], display_name: "多选框", value: '', placeholder: '请输入多选框', options: 
          [ {label: "选项a", value: "1"}, {label: "选项b", value: "2"}, {label: "选项c", value: "3"}, {label: "选项d", value: "4"}, {label: "选项f", value: "5"}]},
        {name:"gender", type: 'select', validators: ['required'], display_name: "性别", value: '', placeholder: '请选择性别', options: [{value: "F", text:"女"}, {value: "M", text:"男"}]},
        {name:"cert_type", type: 'select', validators: ['required'], display_name: "证件类型", value: '', placeholder: '请选择证件类型', options: [{value: "id_card", text:"身份证"}, {value: "passport", text:"护照"}]},
        {name:"blood_type", type: 'select', validators: ['required'], display_name: "血型", value: '', placeholder: '请选择血型', options: [{value: "A", text:"A"}, {value: "B", text:"B"}, {value: "AB", text:"AB"}, {value: "O", text:"O"}]},
      
      ]
      commit('SET_FIELDS', fields)
      commit('SET_VALIDATIONS')
    },
  },
})

export default store