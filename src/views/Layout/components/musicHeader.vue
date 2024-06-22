<script setup>
import { onMounted, ref } from 'vue'
import { getMusicAPI } from '@/api/getMusicAPI';
import { useRouter } from 'vue-router';

const router = useRouter()
const searchQuery = ref('')
const searchMusic = () => {
  if(searchQuery.value){
    router.push({ path: '/music/searchResults', query: { query: searchQuery.value } })
  }
}

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
  <header class='app-header'>
    <div class="container">
      <h1 class="logo">
        <RouterLink to="/">好声音</RouterLink>
      </h1>
      <ul class="app-header-nav">
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
        <input type="text" v-model="searchQuery" placeholder="输入想搜索的内容">
        <i class="iconfont icon-search" @click="searchMusic"></i>
      </div>
    </div>
  </header>
</template>


<style scoped lang='scss'>
.app-header {
  position: absolute;
  top: 0;
  left: 0px;
  height: 200px;
  background: #fff;
  .container {
    display: flex;
    align-items: center;
  }

  .logo {
    width: 200px;

    a {
      display: block;
      height: 132px;
      width: 100%;
      text-indent: -9999px;
      background: url('@/assets/images/logo.png') no-repeat center 18px / contain;
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
      width: 90px;
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

  .search {
    width: 170px;
    height: 32px;
    position: relative;
    border-bottom: 1px solid #e7e7e7;
    line-height: 32px;

    .icon-search {
      font-size: 18px;
      margin-left: 5px;
    }

    input {
      width: 140px;
      padding-left: 5px;
      color: #666;
    }
  }

  .cart {
    width: 50px;

    .curr {
      height: 32px;
      line-height: 32px;
      text-align: center;
      position: relative;
      display: block;

      .icon-cart {
        font-size: 22px;
      }

      em {
        font-style: normal;
        position: absolute;
        right: 0;
        top: 0;
        padding: 1px 6px;
        line-height: 1;
        background: $helpColor;
        color: #fff;
        font-size: 12px;
        border-radius: 10px;
        font-family: Arial;
      }
    }
  }
}
</style>