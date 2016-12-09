import validator from 'validator'
import { required, between, minLength, maxLength } from 'vuelidate/lib/validators'
import moment from 'moment'

const email = value => {
  return !value || validator.isEmail(value)
}

const phone = value => {
  return !value || validator.isMobilePhone(value, 'zh-CN')
}

const dateRange = (min, max) =>
  value => {
    return !!!value || !!!value.time || (moment(value.time).isValid() && moment(value.time).isBetween(min, max))
  }
const dateRequired = value => {
  return !!value && !!value.time
}

const regionRequired = value => {
  console.log("regionRequired", value, value.country, !!value && !!value.country)
  return !!value && !!value.country
}

const validationsMap = { required, email, phone, dateRange, minLength, maxLength, between, dateRequired, regionRequired}
const validationMessageMap = { regionRequired:'不能为空', dateRequired: "不能为空", required: "不能为空", email: "格式不正确", phone: "格式不正确", between: "必须在$1和$2之间", dateRange: "必须在$1和$2之间"}
export {email, phone, validationsMap, validationMessageMap}