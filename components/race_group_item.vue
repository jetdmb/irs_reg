<template lang="pug">
  tr.race_group_item
    td
      label {{group.name}}
      a.group_intro(href="#", v-show="!show_full_intro" v-on:click.stop.prevent="toggleIntro") {{group.short_intro}}
      span.group_intro_full(v-show="show_full_intro", v-on:click="toggleIntro") {{group.full_intro}}
    td 免费
    td 
      router-link.button.is-primary(to="/team") 报名
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

    a.group_intro
      display: block
      color: #999999

@media (min-width: 768px) 
  tr.race_group_item
    td
      label
        width: 450px
      span
        width: 450px
</style>