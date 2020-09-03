<template>
  <div id="header">
    <div v-if="type === 1">
      <div class="home-header type1" @click="menuClick($event)"
           :style="{'width' : (100 / menus.length) + '%'}"
           :key="item.id" v-for="item in menus">
        {{item.title}}
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'HomeHeader',
    props: {
      data: {
        type: Array,
      },
      type: {
        type: Number,
      }
    },
    data() {
      return {
        menus: this.data, isClick: false,
      }
    },
    methods: {
      menuClick(e) {
        const el = document.getElementsByClassName('home-header is-active')
        if (el.length > 0) {
          el[0].classList.remove('is-active')
        }
        e.target.classList.add('is-active')
      }
    }
  }
</script>
