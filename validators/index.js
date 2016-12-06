import validator from 'validator'
import { required } from 'vuelidate/lib/validators'

const email = value => {
  return !value || validator.isEmail(value)
}

const phone = value => {
  return !value || validator.isMobilePhone(value, 'zh-CN')
}

const validationsMap = { required, email, phone}
const validationMessageMap = { required: "不能为空", email: "格式不正确", phone: "格式不正确"}
export {email, phone, validationsMap, validationMessageMap}