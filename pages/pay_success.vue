<template lang="pug">
div.pay-success-container
  article.media
    figure.media-left
      p.image
        img(src="/images/checkmark.png")
    div.media-content
      div.content
        h2.title.is-4 报名成功
        div.container
          p
            label 订单号:
            span XXXXXXXXX
          p
            label 订单号:
            span YYYYYYYYY
          p
            span 我们已发送相关信息导您的邮箱
  section.section.custom
    div.container
      p.has-text-centered
        | 组委会自己配置的富文本区域

  section.section.register
    div.container
      p
        span {参赛者姓名}
        label 报名参加了
        span {比赛名称}
        span {组别}
        span {地点} {时间}
      nav.level.goal
        div.level-item.has-text-centered
          span 目标成绩
          input(type="number", min="1", max="100", step="1", value="5" )
          span 小时
          input(type="number", min="1", max="59", step="1", value="10" )
          span 分
      p
        h2.title.is-5.has-text-centered {个性号码簿}
      p.has-text-centered
        button.button 分享


  section.section.more
    div.container
      p
        span 您可能还需要:
      p
        a.button.is-link.is-medium 查看订单详情
      p
        a.button.is-link.is-medium 定制训练计划
        span 科学的训练计划助你达到目标
      p
        a.button.is-link.is-medium 填写预计参加
        span 第一时间收到赛后照片
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
  div.pay-success-container
    padding: 0
    background-color: #eeeeee
    min-height: 100vh  
    button.button
      min-width: 100px
    
    article.media
      margin: 20px 10px
      padding: 20px
      background-color: #ffffff
      div.media-content
        div.content
          padding: 0 20px
        .content blockquote:not(:last-child), .content p:not(:last-child), .content ol:not(:last-child), .content ul:not(:last-child)
          margin-bottom: 0
        p + p 
          margin-top: 5px
        h2
          margin-bottom: 10px
    .section
      background-color: transparent
    section.section
      margin: 0 10px  
      &.custom
        background-color: #ffffff
      
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
        padding: 40px 0
        p
          display: flex
          justify-content: flex-start
          align-items: flex-end
        a.button.is-link
          padding-left: 0  
          text-decoration: none
          color: #169BD5
        span
          display: inline-flex
          height: 36px
          line-height: 36px
          
</style>