<template>
  <div id="app">
    <h1 class="text">区块链浏览器</h1>
    <router-link to="/home">首页</router-link>
    <router-link to="/block">区块公示</router-link>
    <router-link to="/card">存证公示</router-link>
    <router-link to="/account">账户身份</router-link>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script type="text/ecmascript-6">
import axios from "axios";
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
</style>
