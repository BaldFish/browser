<template>
  <div class="home">
    <div class="serch">
      <input type="text" >
      <button>搜索</button>
    </div>

    <div class="">
      <ul class="">
        <li>
          当前区块高度<span>258837</span>
        </li>
        <li>
          记帐节点数<span>4</span>
        </li>
        <li>
          存证TX条目数量<span>2</span>
        </li>
      </ul>
    </div>

    <div class="">
      <div class="">
        <h2>最新区块</h2>
        <span class="">查看全部</span>
      </div>
      <div class="">
        <table class=''>
          <thead>
            <tr>
              <th>区块高度</th>
              <th>出块时间</th>
              <th>出块节点名称</th>
              <th>存证TX条目数量</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1111111111111111111</td>
              <td>2222222222222222222</td>
              <td>3333333333333333333</td>
              <td>4444444444444444444</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="">
      <p>2017 元征区块链技术研究院.京ICP备88888888号-8</p>
    </div>
    
  </div>
</template>


<script type="text/ecmascript-6">
export default {};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.home {
  .serch {
    padding: 5px;

    input {
      padding: 5px;
      border: 1px solid blue;
    }
  }
}
</style>