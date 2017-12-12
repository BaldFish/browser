<template>
  <div class="search">

    <div class="search_box">
      <select name="" class="search_select">
        <option value="block_height">区块高度</option>
        <option value="block_hash">区块哈希</option>
        <option value="trade_hash">交易哈希</option>
      </select>
      <input class="search_ipt" type="text" placeholder="请输入查询条件">
      <button class="btn">搜索</button>
    </div>

    <div class="content">
      <table>
        <caption>
          <p>查询时间：2017年12月12日 13:30:46</p>
        </caption>
        <colgroup>
          <col class="col1">
          <col class="col2">
        </colgroup>
        <tr>
          <th colspan="2">区块#21</th>
        </tr>
        <tr>
          <td>交易笔数</td>
          <td></td>
        </tr>
        <tr>
          <td>存证记录个数</td>
          <td></td>
        </tr>
        <tr>
          <td>高度</td>
          <td></td>
        </tr>
        <tr>
          <td>区块生成时间</td>
          <td></td>
        </tr>
        <tr>
          <td>版本</td>
          <td></td>
        </tr>
        <tr>
          <td>哈希值</td>
          <td></td>
        </tr>
        <tr>
          <td>上一区块</td>
          <td></td>
        </tr>
      </table>
    </div>
  </div>
</template>


<script type="text/ecmascript-6">
export default {};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.search_box {
  box-sizing: border-box;
  text-align: center;
  padding: 20px;

  .search_ipt, .search_select, .btn {
    outline: none;
    box-sizing: border-box;
    display: inline-block;
    border-radius: 5px;
    height: 40px;
    line-height: 40px;
    background: #c0c0c0;
    margin-right: 10px;
    cursor: pointer;
    border: none;
    font-size: 14px;
  }

  .search_ipt {
    padding: 0 10px;
    width: 40%;
  }

  .btn:active {
    background-color: #8882a3;
  }
}

.content {
  table {
    margin: 0 auto;
    text-align: center;
  }

  th, td {
    border: 1px solid green;
    padding: 10px;
  }

  caption {
    text-align: left;
    margin: 20px 0;
  }

  .col2 {
    width: 400px;
  }
}
</style>