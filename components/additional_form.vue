<template lang="pug">
div.additional-form
  div.container
    div.control.is-horizontal(v-for='field in fields')
      div.control-label
        label.label {{ field.display_name }}
          i(v-if="field.hasRequired") *
        span.help.is-danger(v-for='v in field.namedValidators' v-show="$v.form[field.name] && $v.form[field.name].$dirty && !$v.form[field.name][v]") {{field.display_name}}{{field.errorMsg[v]}}
      p.control
        label.checkbox(v-if="field.type === 'checkboxes'", v-for="option in field.options")
          input(type="checkbox", :name="option.name", :id="option.name", v-model="form[field.name]", :value="option.value") 
          span {{option.label}}
        input.input(type="email", v-model="form[field.name]", :placeholder="field.placeholder", :class="{'input': true, 'is-danger': $v.form[field.name] && $v.form[field.name].$error }", :name="field.name", @blur="$v.form[field.name] && $v.form[field.name].$touch()" v-if="field.type === 'email'")  
        input.input(type="number", v-model="form[field.name]", :placeholder="field.placeholder", :class="{'input': true, 'is-danger': $v.form[field.name] && $v.form[field.name].$error }", :name="field.name", @blur="$v.form[field.name] && $v.form[field.name].$touch()" v-if="field.type === 'number'")  
        input.input(type="text", v-model="form[field.name]", :placeholder="field.placeholder", :class="{'input': true, 'is-danger': $v.form[field.name] && $v.form[field.name].$error }", :name="field.name", @blur="$v.form[field.name] && $v.form[field.name].$touch()" v-if="field.type === 'text'") 
        date-picker(:date="form[field.name]", :option="field.datepickerOption", v-if="field.type === 'date'" @change="datePickerChanged(form, field.name, $event)" @cancel="datePickerCancelled(form, field.name, $event)", :validator="$v.form[field.name] && $v.form[field.name].$error")
        span(v-if="field.type === 'select'", :class="{'select': true, 'is-danger': $v.form[field.name] && $v.form[field.name].$error }")
          select(v-model="form[field.name]", @change="$v.form[field.name] && $v.form[field.name].$touch()")
            option(value='') {{field.placeholder}}
            option(v-for="option in field.options", :value="option.value") {{option.text}}
        span(v-if="field.type === 'nationality'", :class="{'select': true, 'is-danger': $v.form[field.name] && $v.form[field.name].$error }")
          select(v-model="form[field.name]", @change="$v.form[field.name] && $v.form[field.name].$touch()")
            option(value='') {{field.placeholder}}
            option(v-for="option in field.nationalities", :value="option.en_name") {{option.name}}
        region-selector(v-if="field.type === 'region'", @change="regionChanged(form, field.name, $event)", :validator="$v.form[field.name] && $v.form[field.name].$error")
        
  slot(name="additional")
  nav.level.form-actions
    div.level-item.has-text-centered
      a.button.irs-button(@click.stop.prevent="form_cancelled") 取消
      a.button.irs-submit(@click.stop.prevent="form_saved") 提交
  
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
    console.log(this.$store.state.fields)
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
.additional-form
  div.container
    padding: 15px 0
  margin: 10px 0 0
  button.button.is-disabled.contacts
    float: right
  .is-danger
    color: #ff3860
  .select select
    border: none
    option:first-child
      color: #cccccc
  div.control-label
    display: -ms-flexbox
    display: flex
    label.label
      flex-grow: 1
      i
        color: #ff5000

    span.is-danger
      flex-grow: 1
      margin-top: 0
      text-align: right
      font-size: 1rem
  div.control-label.align-left
    text-align: left !important
  .form-actions
    margin-top: 20px;
    a.button + a.button
      margin-left: 50px
  .checkbox, .radio
    margin: 5px 5px 5px 0
    span
      display: flex;
      justify-content: start; /* align horizontal */
      align-items: center; /* align vertical */
      
    input[type='checkbox']
      display: none
    
    input[type='checkbox'] + span:before 
      color: #ffffff
      content: ""
      background-color: #ffffff;
      border: 1px solid #cacece;
      border-radius: 3px
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05);
      display: inline-block;
      transition-duration: 0.3s;
      width: 16px;
      height: 16px;
      content: '';
      margin-right: 5px;
    
    input[type='checkbox']:checked + span:before 
      background-color: #ff5000
      content: '\2713'
    
    
@media (max-width: 768px) 
  .additional-form
    .checkbox, .radio
      display: block
    div.control.is-horizontal.no-flex-mobile
      display: block !important
      div.control-label 
        display: block !important
        text-align: left
</style>