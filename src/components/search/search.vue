<template>
  <div class="search">

    <div class="search_box">
      <select name="" class="search_select">
        <option value="block_height">区块高度</option>
        <option value="block_hash">区块哈希</option>
        <option value="trade_hash">交易哈希</option>
      </select>
      <input class="search_ipt" type="text" placeholder="请输入查询条件" v-model="search_content">
      <button class="btn" @click.prevent="search">搜索</button>
    </div>

    <div class="content">
      <table>
        <caption>
          <p>查询时间：2017-12-12 13:30:46</p>
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
          <td>高度{{search_content}}</td>
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
import _ from "lodash";
export default {
  props: {
    apidata: {
      type: Object
    }
  },
  data() {
    return {
      search_content: "",
      getNewBlock: {}
    };
  },
  methods: {
    search() {
      console.log(this.search_content);
      this.getNewBlock = _.find(this.apidata.getNewBlock, item => {
        return item.blockNumber === this.search_content;
      });
      console.log(this.getNewBlock);
    },
    getFormatDate(val) {
      var nowDate = new Date(val);
      var year = nowDate.getFullYear();
      var month =
        nowDate.getMonth() + 1 < 10
          ? "0" + (nowDate.getMonth() + 1)
          : nowDate.getMonth() + 1;
      var date =
        nowDate.getDate() < 10 ? "0" + nowDate.getDate() : nowDate.getDate();
      var hour =
        nowDate.getHours() < 10 ? "0" + nowDate.getHours() : nowDate.getHours();
      var minute =
        nowDate.getMinutes() < 10
          ? "0" + nowDate.getMinutes()
          : nowDate.getMinutes();
      var second =
        nowDate.getSeconds() < 10
          ? "0" + nowDate.getSeconds()
          : nowDate.getSeconds();
      return (
        year +
        "-" +
        month +
        "-" +
        date +
        " " +
        hour +
        ":" +
        minute +
        ":" +
        second
      );
    }
  }
};
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