<template lang="pug">
div.my-orders-container
  section.section.header
    div.container
      p.control.has-icon.has-icon-right
        input.input(type="text", placeholder="搜索所有订单")
        i.fa.fa-search
      nav.level
        div.level-item.has-text-centered
          a.button.is-active 报名
          a.button 照片

  section.section.order-detail(v-for="order in orders")
    div.container
      nav.nav
        div.nav-left
          div.nav-item
            label 下单时间:
            span {{ order.created_at }}
        div.nav-right
          div.nav-item
            span {{ getStatusText(order)}}
      article.media
        figure.media-left
          p.image.is-64x64
            img(src="/images/checkmark.png")
        div.media-content
          div.content
            span {{order.race_name}}
            span {{order.race_group}}
            span {{user}}
      nav.nav
        div.nav-left
          div.nav-item
            label 合计:
            span ¥{{ order.total }}
        div.nav-right
          span.nav-item
            a.button(href="/pay" v-if="order.status == 'pending_pay'") 去付款
            a.button(v-if="order.status == 'success'") 下载领物单

</template>

<script>
export default {
  data: () => {
    return { 
      user: "安德烈.莫洛亚",
      orders: [
      {created_at: "2016年11月26日", race_name: "三峡（宜昌）超级越野赛", race_group: "半程组(88公里)", status: "pending_pay", total: "1236"},
      {created_at: "2016年10月26日", race_name: "台湾宜兰冬山河超级马拉松", race_group: "全程组(100公里)", status: "success", total: "1644" },
      {created_at: "2016年11月18日", race_name: "2016 嗨跑·杭州山地越野赛", race_group: "半程组(40公里)", status: "pending_verify", total: "2238" },
    ]}
  },
   head: {
    title: '我的订单'
  },
  methods: {
    getStatusText: function(order) {
      return order.status == "success" ? "报名成功" :
        order.status == "pending_pay" ? "待付款" : "待审核"
    }
  }
}
</script>

<style lang="stylus">
  div.my-orders-container
    padding: 0
    background-color: #eeeeee
    min-height: 100vh  
    section.section.order-detail:not(:last-child)
      margin-bottom: 20px
    .order-detail
      nav.nav
        span, label
          display: inline-block
    article.media
      background-color: #ffffff
      div.media-content
        div.content
          padding: 0 20px
        span
          display: block
    .section
      background-color: transparent
      padding: 40px 5px
      
    section.section.order-detail
      padding: 0 5px
      div.container
        padding: 0 20px
        background-color: #ffffff
    
    .header
      a.button
        min-width: 100px
        border-radius: 0
        background-color: #D3D3D3
        border-color: #D3D3D3
        &.is-active
          background-color: #A9A9A9
          border-color: #A9A9A9
      
          
</style>