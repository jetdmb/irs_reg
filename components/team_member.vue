<template lang="pug">
div.team_member_container.box
  div.media-content
    div.content
      h6.subtitle.is-6 参赛者 {{ index_number + 1 }}
      div.columns
        div.column
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
        div.column
          nav.level
            div.level-item.has-text-centered
              a.button.is-link(@click.stop.prevent="remove") 删除
              a.button.is-link(@click.stop.prevent="edit") 编辑
</template>

<script>
import MemberForm from '../components/team_member_form.vue'
export default {
  props: ['index_number', 'member'],
  data: () => {
    return {
    }
  },
  methods: {
    remove: function() {
      this.$emit("remove", this.member)
    },
    edit: function(){
      this.$emit("edit", this.member)
    }
  }
}
</script>

<style lang="stylus">
  .team_member_container
    ul
      list-style: none
      margin: 0
      padding: 0
      li 
        list-style-type: none
        padding: 2px 10px
        label
          display: inline-block
          margin-right: 10px
        span
          display: inline-block
    a.button.is-link
      text-decoration: none
</style>