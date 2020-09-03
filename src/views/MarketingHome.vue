<template>
  <div id="MainHome">
    <home-header :data="headerMenus" :type="1"></home-header>
    <div id="marketing-content">
      <div class="section1">
        <p class="title">MARKETING</p>
        <p class="desc">Template by w3.css</p>
        <div class="indicator">
          <img :src="IDimages[0].src" />
          <div class="footer">
            <!--            <i class="el-icon-caret-left"></i>-->
          </div>
        </div>
      </div>
      <div class="section2">

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

  const IDimages = [{
    id: 1, src: require('../assets/images/Marketing/indicator1.jpg'),
  },{
    id: 2, src: require('../assets/images/Marketing/indicator2.jpg'),
  },{
    id: 3, src: require('../assets/images/Marketing/indicator3.jpg'),
  },]

  export default {
    name: 'Home',
    components: {HomeHeader,},
    data() {
      return {
        headerMenus, IDimages,
      }
    }
  }
</script>
