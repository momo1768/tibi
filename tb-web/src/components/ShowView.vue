<!--
 * @Description:
 * @Author: Li cheng xue
 * @version:
 * @Date: 2024-02-20 23:15:08
 * @LastEditors: Li cheng xue
 * @LastEditTime: 2024-02-21 10:14:28
 * @FilePath: \src\components\ShowView.vue
-->
<template>
  <div class="showView">
    <div class="itembox" v-for="item in [1,2,3]" :key="item">
      <div class="item-header">
        <div class="avatar"></div>
        <span>昵称</span>
      </div>
      <div class="item-show">
        内容区域
      </div>
      <div class="item-footer">
        <div class="tabbox">
          <i class="el-icon-chat-dot-square"></i>
          <span>评论</span>
        </div>
        <div class="tabbox">
          <svg v-if="!like" class="icon" @click="() => like = 1" aria-hidden="true">
            <use xlink:href="#icon-xihuan1"></use>
          </svg>
          <svg v-else class="icon" @click="() => like = 0" aria-hidden="true">
            <use xlink:href="#icon-xihuan"></use>
          </svg>
          <span>喜欢</span>
        </div>
        <div class="tabbox">
          <i v-if="!collection" @click="() => collection = 1" class="el-icon-star-off"></i>
          <i v-else @click="() => collection = 0" class="el-icon-star-on" style="color: yellow;"></i>
          <span>收藏</span>
        </div>
        <div class="tabbox">
          <i class="el-icon-edit"></i>
          <span>提笔</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      like: 0, // 喜欢
      collection: 0, // 收藏
    };
  },
  methods: {

  }
}
</script>

<style lang="less" scoped>
.showView{
  width: 650px;
  margin: 0 auto;

  .itembox{
    background-color: #fff;
    margin-bottom: 10px;
    padding: 10px;
    .item-header{
      height: 50px;
      background-color: #444;
      padding: 10px;
      display: flex;
      align-items: center;
      .avatar{
        width: 40px;
        height: 40px;
        background-color: #222;
        margin-right: 10px;
      }
    }
    .item-footer{
      height: 50px;
      background-color: #aaa;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      .tabbox{
        margin-right: 20px;
      }
      .icon {
        width: 1em;
        height: 1em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
      }
    }
  }
}
</style>