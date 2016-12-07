import Vue from 'vue'
import Vuex from 'vuex'
import {validationsMap, validationMessageMap} from '../validators/index'
Vue.use(Vuex)

let getValidationNameParams = (v) =>  {
  var [inputs, vName, params] = [v.split("("), v, []]

  if(inputs.length > 1) {
    vName = inputs[0]
    let paramStr = inputs[1].split(")")[0]
    params = paramStr.split(",").map( (p) => p.trim().replace(/["']/g, "") )
  } 
  return [vName, params]
}

let replaceParamsInMsg = (msg, params) => {
  var result = msg
  for (var i = 0; i < params.length; i++ ) {
    result = result.replace(new RegExp("\\$" + String(i+1), 'ig') , params[i])
  }  
  return result
}

const store = new Vuex.Store({
  state: {
    fields: [],
    validations: {form: {}},
  },
  mutations: {
    SET_FIELDS(state, fields) {
      state.fields = fields.map( (field) => {
        field.errorMsg = field.errorMsg || {}
        if(field.validators) {
          
          field.namedValidators = field.validators.map( function(v, index) {
            var [vName, params] = getValidationNameParams(v)

            if (validationMessageMap[vName]) {
              field.errorMsg[vName] = replaceParamsInMsg(validationMessageMap[vName], params)
            }
            return vName
          }) 
        }
        return field
      })
      console.log(state.fields)
    },
    SET_VALIDATIONS(state) {
      state.fields = state.fields || []
      let regExp = /\(.+\)/g

      let validations = state.fields.filter((field)=> field.validators && field.validators.length > 0).reduce( (validations, field)=> { 
        let validators = {}
        field.validators.map( function(v, index) {          
          var [vName, params] = getValidationNameParams(v)

          if (validationsMap[vName]) {
            if (params.length > 0) {
              validators[vName] = validationsMap[vName].apply(null, params)
            } else {
              validators[vName] = validationsMap[vName]
            } 
          }
        })
        validations[field.name] = validators
        return validations
      }, {})
      state.validations = { form: validations }
      console.log(state.validations)
    },
  },
  actions: {
    FetchFields({ commit }, { raceID }) {
      let fields = [
        {name:"name", type: 'text', validators: ['required'], display_name: "姓名", value: '', placeholder: '请输入姓名'},
        {name:"email", type: 'email', validators: ['required', 'email'], display_name: "邮箱", value: '', placeholder: '请输入电子邮箱'},
        {name:"phone", type: 'text', validators: ['required', 'phone'], display_name: "手机号码", value: '', placeholder: '请输入手机号码'},
        {name:"date", type: 'date', validators: ['required', "dateRange('2016-12-05', '2016-12-18')"], display_name: "测试日期", value: '', placeholder: '请输入测试日期'},
      ]
      commit('SET_FIELDS', fields)
      commit('SET_VALIDATIONS')
    },
  },
})

export default store