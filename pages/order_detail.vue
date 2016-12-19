<template lang="pug">
div.order-detail-container
  section.section
    div.container.individual
      div.team-member-container.card.is-fullwidth
        header.card-header
          h3.title.is-6.card-header-title 报名成功
        div.card-body
          p
            label 订单编号:
            span 234546576546543
          p
            label 下单时间:
            span 2016-09-09 12:30:21
          p
            label 比赛名称:
            span 海南马拉松 - 全程
          p
            label 比赛组别:
            span 团体
          p.custom
            label 特色号码簿
            img(src="/images/custom_number.png")
        div.card-footer
          span.card-footer-left 
          div.card-footer-right
            a.button.is-link.simple-red  下载领物单

    div.container
      div.team-member-container.card.is-fullwidth
        header.card-header
          h3.title.is-6.card-header-title 报名信息
        div.card-body
          ul 
            li
              label 姓名:
              span {{ member.name }}
            li
              label 手机:
              span {{ member.phone }}
            li
              label 邮箱:
              span {{ member.email }}
        div.card-footer
          span.card-footer-left 
          div.card-footer-right
            a.button.is-link.simple-red 名额转让
          div.card-footer-right
            a.button.is-link.simple-red  查看／修改信息
    div.container.individual
      div.team-member-container.card.is-fullwidth
        header.card-header
          h3.title.is-6.card-header-title 费用明细
        div.card-body
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
    
  section.section.reg-success.separator
    div.container
      div.title-wrapper
        h2.title.is-5 上海马拉松赛事组委会
      p
        label 网站:
        span www.shamarathon.com
      p
        label 邮箱:
        span shmarathon@china.com
      p
        label 电话:
        span 021-34567890
      p
        label 地址:
        span 上海市 普陀区 长风地区


  section.section.reg-success.separator.more
    div.container
      p
        span.normal 您可能还需要:
      p
        a.button.is-link 定制训练计划
        span.msg (科学的训练计划助您达成目标)
      p
        a.button.is-link 填写预计参加
        span.msg (第一时间收到赛后照片)
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
      member: {id: 1, name: "龙套", phone: "18801966666", email: "longtao@cc.tv"},
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

.order-detail-container
  section.section 
    padding: 20px padh-large
    background-color: transparent
    & + section.section
      padding-top: 0
    &.more
      a.button.is-link
        padding-left: 0  
        text-decoration: none
        color: #ff5000
      span.normal
        font-weight: normal
      span.msg
        height: 32px
        line-height: 32px
    &.reg-success
      padding: 0 !important
      &:last-child
        margin-top: 20px
      div.container
        background-color: #ffffff
        padding: 20px padh-large
        p
          margin: 3px 0
          label
            display: inline-block
            min-width: 50px
          span
            display: inline-block
            &.msg
              font-weight: normal
              color: #999999
      div.title-wrapper
        -ms-flex-align: stretch
        align-items: stretch
        display: -ms-flexbox
        display: flex
        margin-bottom: 10px
    div.container 
      background-color: transparent
      p.custom
        margin-top: 20px
        label
          margin-bottom: 5px
        img
          display: block
          width: 100%
      &.individual
        .team-member-container
          border-radius: 0
          &:first-child
            border-top-left-radius: 6px
            border-top-right-radius: 6px
          &:last-child
            border-bottom-left-radius: 6px
            border-bottom-right-radius: 6px
          .card
            box-shadow: 0 0 0px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1)
          .card-body
            >p
              padding-left: padh-small
              label
                display: inline-block
                min-width: 75px
              span
                display: inline-block
            div.table-container
              margin: 0 15px 20px 10px
              table
                td
                  span.coupon-txt
                    font-weight: 600
                  &:nth-child(2)
                    text-align: right
          div.card-footer
            .card-footer-right
              span
                color: #ff5000
                font-size: 1.5rem
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
  .order-detail-container
    section.section 
      padding: 20px padh-small
      div.container
        background-color: transparent
        &.individual
          .team-member-container
            .card-body
              >p
                padding-left: padh-small
    div.container
      h2.subtitle.is-5
        &:first-child
          padding: 20px padh-small 10px
        &:last-child
          padding: 10px padh-small 20px
        &:not(:last-child):not(:first-child)
          padding: 0 padh-small
      
</style>