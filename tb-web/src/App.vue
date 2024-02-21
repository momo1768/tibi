<!--
 * @Description:
 * @Author: Li cheng xue
 * @version:
 * @Date: 2024-02-20 22:37:35
 * @LastEditors: Li cheng xue
 * @LastEditTime: 2024-02-20 23:55:39
 * @FilePath: \src\App.vue
-->
<template>
  <div id="app">
    <HeaderView/>
    <div class="main">
      <ShowView/>
    </div>
    <FooterView/>
  </div>
</template>

<script>
import HeaderView from './components/HeaderView.vue';
import ShowView from './components/ShowView.vue';
import FooterView from './components/FooterView.vue';
export default {
  components:{
    HeaderView,
    FooterView,
    ShowView
  }
}
</script>

<style lang="less">
*{ padding:0; margin:0; font-family: "微软雅黑"; }
a{text-decoration: none;}
ul,ol{ list-style: none;}

.main{
  min-height: 500px;
}
#app{
  background-color: rgb(236,239,247);
}
</style>
