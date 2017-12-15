<template>
  <div class="search">

    <div class="search_box">
      <select name="" class="search_select" v-model="searchType">
        <option value="block_height">区块高度</option>
        <option value="block_hash">区块哈希</option>
        <option value="trade_hash">交易哈希</option>
      </select>
      <input class="search_ipt" type="text" placeholder="请输入查询条件" v-model="search_content">
      <button class="btn" @click.prevent="search">搜索</button>
    </div>
    <div class="content">
      <table v-if="searchType==='block_height'">
        <caption>
          <p>查询时间：{{time}}</p>
        </caption>
        <colgroup>
          <col class="col1">
          <col class="col2">
        </colgroup>
        <tr>
          <th colspan="2">区块{{getBlockHeight.number}}</th>
        </tr>
        <tr>
          <td>交易笔数</td>
          <td>{{getBlockHeight.transactions.length}}</td>
        </tr>
        <tr>
          <td>存证记录个数</td>
          <td>{{getBlockHeight.transactions.length}}</td>
        </tr>
        <tr>
          <td>高度</td>
          <td>{{getBlockHeight.number}}</td>
        </tr>
        <tr>
          <td>区块生成时间</td>
          <td>{{getBlockHeight.timestamp}}</td>
        </tr>
        <tr>
          <td>版本</td>
          <td>1.0</td>
        </tr>
        <tr>
          <td>哈希值</td>
          <td>{{getBlockHeight.hash}}</td>
        </tr>
        <tr>
          <td>上一区块</td>
          <td>{{getBlockHeight.parentHash}}</td>
        </tr>
      </table>

      <table v-else-if="searchType==='block_hash'">
        <caption>
          <p>查询时间：{{time}}</p>
        </caption>
        <colgroup>
          <col class="col1">
          <col class="col2">
        </colgroup>
        <tr>
          <th colspan="2">区块{{getBlockHash.number}}</th>
        </tr>
        <tr>
          <td>交易笔数</td>
          <td>{{getBlockHash.transactions.length}}</td>
        </tr>
        <tr>
          <td>存证记录个数</td>
          <td>{{getBlockHash.transactions.length}}</td>
        </tr>
        <tr>
          <td>高度</td>
          <td>{{getBlockHash.number}}</td>
        </tr>
        <tr>
          <td>区块生成时间</td>
          <td>{{getBlockHash.timestamp}}</td>
        </tr>
        <tr>
          <td>版本</td>
          <td>1.0</td>
        </tr>
        <tr>
          <td>哈希值</td>
          <td>{{getBlockHash.hash}}</td>
        </tr>
        <tr>
          <td>上一区块</td>
          <td>{{getBlockHash.parentHash}}</td>
        </tr>
      </table>

      <table v-else>
        <caption>
          <h3>区块链交易鉴证信息</h3>
          <p>鉴证时间：{{time}}</p>
        </caption>
        <colgroup>
          <col class="col1">
          <col class="col2">
        </colgroup>
        <tr>
          <td>交易哈希</td>
          <td>{{getTradeHash.hash}}</td>
        </tr>
        <tr>
          <td>交易时间</td>
          <td>{{getTradeHash.timestamp}}</td>
        </tr>
        <tr>
          <td>投保时间</td>
          <td>{{getTradeHash.timestamp}}</td>
        </tr>
        <tr>
          <td>承保公司</td>
          <td>{{getTradeHash.timestamp}}</td>
        </tr>
        <tr>
          <td>保险类型</td>
          <td>1.0</td>
        </tr>
        <tr>
          <td>保险单号</td>
          <td>{{getTradeHash.hash}}</td>
        </tr>
        <tr>
          <td>保险期间</td>
          <td>{{getTradeHash.parentHash}}</td>
        </tr>
        <tr>
          <td>被保险人</td>
          <td>{{getTradeHash.parentHash}}</td>
        </tr>
        <tr>
          <td>证件类型</td>
          <td>{{getTradeHash.parentHash}}</td>
        </tr>
        <tr>
          <td>证件号码</td>
          <td>{{getTradeHash.parentHash}}</td>
        </tr>
        <tr>
          <td>承保险种</td>
          <td>{{getTradeHash.parentHash}}</td>
        </tr>
        <tr>
          <td>车牌号</td>
          <td>{{getTradeHash.parentHash}}</td>
        </tr>
        <tr>
          <td>车主</td>
          <td>{{getTradeHash.parentHash}}</td>
        </tr>
        <tr>
          <td>车辆型号</td>
          <td>{{getTradeHash.parentHash}}</td>
        </tr>
        <tr>
          <td>初登日期</td>
          <td>{{getTradeHash.parentHash}}</td>
        </tr>
        <tr>
          <td>车辆识别代号</td>
          <td>{{getTradeHash.parentHash}}</td>
        </tr>
        <tr>
          <td>发动机号</td>
          <td>{{getTradeHash.parentHash}}</td>
        </tr>
        <tr>
          <td>机动车种类</td>
          <td>{{getTradeHash.parentHash}}</td>
        </tr>
        <tr>
          <td>投保渠道</td>
          <td>{{getTradeHash.parentHash}}</td>
        </tr>
        <tr>
          <td>销售机构</td>
          <td>{{getTradeHash.parentHash}}</td>
        </tr>
        <tr>
          <td>营业员</td>
          <td>{{getTradeHash.parentHash}}</td>
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
      time: "",
      searchType: "block_height",
      search_content: "",
      getBlockHeight: {
        transactions: []
      },
      getBlockHash: {
        transactions: []
      },
      getTradeHash: {}
    };
  },
  methods: {
    getSeachTime() {
      var time = new Date();
      time = this.getFormatDate(time);
      return time;
    },
    search() {
      if (this.searchType === "block_height") {
        this.time = this.$options.methods.getSeachTime();
        this.getBlockHeight = _.find(this.apidata.getNewBlock, item => {
          return item.number === this.search_content;
        });
        if (!this.getBlockHeight) {
          this.getBlockHeight = {
            number: "",
            hash: "",
            parentHash: "",
            nonce: "",
            sha3Uncles: "",
            logsBloom: "",
            transactionsRoot: "",
            stateRoot: "",
            miner: "",
            difficulty: "",
            totalDifficulty: "",
            extraData: "",
            size: "",
            gasLimit: "",
            gasUsed: "",
            timestamp: "",
            transactions: "",
            uncles: ""
          };
        }
      } else if (this.searchType === "block_hash") {
        this.time = this.$options.methods.getSeachTime();
        this.getBlockHash = _.find(this.apidata.getNewBlock, item => {
          return item.hash === this.search_content;
        });
        if (!this.getBlockHash) {
          this.getBlockHash = {
            number: "",
            hash: "",
            parentHash: "",
            nonce: "",
            sha3Uncles: "",
            logsBloom: "",
            transactionsRoot: "",
            stateRoot: "",
            miner: "",
            difficulty: "",
            totalDifficulty: "",
            extraData: "",
            size: "",
            gasLimit: "",
            gasUsed: "",
            timestamp: "",
            transactions: "",
            uncles: ""
          };
        }
      } else {
        this.time = this.$options.methods.getSeachTime();
        this.getTradeHash = _.find(this.apidata.cardList, item => {
          return item.hash === this.search_content;
        });
        if (!this.getTradeHash) {
          this.getTradeHash = {
            hash: "",
            nonce: "",
            blockHash: "",
            blockNumber: "",
            timestamp: "",
            transactionIndex: "",
            partner: "",
            from: "",
            to: "",
            value: "",
            gas: "",
            gasPrice: "",
            input: ""
          };
        }
      }
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