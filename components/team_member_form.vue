<template lang="pug">
div.team_member_form
  div.container
    button.button.is-disabled.contacts 常用联系人
    h2.subtitle.is-5 
      |参赛者
      span.is-danger(v-if="$v.$error") !!!
    div.control.is-horizontal(v-for='field in fields')
      div.control-label
        label.label {{ field.display_name }}*
      p.control
        label.checkbox(v-if="field.type === 'checkboxes'", v-for="option in field.options")
          input(type="checkbox", :name="option.name", :id="option.name", v-model="form[field.name]", :value="option.value") 
          span {{option.label}}
        input.input(type="email", v-model="form[field.name]", :placeholder="field.placeholder", :class="{'input': true, 'is-danger': $v.form[field.name] && $v.form[field.name].$error }", :name="field.name", @blur="$v.form[field.name] && $v.form[field.name].$touch()" v-if="field.type === 'email'")  
        input.input(type="number", v-model="form[field.name]", :placeholder="field.placeholder", :class="{'input': true, 'is-danger': $v.form[field.name] && $v.form[field.name].$error }", :name="field.name", @blur="$v.form[field.name] && $v.form[field.name].$touch()" v-if="field.type === 'number'")  
        input.input(type="text", v-model="form[field.name]", :placeholder="field.placeholder", :class="{'input': true, 'is-danger': $v.form[field.name] && $v.form[field.name].$error }", :name="field.name", @blur="$v.form[field.name] && $v.form[field.name].$touch()" v-if="field.type === 'text'") 
        date-picker(:date="form[field.name]", :option="field.datepickerOption", v-if="field.type === 'date'" @change="datePickerChanged(form, field.name, $event)" @cancel="datePickerCancelled(form, field.name, $event)")
        span.select(v-if="field.type === 'select'")
          select(v-model="form[field.name]", @change="$v.form[field.name] && $v.form[field.name].$touch()")
            option(value='') {{field.placeholder}}
            option(v-for="option in field.options", :value="option.value") {{option.text}}
        span.select(v-if="field.type === 'nationality'")
          select(v-model="form[field.name]", @change="$v.form[field.name] && $v.form[field.name].$touch()")
            option(value='') {{field.placeholder}}
            option(v-for="option in field.nationalities", :value="option.en_name") {{option.name}}
        region-selector(v-if="field.type === 'region'", @change="regionChanged(form, field.name, $event)")
        span.help.is-danger(v-for='v in field.namedValidators' v-show="$v.form[field.name] && $v.form[field.name].$dirty && !$v.form[field.name][v]") {{field.display_name}}{{field.errorMsg[v]}}

    div.control.is-horizontal
      div.control-label
        label.label 证件类型*
      p.control
        span.select
          select
            option 身份证
            option 护照
    div.control.is-horizontal
      div.control-label
        label.label 证件号*
      p.control
        input.input(type="text", placeholder="请输入证件号码" name="id_number")
    div.control.is-horizontal
      div.control-label
        label.label 性别*
      p.control
        span.select
          select
            option 请选择
            option 男
            option 女
    div.control.is-horizontal
      div.control-label
        label.label 血型*
      p.control
        span.select
          select
            option 请选择
            option A
            option B
            option AB
            option O
    div.control.is-horizontal
      div.control-label
        label.label 国籍*
      p.control
        input.input(type="text", placeholder="请输入")     
    div.control.is-horizontal
      div.control-label
        label.label 所在地*
      p.control
        input.input(type="text", placeholder="请输入")      
    div.control.is-horizontal
      div.control-label
        label.label 服装颜色*
      p.control
        span.select
          select
            option 请选择
            option 红色
            option 绿色
    div.control.is-horizontal
      div.control-label
        label.label 服装尺寸*
      p.control
        span.select
          select
            option 请选择
            option S
            option M
            option L
            option XL  
    div.control.is-horizontal
      div.control-label
        label.label 成绩证书*
      p.control
        input.input(type="text", placeholder="请上传")  
    div.control.is-horizontal.no-flex-mobile
      div.control-label
        label.label 紧急联系人*
      p.control
    div.control.is-horizontal
      div.control-label
        label.label 姓名*
      p.control
        input.input(type="text", placeholder="请输入")  
    div.control.is-horizontal
      div.control-label
        label.label 手机*
      p.control
        input.input(type="text", placeholder="请输入11位手机号码")  
    div.control.is-horizontal.no-flex-mobile
      div.control-label
        label.label 多行文字标题*
      p.control
        textarea.textarea(placeholder="提示信息")   
    div.control.is-horizontal.no-flex-mobile
      div.control-label
        label.label 多行文字标题*
      p.control
        label.checkbox
          input(type="checkbox") 
          span 选项a
        label.checkbox
          input(type="checkbox") 
          span 选项b
        label.checkbox
          input(type="checkbox") 
          span 选项c
        label.checkbox
          input(type="checkbox") 
          span 选项d
        label.checkbox
          input(type="checkbox") 
          span 选项e
    nav.level.form-actions
      div.level-item.has-text-centered
        a.button(@click.stop.prevent="form_cancelled") 取消
        a.button.is-primary(@click.stop.prevent="form_saved") 提交
  
</template>

<script>
import myDatepicker from './vue_datepicker.vue'
import RegionSelector from './region_selector.vue'
import {validationMessageMap} from '../validators/index'
import { validateModel } from 'vuelidate'

export default {
  beforeCreate: function () {
    const options = this.$options
    if (typeof options.computed === 'undefined') {
      options.computed = {}
    }
    options.computed.fields = () => {
      return this.$store.state.fields
    }
    options.computed.$v = () => {
      
      return validateModel(this, this.$store.state.validations)
    }
  },
  data () {
    let form = this.$store.state.fields.reduce( (form, field) => {

      if (typeof field.value === 'object' && !Array.isArray(field.value)) {
        form[field.name] = Object.assign({}, field.value)
      } else {
        form[field.name] = field.value
      }
      return form
      }, {})
    return {
      form: form
    }
  },
  props: ['show_form', 'rules'],
  computed: {
    form_error: function () {
      return this.$v.$error
    }
  },
  components: {
    'date-picker': myDatepicker,
    RegionSelector
  },
  methods: {
    datePickerChanged(form, name, event){
      form[name] = Object.assign({}, {time: event})
      this.$v.form[name] && this.$v.form[name].$touch()
    },
    datePickerCancelled(form, name, event){
      this.$v.form[name] && this.$v.form[name].$touch()
    },
    getValidationMessage(v) {
      return validationMessageMap[v]
    },
    regionChanged(form, name, region) {
      form[name] = Object.assign({}, region)
      this.$v.form[name] && this.$v.form[name].$touch()
    },
    form_cancelled() {
      this.$emit("form_cancelled")
    },
    form_saved() {
      this.$v.$touch()
      if (!this.$v.$error) {
          this.$emit("form_saved")
      }
    },
  },
  head: {
    title: '创建团队'
  }
}
</script>

<style lang="stylus">
.team_member_form
  margin: 20px 0 0
  button.button.is-disabled.contacts
    float: right
  .is-danger
    color: #ff3860
  .select select
    border: none
    option:first-child
      color: #cccccc
  div.control-label.align-left
    text-align: left !important
  .form-actions
    margin-top: 20px;
    a.button + a.button
      margin-left: 50px
@media (max-width: 768px) 
  .team_member_form
    div.control.is-horizontal.no-flex-mobile
      display: block !important
      div.control-label 
        display: block !important
        text-align: left
</style>