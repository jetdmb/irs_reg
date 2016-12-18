<template lang="pug">
div.form-container
  loading(v-if="isLoading")
  div.container
    h2.subtitle.is-5 海南马拉松-全程
    div.race-p
      div.p-row
        label 组别:
        span 女子单板
      div.p-row
        label 时间:
        span 2017-01-01
      div.p-row
        label 报名费:
        span ¥230
      div.p-content
        |北京马拉松创办于1981年，也是国内第一马拉松赛事。北京马拉松时中国田径协会市场化程度最高，规模最大...
    div.race-p
      h2.subtitle.is-6 报名要求
      div.requirements
        | 2016 北京马拉松领物须知」领取日期和时间: 9月14-15日 早 9:30至1700； 9月16日早9:30至20:00，请严格遵守此时间领取参赛物品。
  div.container.wrapper
    h3.subtitle.is-6 参赛者信息
  additional-form(@form_cancelled="formCancelled", @form_saved="formSaved", v-if="!isLoading")
    div.additional(slot="additional")
      div.container.wrapper
        h3.subtitle.is-6 附加服务
      div.container
        div.additional-product
          h3.title.is-6 酒店豪华套餐
          span.description 希尔顿酒店双人间一晚  含自助早餐
          table
            tr
              td 
                div.product-label 房间1
              td
                div.price-container
                  label 单价:
                  span ¥1600
              td
                div.quantity
                  label 数量
                  input(type="number", value="0")
            tr
              td 
                div.product-label 房间2
              td
                div.price-container
                  label 单价:
                  span ¥1900
              td
                div.quantity
                  label 数量
                  input(type="number", value="0")
        div.additional-product
          h3.title.is-6 酒店豪华包车
          span.description 单程，上午9:00准时发车
          table
            tr
              td 
                div.product-label 座位
              td
                div.price-container
                  label 单价:
                  span ¥40
              td
                div.quantity
                  label 数量
                  input(type="number", value="0")
      div.container.wrapper
        label.checkbox
          input(type="checkbox") 
          span 
            | 我已阅读并接受
            a(href="#") 比赛条款,退款转让等条款
</template>
<style lang="stylus">
padh-small = 10px
padh-large = 30px

select-after()
  border-right: 0;
  border-top: 0;
  content: " ";
  display: block;
  height: 7px;
  pointer-events: none;
  position: absolute;
  -ms-transform: rotate(-45deg);
  transform: rotate(-45deg);
  width: 7px;
  margin-top: -6px;
  right: 16px;
  top: 50%;  
select-after-normal()
  border: 1px solid #666666;
  select-after()
select-after-error()
  border: 1px solid #ff5000
  select-after()
field-bg()
  background-color: #f2f2f2        
field-error-bg()
  background-color: #fff0eb  

.form-container
  section.section 
    background-color: transparent
  min-height: 100vh
  background-color: #eeeeee
  div.container
    background-color: #ffffff
    &.wrapper
      background-color: transparent
      padding: 0
      margin: 0 auto
    div.race-p
      border-top: 1px solid #f2f2f2
      padding: 20px padh-large  
      div.p-content
        padding-top: 5px
      div.p-row
        margin-bottom: 5px
        label, span
          min-width: 40px
          display:inline-block
          font-weight: bold
      h2.subtitle.is-6
        padding: 0 0 10px
  
  .modal-card-head, .modal-card-foot
    background-color: #ffffff !important
    border: none !important
  .modal-card-title
    text-align: center
  .modal-card-body
    table.table
      width: 60%
      margin: 0 auto 20px 
      tr 
        td 
          border-width: 0
          &.right
            text-align: right
          span.price
            width: 100px
            display: inline-block
            text-align: right
            &.total
              font-weight: bold
  h2 
    background-color: #ffffff
    font-weight: bold
  h3.subtitle.is-6
    padding: 0 0 0 padh-large
    margin-top: 40px
    font-weight: bold
  hr
    margin: 0
  .title:not(:last-child), .subtitle:not(:last-child)
    margin-bottom: 0
    padding: 20px 0 20px padh-large
  button.button.is-white
    display: inline-block
    width: 100%
    text-align: center
    height: 46px
    background-color: #ffffff
    margin-top: 30px
  .control.is-horizontal
    background-color: #ffffff
    padding: 5px 10px
  div.control-label
   
    label
      font-weight: normal
  .control.is-horizontal > .control 

    select
      field-bg()
        
    .select:after
      select-after-normal()
    .select.is-danger
      field-error-bg()
      select 
        field-error-bg()  
      &:after
        select-after-error()
    input 
      field-bg()  
      border: none
      box-shadow: none
      &.is-danger
        field-error-bg()
  .control:not(:last-child)
    margin-bottom: 0
  div.additional
    div.container
      margin-top: 10px
      padding: 15px padh-large
      &.wrapper
        background-color: transparent
        padding: 0
        margin: 0 auto
        label.checkbox
          margin: 10px padh-large
          span
            a 
              color: #ff5000
      div.additional-product
        padding: 20px 0
        &:not(:last-child)
          border-bottom: 1px solid #f2f2f2
        h3.title.is-6
          margin: 0
          padding: 0 0 5px
          color: #313131
          font-weight: bold
        span.description
          display: block
          padding-bottom: 15px
          color: #999999

        table
          td
            padding: 5px 0
            &:nth-child(2), &:nth-child(3)
              text-align: center
            
            > div
              min-width: 90px
              input[type=number]
                width: 30px
              
        
@media (max-width: 768px) 
  .form-container
    div.container
      div.race-p
        padding: 15px padh-small
      .title:not(:last-child), .subtitle:not(:last-child)
        margin-bottom: 0
        padding: 10px 0 10px padh-small
    h3.subtitle.is-6
      padding: 0 0 0 padh-small
      margin: 30px 0 0
    .modal-content, .modal-card
      background-color: #ffffff
    .modal-card-body
      table.table
        width: 90%
    div.additional
      div.container
        padding: 15px padh-small
        &.wrapper
          label.checkbox
            margin: 10px padh-small
</style>
<script>
import AdditionalForm from '../components/additional_form.vue'
import Loading from '../components/loading.vue'
export default {
  components: {AdditionalForm, Loading},
  data: () => {
    return {
      isLoading: true,
      validations: {},
    }
  },
  head: {
    title: '创建团队'
  },
  created() {
    let raceID = 1325
    setTimeout(()=>{
      this.$store.dispatch('FetchFields', {raceID})
      this.isLoading = false
    }, 1000)
  },
  methods: {
    formCancelled: function() {
      this.showForm = false
    },
    formSaved: function(){
      alert("form saved")
    }
  }
}
</script>

