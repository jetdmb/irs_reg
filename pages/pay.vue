<template lang="pug">
div.pay_container
  section.hero
    div.hero-head
      div.container
        h1.title.is-5.has-text-centered 选择付款方式 
    div.hero-body
      div.container
        p
          |{比赛名称} {组别}
        p
          |实付: ¥230.00
  section.section
    div.container
      nav.level
        div.level-item.has-text-centered
          button.button 支付宝
        div.level-item.has-text-centered
          button.button 微信
        div.level-item.has-text-centered
          button.button 银联付款

</template>

<script>
export default {
  data: () => {
    return { }
  },
   head: {
    title: '选择付款方式'
  }
}
</script>

<style lang="stylus">
  div.pay_container
    padding: 20px 0
    background-color: #eeeeee
    min-height: 100vh  
    button.button
      min-width: 100px
    p + p 
      margin-top: 10px
    h1
      background-color: #cccccc
      padding: 10px 0
    .hero
      background-color: transparent
    .section
      background-color: transparent
</style>