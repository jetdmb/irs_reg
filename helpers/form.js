import R from 'ramda'
import {validationsMap, validationMessageMap} from '../validators/index'
import { nationalities } from '../helpers/data'

const getValidationNameParams = (v) =>  {
  var [inputs, vName, params] = [v.split("("), v, []]

  if(inputs.length > 1) {
    vName = inputs[0]
    let paramStr = inputs[1].split(")")[0]
    params = paramStr.split(",").map( (p) => p.trim().replace(/["']/g, "") )
  } 
  return [vName, params]
}

const replaceParamsInMsg = (msg, params) => {
  var result = msg
  for (var i = 0; i < params.length; i++ ) {
    result = result.replace(new RegExp("\\$" + String(i+1), 'ig') , params[i])
  }  
  return result
}

const setDatePickerOption = field => {
  field.datepickerOption = {
        type: 'day',
        week: ['一', '二', '三', '四', '五', '六', '日'],
        month: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
        format: 'YYYY-MM-DD',
        placeholder: '请选择' + field.display_name,
        inputStyle: {
          'display': 'inline-block',
          'padding': '6px',
          'line-height': '22px',
          'font-size': '16px',
          'border': '2px solid #fff',
          'border-radius': '2px',
        },
        color: {
          header: '#ccc',
          headerText: '#dd2f00'
        },
        buttons: {
          ok: 'Ok',
          cancel: 'Cancel'
        },
        overlayOpacity: 0.5, // 0.5 as default
        dismissible: true // as true as default
      }
    return field
}

const setDateField = (field) => {
  if (field.type === 'date')  {
    field.value =  field.value || { time: ""  }
    field = setDatePickerOption(field)
  }
  return field
}

const setCheckboxesField = field => {
  if (field.type === 'checkboxes') {
    if (!!!field.value) {
      field.value = []
    }
    if (field.options && field.options.length > 0) {
      field.options = field.options.map((option, index) => {
        option.name = field.name + String(index)
        return option
      })
    }
  }
  return field
}
const setNationalitiesData = field => {
  if(field.type==="nationality") {
    field.nationalities = nationalities.nationalities
  }
  return field
}
const setErrorMsg = field => {
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
}
const setHasRequired = field => {
  field.errorMsg = field.errorMsg || {}
  if(field.validators) {
    
    field.hasRequired = field.validators.some( function(v, index) {
      return v.toLowerCase().indexOf('required') > -1
    }) 
  }
  return field
}
const transformField = field => R.compose(setDateField, setCheckboxesField, setErrorMsg, setNationalitiesData, setHasRequired)(field)

const getValidations = fields => {
  return fields.filter((field)=> field.validators && field.validators.length > 0).reduce( (validations, field)=> { 
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
}

export {transformField, getValidations}