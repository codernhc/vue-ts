<template>
  <h1>{{ $store.state.count }}</h1>

  <router-link to="/"><el-button>登录</el-button></router-link>
  <router-link to="/main">首页</router-link>
  <!-- <el-input></el-input> -->
  <router-view></router-view>
</template>

<script lang="ts" setup></script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
