<template>
  <div id="app">
    <h1 class="text">区块链浏览器</h1>
    <div class="nav">
      <router-link to="/home">首页</router-link>
    </div>
    <div class="nav">
      <router-link to="/block">区块公示</router-link>
    </div>
    <div class="nav">
      <router-link to="/card">存证公示</router-link>
    </div>
    <div class="nav">
      <router-link to="/account">账户身份</router-link>
    </div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script type="text/ecmascript-6">
import axios from "axios";
import "./common/stylus/index.styl";
export default {
  name: "app",
  data() {
    return {};
  },
  components: {},
  created() {
    axios
      .get("/api")
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
h1 {
  display: inline-block;
}

.nav {
  display: inline-block;
}
</style>
