<template>
  <div id="MainHome">
    <home-header :data="headerMenus" :type="1"></home-header>
    <div id="marketing-content">
      <div class="section1">
        <p class="title">MARKETING</p>
        <p class="desc">Template by w3.css</p>
        <div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import HomeHeader from "../components/HomeHeader";

  const headerMenus = [{
    id: 1, title: 'Home',
  }, {
    id: 2, title: 'Plans',
  }, {
    id: 3, title: 'About',
  }, {
    id: 4, title: 'Contact',
  },]

  export default {
    name: 'Home',
    components: {HomeHeader,},
    data() {
      return {
        headerMenus,
      }
    }
  }
</script>
