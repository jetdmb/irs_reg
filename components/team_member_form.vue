<template lang="pug">
div.team_member_form
  div.container
    button.button.is-disabled.contacts 常用联系人
    h2.subtitle.is-5 
      |参赛者
      span.is-danger(v-if="form_error") !!!
    div.control.is-horizontal
      div.control-label
        label.label 真实姓名*
      p.control
        input(type="text", v-validate="", placeholder="请输入", data-vv-rules="required", :class="{'input': true, 'is-danger': errors.has('name') }" name="name")
        span(v-show="errors.has('name')", class="help is-danger") {{ errors.first('name') }}
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
        label.label 生日*
      p.control
        date-picker(:date="startTime", :option="option", :limit="limit")
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
        label.label 电子邮箱*
      p.control
        input.input(type="text", v-validate="", placeholder="请输入电子邮箱", data-vv-rules="required|email", :class="{'input': true, 'is-danger': errors.has('email') }" name="email")    
        span(v-show="errors.has('email')", class="help is-danger") {{ errors.first('email') }}
    div.control.is-horizontal
      div.control-label
        label.label 手机*
      p.control
        input.input(type="text", v-validate="", placeholder="请输入11位手机号码", data-vv-rules="required", :class="{'input': true, 'is-danger': errors.has('phone') }" name="phone")  
        span(v-show="errors.has('phone')", class="help is-danger") {{ errors.first('phone') }}
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
export default {
  data () {
    return {
      date: {
        time: ''
      },
      // for Vue 2.0
      startTime: {
        time: ''
      },
      endtime: {
        time: ''
      },

      option: {
        type: 'day',
        week: ['一', '二', '三', '四', '五', '六', '日'],
        month: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
        format: 'YYYY-MM-DD',
        placeholder: '请选择',
        inputStyle: {
          'display': 'inline-block',
          'padding': '6px',
          'line-height': '22px',
          'font-size': '16px',
          'border': '2px solid #fff',
          'border-radius': '2px',
          'color': '#5F5F5F'
        },
        color: {
          header: '#ccc',
          headerText: '#f00'
        },
        buttons: {
          ok: 'Ok',
          cancel: 'Cancel'
        },
        overlayOpacity: 0.5, // 0.5 as default
        dismissible: true // as true as default
      },
      timeoption: {
        type: 'min',
        week: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
        month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        format: 'YYYY-MM-DD HH:mm'
      },
      multiOption: {
        type: 'multi-day',
        week: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
        month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        format:"YYYY-MM-DD HH:mm"
      },
      limit: [{
        type: 'weekday',
        available: [1, 2, 3, 4, 5]
      },
      {
        type: 'fromto',
        from: '2016-02-01',
        to: '2016-02-20'
      }]
    }
  },
  props: ['show_form'],
  computed: {
    form_error: function () {
      return this.errors.any()
    }
  },
  components: {
    'date-picker': myDatepicker
  },
  methods: {
    form_cancelled() {
      this.$emit("form_cancelled")
    },
    form_saved() {
      this.$validator.validateAll()
      if (!this.errors.any()) {
          this.$emit("form_saved")
      }
    }
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