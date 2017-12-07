<template>
  <div id="app">
    <div class="head">
      <h1 class="text">区块链浏览器</h1>
      <ul>
        <li class="nav">
          <router-link to="/home">首页</router-link>
        </li>
        <li class="nav">
          <router-link to="/block">区块公示</router-link>
        </li>
        <li class="nav">
          <router-link to="/card">存证公示</router-link>
        </li>
        <li class="nav">
          <router-link to="/account">账户身份</router-link>
        </li>
      </ul>
    </div>
    <keep-alive>
      <router-view :apidata="apidata"></router-view>
    </keep-alive>
  </div>
</template>

<script type="text/ecmascript-6">
import axios from "axios";
import "./common/stylus/index.styl";
const ERR_OK = 0;

export default {
  name: "app",
  data() {
    return {
      apidata: {}
    };
  },
  components: {},
  created() {
    axios
      .get("/api")
      .then(response => {
        response = response.data;
        if (response.errno === ERR_OK) {
          this.apidata = response.data;
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import './common/stylus/mixin.styl';

.head {
  padding: 0px 30px;
  width: 1366px;
  margin: 0 auto;

  .text, ul, .nav {
    display: inline-block;
  }

  .text {
    background: url('./components/home/star24_on@2x.png') no-repeat left top;
    padding-left: 20px;
    margin-right: 60px;
    font-size: 20px;
  }

  .nav {
    height: 50px;

    & > a {
      display: inline-block;
      padding: 15px 10px;

      &.router-link-active {
        color: #008080;
        border-bottom: 2px solid #008080;
      }
    }
  }
}
</style>
