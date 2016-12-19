<template lang="pug">
div.reg-success-container
  div.container
    section.section.irs-box.reg-success
      div.container
        div.title-wrapper
          figure.image.is-24x24
            img(src="/images/success.png")
          h2.title.is-5 报名成功
        p
          label 比赛名称:
          span 海南马拉松 - 全程
        p
          label 比赛组别:
          span 团体
        p
          label 比赛时间:
          span 2016-09-09
        p
          label 订单编号:
          span 234546576546543
        p
          span.msg 报名的确认邮件已经发往您的邮箱， 请注意查收

    hr
    section.section.reg-success
      div.container
        a.button.is-outlined.irs-red.mw-120.br-16 邀请朋友参加

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
          a.button.is-link 查看报名详情
        p
          a.button.is-link 查看所有报名
        p
          a.button.is-link 填写预计参加
          span.msg (第一时间收到赛后照片)
</template>

<script>
export default {
  data: () => {
    return { }
  },
   head: {
    title: '报名成功'
  }
}
</script>

<style lang="stylus">
padh-small = 10px
padh-large = 30px

  div.reg-success-container
    padding: 0
    background-color: #eeeeee
    min-height: 100vh  
    button.button
      min-width: 100px
    
    
    .section
      background-color: transparent
    section.section
      padding: 20px padh-large
      &.custom
        background-color: #ffffff
      &.separator
        margin-top: 20px
      &.reg-success
        background-color: #ffffff
        p
          margin: 3px 0
          label
            display: inline-block
            min-width: 75px
          span
            display: inline-block
            font-weight: 600
            &.msg
              font-weight: normal
              color: #999999
        div.title-wrapper
          -ms-flex-align: stretch
          align-items: stretch
          display: -ms-flexbox
          display: flex
          margin-bottom: 10px
          figure.image
            -ms-flex-align: center
            align-items: center
            cursor: pointer
            display: -ms-flexbox
            display: flex
            -ms-flex-pack: center
            justify-content: flex-start
            margin-right: 10px
          h2
            -ms-flex-align: center
            align-items: center
            cursor: pointer
            display: -ms-flexbox
            display: flex
            -ms-flex-pack: center
            justify-content: flex-start
            flex-grow: 1
            font-weight: 600
      
      &.register
        margin-top: 20px
        background-color: #cccccc
        span, label
          text-align: center
          display: block
        .goal
          margin: 20px 0 40px
          span
            display: inline-block
          input
            margin: 0 10px
        button.button 
          display: inline-block
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

@media (max-width: 768px) 
  div.reg-success-container
    section.section
      padding: 20px padh-small
</style>