<template lang="pug">
div.team_container
  div.container
    h2.subtitle.is-5 海南马拉松-全程
    hr
    div.requirements
      |{报名要求}{报名要求}{报名要求}{报名要求}{报名要求} 
      br
      a.button.is-link(@click.stop.prevent="showFee") 显示报名费用
    hr
    div.control.is-horizontal
      div.control-label
        label.label 团队名称
      p.control.is-expanded
        input.input(type="text", placeholder="请输入")
  section.section
    div.container
      team-member(v-for="(member, index) in members", :member="member", :index_number="index", v-on:edit="edit" v-on:remove="remove")
  member-form(@form_cancelled="formCancelled", @form_saved="formSaved", v-if="showForm")
  div.container
    button.button.is-white(@click.stop.prevent="showForm = true") +增加参赛者
  div(:class="['modal', 'animated', modalVisible ? 'is-active' : '']", :transition="transition", transition-mode="in-out")
    div.modal-background(@click="closeModal")
    div.modal-card
      header.modal-card-head
        p.modal-card-title 付款明细
      section.modal-card-body
        table.table
          tbody
            tr
              td(colspan="2")
                h6.subtitle.is-6 报名费
            tr
              td
                span 全程
              td.right
                span.price ¥100/人 x 3
            tr
              td(colspan="2")
                h6.subtitle.is-6 附加服务费
            tr
              td
                span 酒店
              td.right
                span.price ¥1600/间 x 2
            tr
              td
                span 优惠券
              td.right
                span.price -¥40
            tr
              td
                span 总计
              td.right
                span.price.total ¥3260
            
      
      footer.modal-card-foot
</template>

<script>
import MemberForm from '../components/team_member_form.vue'
import TeamMember from '../components/team_member.vue'
export default {
  components: {MemberForm, TeamMember},
  data: () => {
    return {
      members: [ 
        {id: 1, name: "龙套", phone: "18801966666", email: "longtao@cc.tv"},
        {id: 2, name: "龙套2", phone: "18801966667", email: "longtao2@cc.tv"},
      ],
      showForm: false,
      modalVisible: false,
      transition: "zoom"
    }
  },
  head: {
    title: '创建团队'
  },
  created() {
  },
  methods: {
    formCancelled: function() {
      this.showForm = false
    },
    formSaved: function(){
      alert("form saved")
    },
    remove: function(member) {
      console.log(member.email, member.name)
    },
    edit: function(member) {
      console.log(member.name)  
    },
    showFee: function() {
      this.modalVisible = true
    },
    closeModal: function() {
      this.modalVisible = false
    }
  }
}
</script>

<style lang="stylus">
.team_container
  section.section 
    background-color: transparent
  min-height: 100vh
  background-color: #eeeeee
  .modal-card-head, .modal-card-foot
    background-color: #ffffff !important
    border: none !important
  .modal-card-title
    text-align: center
  .modal-card-body
    table.table
      width: 60%
      margin: 0 auto 20px 
      tr 
        td 
          border-width: 0
          &.right
            text-align: right
          span.price
            width: 100px
            display: inline-block
            text-align: right
            &.total
              font-weight: bold
  h2 
    background-color: #ffffff
  hr
    margin: 0
  .title:not(:last-child), .subtitle:not(:last-child)
    margin-bottom: 0
    padding: 10px 0 10px 10px
  div.requirements
    padding: 10px 0 10px 10px
  button.button.is-white
    display: inline-block
    width: 100%
    text-align: center
    height: 46px
    background-color: #ffffff
    margin-top: 30px
  .control.is-horizontal
    display: -ms-flexbox
    display: flex
    background-color: #ffffff
    padding: 5px 0 5px 10px
  div.control-label
    -ms-flex-preferred-size: 0
    flex-basis: 0
    -ms-flex-positive: 1
    flex-grow: 1
    -ms-flex-negative: 0
    flex-shrink: 0
    margin-right: 20px
    padding-top: 7px
    text-align: right
    label
      font-weight: normal
  .control.is-horizontal > .control 
    display: -ms-flexbox
    display: flex
    -ms-flex-preferred-size: 0
    flex-basis: 0
    -ms-flex-positive: 4
    flex-grow: 4
    -ms-flex-negative: 1
    flex-shrink: 1
    input 
      border: none
      box-shadow: none
  .control.is-horizontal > p.control 
    display: block;
  .control:not(:last-child)
    margin-bottom: 0

@media (max-width: 768px) 
  .team_container
    .modal-content, .modal-card
      background-color: #ffffff
    .modal-card-body
      table.table
        width: 90%
</style>