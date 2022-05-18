<template>
  <el-row>
    <el-col :span="12">
      <div class="img"></div>
    </el-col>
    <el-col :span="12">
      <el-form :model="form" label-width="120px">
        <el-form-item label="Activity name">
          <div style="width: 100px;height: 40px;background: #2c3e50"></div>
        </el-form-item>
        <el-form-item label="Activity zone">
          <div style="width: 100px;height: 40px;background: #2c3e50"></div>
        </el-form-item>
        <el-form-item label="Activity zone">
          <div style="width: 100px;height: 40px;background: #2c3e50"></div>
        </el-form-item>
        <el-form-item label="Activity zone">
          <div style="width: 100px;height: 40px;background: #2c3e50"></div>
        </el-form-item>
        <el-form-item label="Activity zone">
          <div style="width: 100px;height: 40px;background: #2c3e50"></div>
        </el-form-item>        <el-form-item label="Activity zone">
        <div style="width: 100px;height: 40px;background: #2c3e50"></div>
      </el-form-item>

      </el-form>
    </el-col>
  </el-row>
</template>

<script>
import { reactive } from 'vue'

export default {
  name:'AppPanel',
  setup(props){
    const form = reactive({
      name: '',
      region: '',
      date1: '',
      date2: '',
      delivery: false,
      type: [],
      resource: '',
      desc: '',
    })

    const onSubmit = () => {
      console.log('submit!')
    }
    return  {
      form
    }
  }

}
</script>

<style scoped>
.img{
  background: url("/imgs/demo.png") no-repeat center center;
  background-size: cover;
  width: 100%;
  height: 600px;
}
</style>
