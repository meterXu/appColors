<template>
  <div class="common-layout">
    <el-container class="container">
      <el-header class="header">

      </el-header>
      <el-container>
        <el-aside class="aside">
          <el-menu
              default-active="2"
              class="el-menu-vertical"
              background-color="#545c64"
              active-text-color="#ffd04b"
              text-color="#fff"
          >
            <el-menu-item index="1">
              <el-icon><Location /></el-icon>
              <span>Navigator Two</span>
            </el-menu-item>
            <el-menu-item index="2">
              <el-icon></el-icon>
              <span>Navigator Two</span>
            </el-menu-item>
            <el-menu-item index="3">
              <el-icon></el-icon>
              <span>Navigator Three</span>
            </el-menu-item>
            <el-menu-item index="4">
              <el-icon></el-icon>
              <span>Navigator Four</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>
          <ul class="app-list">
            <li v-for="(item,index) in 10" :key="index">
              <el-card :body-style="{ padding: '0px' }">
              <img src="/imgs/demo.png" class="image"/>
              <div style="padding: 14px">
                <div class="card-con">
                  <span>Apifox</span>
                  <el-button text :icon="View" class="button">查看</el-button>
                </div>
              </div>
            </el-card></li>
          </ul>

        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import {Location,View} from '@element-plus/icons-vue'
export default {
  name:'AppContainer',
  components:{
    Location,
    View
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
  background: #2c3e50;
  border-bottom: 1px solid #2c3e50;
  box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
}
.aside{
  width: 200px;
}
.el-menu-vertical{
  height: 100%;
}
.app-list{
  display: grid;
  list-style: none;
  margin: 0;
  padding: 0;
  grid-template-columns: repeat(auto-fill, 300px);
  grid-gap: 30px 30px;
  justify-content: center;
}
.image {
  width: 100%;
  display: block;
}
.card-con{
  display: flex;
  line-height: 32px;
  justify-content: space-between;
}
</style>
