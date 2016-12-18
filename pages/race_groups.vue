<template lang="pug">
div.race_groups_container.irs-page-container
  section.hero
    div.hero-head
      div.container
        img.race-intro(src="/images/race_img.jpg" alt="race")
    div.hero-body
      div.container 
        h2.title.is-4 北京马拉松
        div.row-container
          label 时间:
          span 2017-01-01 08:00
        div.row-container
          label 地点:
          span 江苏省 南京市 奥林匹克博物馆
    div.hero-foot
      div.container
        p.control.has-addons.head-search-box.has-text-centered
          input.input.is-expanded.irs-input(type="text", placeholder="请输入报名时填写的证件号码")
          a.button.irs-red 报名查询

  section.section
    div.container
      table.table.is-striped
        thead
          tr
            th 组别
            th.center 费用
            th.center 状态
        tbody
          tr(v-for="group in groups", is="race-group-item", v-bind:group="group")

  section.section
    div.container.intro
      h2.title.is-4  北京马拉松
      p
        | 北京马拉松创办于1981年, 也是国内第一马拉松赛事.近几年路线确定为从天安门广场出发，跑到奥森公园结束. 北京马拉松是中国田径协会市场化程度最高, 规模最大, 最具代表性的单项赛事 http://www.bei-jing-marathon.com/
</template>

<script>
import RaceGroupItem from '../components/race_group_item.vue'
export default {
  components: {RaceGroupItem},
  data: () => {
    return {
      show_full_intro: false,
      groups: [{
        name: "10公里竞技跑(教工)",
        short_intro: "(组别说明文字)",
        full_intro: "组别说明文字非常长啊非常长, 山高水长, 源远流长, 到底有多长谁也不知道",
      },{
        name: "10公里竞技跑(学生)",
        short_intro: "(组别说明文字)",
        full_intro: "组别说明文字非常长啊非常长, 山高水长, 源远流长, 到底有多长谁也不知道",
      },{
        name: "10公里竞技跑(校友)",
        short_intro: "(组别说明文字)",
        full_intro: "组别说明文字非常长啊非常长, 山高水长, 源远流长, 到底有多长谁也不知道",
      },{
        name: "10公里竞技跑(校外-特邀合作伙伴)",
        short_intro: "(组别说明文字)",
        full_intro: "组别说明文字非常长啊非常长, 山高水长, 源远流长, 到底有多长谁也不知道",
        closed: true
      },{
        name: "3.3公里健康跑(教工)",
        short_intro: "(组别说明文字)",
        full_intro: "组别说明文字非常长啊非常长, 山高水长, 源远流长, 到底有多长谁也不知道",
      },{
        name: "3.3公里健康跑(学生)",
        short_intro: "(组别说明文字)",
        full_intro: "组别说明文字非常长啊非常长, 山高水长, 源远流长, 到底有多长谁也不知道",
      }]
    };
  },
  methods: {
      toggleIntro: function(group) {
        group.show_full_intro  = !group.show_full_intro
      }
  },
  head: {
    title: '赛事名称'
  }
}
</script>

<style lang="stylus">
.race_groups_container
  table
    thead
      th
        font-weight: bold
        color: #000000
        &.center
          text-align: center
    td
      label
        display: block
      a.group_intro
        display: block
        color: #999999
      &.center
        text-align: center
  section.hero
    background-color: #ffffff
    .hero-head
      div.container
        img.race-intro
          width: 100%
    .hero-body
      padding: 0
      div.container 
        padding: 15px 15px
        border-bottom: 1px solid #f2f2f2
        h2.title
          margin-bottom: 8px
          padding: 0
        div.row-container
          &:not(:last-child)
            margin-bottom: 8px
          label
            display: inline-block
            min-width: 40px
          span
            display: inline-block
    .hero-foot
      padding: 0
      div.container 
        padding: 0 15px
  
  h1.title
    margin-top: 10px
  
  section.section
    margin-top: 20px
    padding: 20px 0
    div.container.intro
      padding: 0 15px
      .title:not(:last-child), .subtitle:not(:last-child)
        margin-bottom: 10px

p.head-search-box
  margin: 20px 0
  
@media (min-width: 768px) 
  .head-search-box
    max-width: 300px

</style>