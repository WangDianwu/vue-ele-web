<template>
    <el-container>
      <el-header>
        <MyHeader></MyHeader>
      </el-header>
      <el-container>
        <Menu></Menu>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
</template>
<script>
import MyHeader from '@/components/layout/header'
import Menu from './menu'
export default {
  components: { MyHeader, Menu },
  name: 'App'
}
</script>
<style lang="scss">
body {
  margin: 0 auto;
}

.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
  padding: 0;
}

.el-container {
  // position: absolute;
  height: 100%;
  width: 100%;
  top: 0px;
  left: 0;
  bottom: 0;
}
.el-header {
  padding: 0;
  z-index: 1000;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

</style>
