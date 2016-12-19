<template lang="pug">
div.intro-container
  section.section
    div.container.has-text-centered
      h2.title.is-4 已实现的页面列表
      p
        router-link.button(to="/race_groups") 分组页面(updated to design version)
      p
        router-link.button(to="/confirm_registration") 确认报名信息(updated to design version)
      p
        router-link.button(to="/confirm_reg_individual") 确认报名信息个人(updated to design version)
      p
        router-link.button(to="/reg_success") 报名成功(updated to design version)
      p
        router-link.button(to="/form") 报名表单(updated to design version)
      p
        router-link.button(to="/race") 赛事页面
      p
        router-link.button(to="/team")  团队报名页面(含表单)  
      p
        router-link.button(to="/pay") 付款页面
      p
        router-link.button(to="/pay_success") 付款成功页面
      p
        router-link.button(to="/my_orders")  订单查询页面
      p
        router-link.button(to="/search_reg") 报名查询页面
      


</template>

<script>
export default {
  data: () => {
    return { }
  },
   head: {
    title: '已实现的页面列表'
  }
}
</script>

<style lang="stylus">
  div.intro-container
    background-color: #ffffff
    min-height: 100vh
    p+p 
      margin-top: 20px
          
</style>