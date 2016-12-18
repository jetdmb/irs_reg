<template lang="pug">
div.team-member-container.card.is-fullwidth
  header.card-header
    h3.subtitle.is-6.card-header-title 参赛者 {{ index_number + 1 }}
    div.card-header-right
      a.button.is-link(@click.stop.prevent="remove") 删除
      a.button.is-link(@click.stop.prevent="edit") 编辑
  div.card-body
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
        
</template>

<script>
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
  .team-member-container
    margin: 20px 0
    &:first-child
      margin-top: 10px
    &.coupon
      header.card-header
        padding: 20px 15px 10px 5px  
      h3.title.is-6
        color: #313131
        font-weight: 600
      div.card-body
        padding: 15px 15px 0 5px
        div.table-container
          margin: 0 15px 20px 10px
          table
            td
              span.coupon-txt
                font-weight: 600
              &:nth-child(2)
                text-align: right
      div.card-footer
        .card-footer-right
          span
            color: #ff5000
            font-size: 1.5rem
    border-radius: 6px
    background-color: #ffffff
    h3.subtitle.is-6
      color: #999999
    header.card-header
      padding: 0 15px 0 5px
    div.card-body
      padding: 15px 15px 25px 5px
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