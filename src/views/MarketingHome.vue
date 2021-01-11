<template>
  <div id="MainHome">
    <home-header :data="headerMenus" :type="1"></home-header>
    <div id="marketing-content">
      <div class="section1">
        <p class="title">MARKETING</p>
        <p class="desc">Template by w3.css</p>
        <div class="indicator">
          <img :src="S1_IMAGES[index].src"/>
          <div class="footer">
            <el-row>
              <el-col :span="4">
                <el-button circle icon="el-icon-caret-left" @click="changeImage(--count)"
                           style="float: left;"/>
              </el-col>
              <el-col :span="16">
                <div class="minibox__wrapper">
                  <p class="minibox" v-for="item in IDimages" :key="item.id"
                     :class="{'is-active': index === (item.id - 1)}"/>
                </div>
              </el-col>
              <el-col :span="4">
                <el-button circle icon="el-icon-caret-right" @click="changeImage(++count)"
                           style="float: right;"/>
              </el-col>
            </el-row>
          </div>
        </div>
      </div>
      <div class="section2">
        <div class="s2-title"><p>What We Offer</p></div>
        <div class="desc-box">
          <div :style="{'background-color': item.bgcolor, 'color': item.color}"
               v-for="item in S2_DATA" :key="item.id">
            <p class="title">{{item.title}}</p>
            <p class="desc">{{item.content}}</p>
          </div>
        </div>
        <p id="Plans" class="s2-sub-title">Pricing Plans<br>
          <span>Choose a pricing plan that fits your needs.</span></p>
        <div class="price-box">
          <div class="card"
               v-for="item in S2_PRICE_DATA" :key="item.id">
            <p class="card-title">{{item.title}}</p>
            <p><strong>{{item.storage}}</strong> Storage</p>
            <p><strong>{{item.emails}}</strong> Emails</p>
            <p><strong>{{item.domains}}</strong> Domains</p>
            <p><strong>{{item.support}}</strong> Support</p>
            <p style="padding: 40px;">
              <strong style="font-size: 30px; letter-spacing: 4px;">${{item.price}}</strong> <br/>
              per {{item.standard}}
            </p>
            <p class="signUp">
              <button>Sign Up</button>
            </p>
          </div>
        </div>
      </div>
      <div id="About" class="section3">
        <div class="s3-title"><p>Who We Are</p></div>
        <div class="team">
          <div class="card" v-for="item in S3_DATA" :key="item.id">
            <img :src="item.src">
            <p style="font-size: 20px; font-weight: 600">{{item.name}}</p>
            <p style="font-size: 14px; color: #a5a5a5;">{{item.role}}</p>
            <p style="font-size: 14px;">{{item.content}}</p>
            <div class="contact-btn">
              <button>Contact</button>
            </div>
          </div>
        </div>
      </div>
      <div id="Contact" class="section4">
        <div class="s4-title"><p>Contact Us</p></div>
        <div class="input-form">
          Name<br/>
          <input />
          Email<br/>
          <input />
          Subject<br/>
          <input />
          Message<br/>
          <input /> <br/>
          <button>Send</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import HomeHeader from "../components/HomeHeader";

  const headerMenus = [{
    id: 1, title: 'Home', a: '#',
  }, {
    id: 2, title: 'Plans', a: '#Plans',
  }, {
    id: 3, title: 'About', a: '#About',
  }, {
    id: 4, title: 'Contact', a: '#Contact',
  },]

  const S1_IMAGES = [{
    id: 1, src: require('../assets/images/Marketing/indicator1.jpg'),
  }, {
    id: 2, src: require('../assets/images/Marketing/indicator2.jpg'),
  }, {
    id: 3, src: require('../assets/images/Marketing/indicator3.jpg'),
  },]

  const S2_DATA = [{
    id: 1,
    title: 'Design',
    content: 'Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.',
    bgcolor: '#eeeeee',
    color: '#000000',
  }, {
    id: 2,
    title: 'Branding',
    content: 'Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.',
    bgcolor: '#c4c4c4',
    color: '#000000',
  }, {
    id: 3,
    title: 'Consultation',
    content: 'Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.',
    bgcolor: '#575757',
    color: '#ffffff',
  }, {
    id: 4,
    title: 'Promises',
    content: 'Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.',
    bgcolor: '#323232',
    color: '#ffffff',
  },]

  const S2_PRICE_DATA = [{
    id: 1, title: 'Basic', storage: '10GB', emails: 10, domains: 10, support: 'Endless', price: 10, standard: 'month',
  }, {
    id: 2, title: 'Pro', storage: '25GB', emails: 25, domains: 25, support: 'Endless', price: 25, standard: 'month',
  }, {
    id: 1, title: 'Premium', storage: '50GB', emails: 50, domains: 50, support: 'Endless', price: 50, standard: 'month',
  },]

  const S3_DATA = [{
    id: 1,
    src: require('../assets/images/Marketing/team1.jpg'),
    name: 'Jane Doe',
    role: 'CEO & Founder',
    content: 'Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.',
  }, {
    id: 2,
    src: require('../assets/images/Marketing/team2.jpg'),
    name: 'Mike Ross',
    role: 'Art Director',
    content: 'Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.',
  }, {
    id: 3,
    src: require('../assets/images/Marketing/team3.jpg'),
    name: 'John Doe',
    role: 'Designer',
    content: 'Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.',
  },]

  export default {
    name: 'Home',
    components: {HomeHeader,},
    data() {
      return {
        headerMenus, S1_IMAGES,
        S2_DATA, S2_PRICE_DATA, S3_DATA,
        index: 0, count: 0,
      }
    },
    methods: {
      changeImage(value) {
        if (value < 0) {
          this.count = 2
          value = 2
        }
        this.index = value % 3
      },
    }
  }
</script>
