<script setup>
import { useScroll } from '@vueuse/core';
const { y } = useScroll(window);

import { onMounted, ref } from 'vue'
import { getMusicAPI } from '@/api/getMusicAPI';

const musicList = ref([])
// 调用 getMusicAPI 函数并打印结果
onMounted(async () => {
  try {
    const res = await getMusicAPI()
    musicList.value = res.result
  } catch (err) {
    console.error(err)
  }
})

</script>

<template>
  <div class="app-header-sticky" :class="{ show: y > 78 }">
    <div class="container">
      <RouterLink class="logo" to="/" />
      <!-- 导航区域 -->
      <ul class="app-header-nav ">
        <li class="home">
          <RouterLink to="/">首页</RouterLink>
        </li>
        <li class="home" v-for="item in musicList.slice(0, 5)" :key="item.id">
            <RouterLink active-class="active" :to="`/music/category/${item.type}`">
                {{ item.type }}
            </RouterLink>
        </li>
      </ul>
      <div class="search">
        <i class="iconfont icon-search" @click="search"></i>
        <input type="text" placeholder="输入想搜索的内容">
      </div>
    </div>
  </div>
</template>


<style scoped lang='scss'>
.app-header-sticky {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  position: fixed;
  // left: 0;
  // top: 0;
  z-index: 999;
  background-color: #fff;
  border-bottom: 1px solid #e4e4e4;
  // 此处为关键样式!!!
  // 状态一：往上平移自身高度 + 完全透明
  transform: translateY(-100%);
  opacity: 0;

  // 状态二：移除平移 + 完全不透明
  &.show {
    transition: all 0.3s linear;
    transform: none;
    opacity: 1;
  }

  .container {
    display: flex;
    align-items: center;
  }

  .logo {
    width: 200px;
    height: 80px;
    background: url("@/assets/images/logo.png") no-repeat right 2px;
    background-size: 160px auto;
  }

  .right {
    width: 220px;
    display: flex;
    text-align: center;
    padding-left: 40px;
    border-left: 2px solid $xtxColor;

    a {
      width: 38px;
      margin-right: 40px;
      font-size: 16px;
      line-height: 1;

      &:hover {
        color: $xtxColor;
      }
    }
  }
}

.app-header-nav {
  width: 820px;
  display: flex;
  padding-left: 40px;
  position: relative;
  z-index: 998;

  li {
    margin-right: 40px;
    width: 15%;
    text-align: center;

    a {
      font-size: 16px;
      line-height: 32px;
      height: 32px;
      display: inline-block;

      &:hover {
        color: $xtxColor;
        border-bottom: 1px solid $xtxColor;
      }
    }

    .active {
      color: $xtxColor;
      border-bottom: 1px solid $xtxColor;
    }
  }
}
</style>