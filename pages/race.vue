<template lang="pug">
div.irs
  div.irs-content
    section.hero
      div.hero-head
        div.race-header(style="background-image: url('/images/home_banner.jpg')")
          h1.title.is-4.
            上海国际马拉松 
      div.hero-foot
        div.container
          nav.level
            nav.level-item.has-text-centered
              div.stars-container
                div.stars
                  img(src="/images/star-on-b.png", alt="1", title="Stars")
                  img(src="/images/star-on-b.png", alt="1", title="Stars")
                  img(src="/images/star-on-b.png", alt="1", title="Stars")
                  img(src="/images/star-on-b.png", alt="1", title="Stars")
                  img(src="/images/star-on-b.png", alt="1", title="Stars")   
                div.join_count.
                  1632人参加    
    nav.level
      nav.level-item.has-text-centered.race-center-buttons
        a.button 预计参加
        a.button.is-primary 已关注
    section.section
      div.container
        h5.title.is-5.bold 赛事章程
        div.columns.race-rules
          div.column
            label 比赛时间:
            span 2016-12-16
        div.columns.race-rules
          div.column
            label 比赛地点:
            span 上海市黄浦区
        div.columns.race-rules
          div.column
            label 报名时间:
            span 2016年08月29日开始-2016年09月02日结束
        div.columns.race-rules
          div.column
            label 报名组别:
            span 全程马拉松／半程马拉松／10公里／健身跑
        div.columns.race-rules
          div.column
            label 官方网站:
            span http://www.shmarathon.com
        div.columns.race-rules
          div.column
            label 报名组别:
            span 全程马拉松／半程马拉松／10公里／健身跑
        div.columns.race-rules
          div.column
            label 官方网站:
            span http://www.shmarathon.com
  footer
    div.container
      nav.level
        div.level-item
          router-link.button.irs-red(to="/race_groups") 一键报名
          a.button 成绩照片认领

</template>

<script>
export default {
  data: () => {
    return { name: 'world' }
  },
   head: {
    title: 'Home page 🚀'
  }
}
</script>

<style lang="stylus">
  .button.irs-red:hover, .button.irs-red:focus, .button.irs-red.is-active, .button.irs-red
    background-color: #dd2f00
    border-color: transparent
    color: white

  .irs
    background-color:#ffffff
    display: flex
    min-height: 100vh
    flex-direction: column
    div.irs-content
      flex: 1 0 auto
    footer
      flex: none
      padding: 10px 0
      background-color: #cccccc
      a.button
        margin-left: 10px
  .race-rules
    label
      min-width: 70px
      text-align: left
      display: inline-block
    span
      display: inline-block
    color: #999999
  .bold
    font-weight: bold
  .race-header
    background-color: rgba(0, 0, 0, 0)
    background-repeat: no-repeat
    background-size: cover
    background-position: center center
    position: relative
    min-height: 300px;

    h1
      text-align: center
      color: #ffffff
      position: absolute
      width: 100%
      left: 0
      bottom: 50px

  .stars-container
    text-align: center
    padding: 10px 0
    div.stars
      display: inline-block
      margin-right: 10px
      img
        display: inline-block
        margin-right: 2px

    div.join_count
      display: inline-block
  
  .race-center-buttons
    a.button + a.button
      margin-left: 10px

</style>