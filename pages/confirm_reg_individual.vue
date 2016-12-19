<template lang="pug">
div.confirm-reg-container
  div.container
    div.notification.irs-msg
      span 已为您锁定相关名额, 请在30分钟内完成支付
      span 优惠活动将于2016-12-24 12:30结束, 请在结束前完成付款
  div.container
    h2.subtitle.is-5 海南马拉松-全程
    h2.subtitle.is-5 2016/12/12
    h2.subtitle.is-5 宇宙无敌爱燃烧队
  section.section
    div.container.individual
      team-member(v-for="(member, index) in members", :member="member", :index_number="index", v-on:edit="edit" v-on:remove="remove" )
      div.team-member-container.card.is-fullwidth
        header.card-header
          h3.subtitle.is-6.card-header-title 附加服务
          div.card-header-right
            a.button.is-link(@click.stop.prevent="edit") 编辑
        div.card-body
          ul 
            li
              label 酒店套房双人间
              span x1
            li
              label 往返大巴车票
              span x2

      div.team-member-container.card.is-fullwidth.coupon
        header.card-header
          h3.title.is-6.card-header-item 优惠码
          div.card-header-center.control.is-horizontal
            p.control.is-expanded
              input.input(type="text", placeholder="请输入")
          div.card-header-item
            a.button.irs-red 使用
        div.card-body
          h3.title.is-5 付款明细
          h3.title.is-6 报名费
          div.table-container
            table
              td
                span 组别
              td 
                span  ¥200/团队
          h3.title.is-6 附加服务费
          div.table-container
            table
              td
                span 酒店
              td 
                span  ¥1600/间 x 2
          div.table-container
            table
              td
                span.coupon-txt 优惠券
              td 
                span  -¥40
        div.card-footer
          span.card-footer-left 总计:
          div.card-footer-right
            label ¥
            span 3260
    
  section.section.footer
    div.container
      div.footer-left
        label 合计:
        span ¥3260
      div.footer-right
        a.button.irs-red(href="#") 去支付 
</template>

<script>
import MemberForm from '../components/team_member_form.vue'
import TeamMember from '../components/team_member.vue'
import Loading from '../components/loading.vue'
export default {
  components: {MemberForm, TeamMember, Loading},
  data: () => {
    return {
      isLoading: true,
      validations: {},
      members: [ 
        {id: 1, name: "龙套", phone: "18801966666", email: "longtao@cc.tv"},
      ],
      showForm: false,
      modalVisible: false,
      transition: "zoom"
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
    }, 3000)
  },
  methods: {
    formCancelled: function() {
      this.showForm = false
    },
    formSaved: function(){
      alert("form saved")
    },
    remove: function(member) {
      console.log(member.email, member.name)
    },
    edit: function(member) {
      console.log(member.name)  
    },
    showFee: function() {
      this.modalVisible = true
    },
    closeModal: function() {
      this.modalVisible = false
    }, 
  }
}
</script>

<style lang="stylus">
padh-small = 10px
padh-large = 30px

.confirm-reg-container
  section.section 
    padding: 20px padh-large
    background-color: transparent
    div.container 
      background-color: transparent
      &.individual
        .team-member-container
          margin: 0
          border-radius: 0
          &:first-child
            border-top-left-radius: 6px
            border-top-right-radius: 6px
          &:last-child
            border-bottom-left-radius: 6px
            border-bottom-right-radius: 6px
          .card
            box-shadow: 0 0 0px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1)
          
    &.footer
      padding: 0
      div.container
        background-color: #ffffff
        -ms-flex-align: stretch
        align-items: stretch
        display: -ms-flexbox
        display: flex
        .footer-left
          -ms-flex-align: center
          align-items: center
          cursor: pointer
          display: -ms-flexbox
          display: flex
          -ms-flex-pack: center
          justify-content: start
          flex-grow: 1
          padding: 10px 15px
          label
            font-size: 1.5rem  
          span
            font-size: 1.5rem
            color: #ff5000
        .footer-right
          -ms-flex-align: center
          align-items: center
          cursor: pointer
          display: -ms-flexbox
          display: flex
          -ms-flex-pack: center
          justify-content: center   
          a.button.irs-red
            color: #ffffff
            height: 100%
            border-radius: 0
            min-width: 100px
            font-size: 1.5rem  
  min-height: 100vh
  background-color: #eeeeee

  div.card-header-center
    p.control.is-expanded
      padding-right: 10px
    input
      background-color: #f2f2f2
  div.container
    background-color: #ffffff
    h2.subtitle.is-5
      font-weight: 600
      &:first-child
        padding: 20px padh-large 10px
      &:last-child
        padding: 10px padh-large 20px
      &:not(:last-child):not(:first-child)
        padding: 0 padh-large
        font-weight: normal
      
    span.reg-time
      display: block
      padding: 0 padh-large
  
  h2 
    background-color: #ffffff
  hr
    margin: 0
  .title:not(:last-child), .subtitle:not(:last-child)
    margin-bottom: 0
    padding: 10px 0 10px 10px
  div.requirements
    padding: 10px 0 10px 10px
  button.button.is-white
    display: inline-block
    width: 100%
    text-align: center
    height: 46px
    background-color: #ffffff
    margin-top: 30px
  .control.is-horizontal
    display: -ms-flexbox
    display: flex
    background-color: #ffffff
    padding: 5px 0 5px 10px
  div.control-label
    -ms-flex-preferred-size: 0
    flex-basis: 0
    -ms-flex-positive: 1
    flex-grow: 1
    -ms-flex-negative: 0
    flex-shrink: 0
    margin-right: 20px
    padding-top: 7px
    text-align: right
    label
      font-weight: normal
  .control.is-horizontal > .control 
    display: -ms-flexbox
    display: flex
    -ms-flex-preferred-size: 0
    flex-basis: 0
    -ms-flex-positive: 4
    flex-grow: 4
    -ms-flex-negative: 1
    flex-shrink: 1
    input 
      border: none
      box-shadow: none
  .control.is-horizontal > p.control 
    display: block;
  .control:not(:last-child)
    margin-bottom: 0

@media (max-width: 768px) 
  .confirm-reg-container
    section.section 
      padding: 20px padh-small
      div.container
        background-color: transparent
    div.container
      h2.subtitle.is-5
        &:first-child
          padding: 20px padh-small 10px
        &:last-child
          padding: 10px padh-small 20px
        &:not(:last-child):not(:first-child)
          padding: 0 padh-small
</style>