<template>
  <div class="common-layout">
    <el-container class="container">
      <el-header class="header">
      </el-header>
      <el-container>
        <el-aside class="aside">
          <AppMenu/>
        </el-aside>
        <el-main>
          <AppList/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>

import AppMenu from "./AppMenu";
import AppList from "./AppList";
export default {
  name:'AppContainer',
  components:{
    AppList,
    AppMenu
  }
}
</script>

<style scoped>
.common-layout{
  height: 100vh;
}
.container{
  height: 100%;
}
.header{
  background: #262B33;
  border-bottom: 1px solid #66541d;
  box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
}
.aside{
  width: 200px;
}
</style>
