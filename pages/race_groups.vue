<template lang="pug">
div.race_groups_container
  section.hero
    div.hero-head
      div.container
        h1.title.is-4.
          赛事介绍页面
    div.hero-body
      div.race-intro
    div.hero-foot
      div.container
        p.control.has-addons.head-search-box
          input.input.is-expanded(type="text", placeholder="请输入报名时填写的证件号码")
          a.button 报名查询
  nav.nav
    div.container
      a.nav-item.is-tab.is-active 报名组别
  section.section
    div.container
      table.table.is-bordered
        thead
          tr
            th 组别
            th 费用
            th 状态
        tbody
          tr(v-for="group in groups", is="race-group-item", v-bind:group="group")
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
    td
      label
        display: block
      a.group_intro
        display: block
        color: #999999
  section.hero
    background-color: #cccccc
  h1.title
    margin-top: 10px
  nav.nav
    a.nav-item.is-active 
      color: #333333

p.head-search-box
  margin-bottom: 20px
  
@media (min-width: 768px) 
  .head-search-box
    max-width: 300px

</style>