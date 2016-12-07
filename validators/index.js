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
  value => value === '' || (moment(value).isValid() && moment(value).isBetween(min, max))

const validationsMap = { required, email, phone, dateRange, minLength, maxLength}
const validationMessageMap = { required: "不能为空", email: "格式不正确", phone: "格式不正确", between: "必须在$1和$2之间", dateRange: "必须在$1和$2之间"}
export {email, phone, validationsMap, validationMessageMap}