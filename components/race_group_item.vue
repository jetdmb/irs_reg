<template lang="pug">
  tr.race_group_item
    td
      div.item-txt
        label {{group.name}}
        a.group_intro(href="#", v-show="!show_full_intro" v-on:click.stop.prevent="toggleIntro") {{group.short_intro}}
        span.group_intro_full(v-show="show_full_intro", v-on:click="toggleIntro") {{group.full_intro}}
    td.center
      div.item-price 免费
    td.center 
      div.item-link 
        router-link.button.irs-red(to="/form", v-if="!group.closed") 报名
        span(v-else) 报名已经关闭
</template>

<script>
export default {
  props: ['group'], 
  data: () => {
    return {
      show_full_intro: false
    };
  },
  methods: {
    toggleIntro: function() {
      this.show_full_intro  = !this.show_full_intro
    }
  }
}
</script>

<style lang="stylus">
tr.race_group_item
  td
    label
      display: block
    span
      display: block
      cursor: pointer

    a.group_intro
      display: block
      color: #999999
    
    div.item-link
      span 
        color: #ABABAB
      .button
        min-width: 50px
        border-radius: 16px
    div.item-price, div.item-link 
      width: 120px
      display:inline-block;
    div.item-txt
      width: 450px

@media (max-width: 768px) 
  tr.race_group_item
    td
      div.item-price, div.item-link 
        width: 120px
      div.item-txt
        width: 360px
        
@media (max-width: 414px) 
  tr.race_group_item
    td
      div.item-price, div.item-link 
        width: 50px
      div.item-txt
        width: 160px
</style>