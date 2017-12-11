<template>
  <div class="home">
    <div class="container">
      <div class="container_box">
        <div class="search_box">
          <div>
            <select name="" class="search_select">
              <option value="trade_hash">交易哈希</option>
              <option value="block_hash">区块哈希</option>
              <option value="block_height">区块高度</option>
            </select>
            <input class="search" type="text" placeholder="请输入查询条件">
            <button class="btn">搜索</button>
          </div>
        </div>

        <div class="count_box">
          <ul class="count">
            <li>
              当前区块高度
              <span>{{parseInt(apidata.currentHight)}}</span>
            </li>
            <li>
              记帐节点数
              <span>{{parseInt(apidata.nodeNumber)}}</span>
            </li>
            <li>
              存证TX条目数量
              <span>{{parseInt(apidata.cardNunber)}}</span>
            </li>
          </ul>
        </div>

        <div class="block_box">
          <div class="clearfix block">
            <h2 class="fl">最新区块</h2>
            <span class="fr">查看全部</span>
          </div>
          <div class="con_tb">
            <table class='tb' width='100%'>
              <thead>
                <tr>
                  <th>区块高度</th>
                  <th>出块时间</th>
                  <th>出块节点名称</th>
                  <th>存证TX条目数量</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in apidata.getNewBlock">
                  <td>{{parseInt(item.blockNumber)}}</td>
                  <td>{{getFormatDate(parseInt(item.timestamp))}}</td>
                  <td>{{item.miner}}</td>
                  <td>{{parseInt(item.number)}}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="block_box">
          <div class="clearfix block">
            <h2 class="fl">最新存证</h2>
            <span class="fr">查看全部</span>
          </div>
          <div class="con_tb">
            <table class='tb' width='100%'>
              <thead>
                <tr>
                  <th>存证TX哈希</th>
                  <th>存证信息</th>
                  <th>所属合作方名称</th>
                  <th>上链时间</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in apidata.cardList">
                  <td>{{item.hash}}</td>
                  <td>{{item.message}}</td>
                  <td>{{item.partner}}</td>
                  <td>{{getFormatDate(parseInt(item.chainOnTime))}}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <p>©2017 元征区块链技术研究院.京ICP备88888888号-8</p>
      <p>版本
        <span>1.0.0</span>
      </p>
    </div>

  </div>
</template>


<script type="text/ecmascript-6">
import axios from "axios";
const ERR_OK = 0;
export default {
  props: {
    apidata: {
      type: Object
    }
  },
  methods: {
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
.home {
  box-sizing: border-box;
  width: 1366px;
  margin: 0 auto;

  .container {
    padding: 20px;

    .container_box {
      .search_box {
        box-sizing: border-box;
        font-size: 0;

        .search, .search_select, .btn {
          outline: none;
          box-sizing: border-box;
          border-radius: 5px;
          height: 40px;
          line-height: 40px;
          background: #c0c0c0;
          margin-right: 10px;
          cursor: pointer;
          border: none;
          font-size: 14px;
        }

        .search {
          padding: 0 10px;
          width: 30%;
        }

        .btn:active {
          background-color: #8882a3;
        }
      }

      .count_box {
        width: 100%;
        padding: 20px;

        .count {
          display: flex;

          li {
            display: inline-block;
            flex: 1;

            span {
              color: #0080ff;
              padding: 5px;
            }
          }
        }
      }

      .block_box {
        border: 1px solid #bfc0c1;

        .block {
          border-bottom: 1px solid #bfc0c1;

          h2 {
            padding: 10px 20px;
          }

          span {
            color: #0080ff;
            padding: 10px 20px;
            cursor: pointer;
          }
        }

        .con_tb {
          padding: 10px 20px;

          thead {
            background: #8882aa;
          }

          tr {
            border-bottom: 1px solid #bfc0c1;
          }

          th, td {
            padding: 10px;
            text-align: center;
          }
        }
      }
    }
  }
}

.footer {
  background-color: #3a3a3a;
  color: #fff;
  text-align: center;
  padding: 15px;

  p {
    height: 20px;
    line-height: 20px;
  }
}
</style>