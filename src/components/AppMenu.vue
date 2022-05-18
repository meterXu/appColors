<template>
  <el-menu
      default-active="2"
      class="el-menu-vertical"
      background-color="#262B33"
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
</template>

<script>
import {Location} from '@element-plus/icons-vue'
export default {
  name: "AppMenu",
  components:{
    Location
  }
}
</script>

<style scoped>
.el-menu-vertical{
  height: 100%;
  border-right: 1px solid #2c3e50;
}
</style>
