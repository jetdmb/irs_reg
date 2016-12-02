<template lang="pug">
div.search-reg-container
  section.section.header
    div.container
      h2.title.is-4 三峡（宜昌）超级越野赛
      p.control.has-addons
        input.input.is-expanded(type="text", placeholder="请输入手机号或姓名")
        a.button 报名查询

  section.section.content
    div.container
      p
        label 姓名:
        span 石玉宝
      p
        label 组别:
        span 半程个人
      p
        label 状态:
        span 待付款
      p.has-text-centered
        button.button 查看报名详情

</template>

<script>
export default {
  data: () => {
    return { }
  },
   head: {
    title: '报名查询'
  }
}
</script>

<style lang="stylus">
  div.search-reg-container
    padding: 0
    background-color: #eeeeee
    min-height: 100vh  
    button.button
      min-width: 100px
    
    .section
      background-color: transparent
    section.section
      margin: 0 10px  
      padding: 40px 0
      &.content
        label
          margin-left: 50px
          min-width: 50px
        span, label
          display: inline-block;
        p:not(:last-child)
          margin-bottom:5px
        p:last-child
          margin-top: 40px

          
</style>