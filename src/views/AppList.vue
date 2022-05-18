<template>
  <ul class="app-list">
    <li v-for="(item,index) in 10" :key="index">
      <el-card shadow="hover" :body-style="{ padding: '0px' }">
        <img src="/imgs/demo.png" class="image"/>
        <div style="padding: 14px">
          <div class="card-con">
            <span>Apifox</span>
            <el-button text class="button" @click="gotoPanel">
              <el-icon>
                <View/>
              </el-icon>
            </el-button>
          </div>
        </div>
      </el-card></li>
  </ul>
</template>

<script>
import {View} from '@element-plus/icons-vue'
export default {
  name: "AppList",
  components:{
    View
  },
  methods:{
    gotoPanel(){
      this.$router.push({name:'panel'})
    }
  }
}
</script>

<style scoped>
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
