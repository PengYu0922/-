<script setup>
import { onBeforeRouteUpdate, useRoute } from 'vue-router'
import { ref, onMounted, watch } from 'vue'
import { getMusicAPI } from '@/api/getMusicAPI';

const route = useRoute()
const searchQuery = ref( route.query.query )
const musicList = ref([])
const filterRes = ref([])
// console.log(searchQuery.value)
const getfilterRes = async () => {
  try {
    const res = await getMusicAPI()
    musicList.value = res.result
    // console.log(res)
    // console.log(res.result.length)
    filterRes.value = res.result.filter(item => {
      return item.type == searchQuery.value
    })

    if(filterRes.value.length == 0){
      for(let i=0; i<res.result.length; i++){
        if(res.result[i].children.length > 0){
          const temFilter = res.result[i].children.filter(item => {
            return item.author.includes(searchQuery.value) || item.musicName.includes(searchQuery.value) || item.contents.includes(searchQuery.value)
          })
          // console.log(temFilter)
          if(temFilter.length > 0){
            filterRes.value = [...filterRes.value,...temFilter]
            // filterRes.value = temFilter
            // break
          }
        }
      }
    }
    console.log(filterRes)
  } catch (err) {
    console.error(err)
  }
}

onMounted(() => {
  getfilterRes()
})
watch(() => route.query.query, (newQuery) => {
  searchQuery.value = newQuery
  getfilterRes()
})
</script>


<template>
  <!-- <div>
    这里是搜索结果页面, 有关{{ searchQuery }}的歌曲
  </div> -->
  <div class="top-category">
    <div class="container m-top-20">
      <div class="sub-list">
        <h3>有关{{ searchQuery }}的歌曲</h3>
        <ul>
          <li v-for="i in filterRes" :key="i.id">
          <div to="/" class="goods-item">
            <p class="price">{{ i.musicName }}</p>
            <p class="name ellipsis">{{ i.author }}</p>
            <p class="desc ellipsis">{{ i.contents }}</p>
          </div>
          </li>
        </ul>
        <p v-if="musicList.length === 0">没有找到匹配的歌曲</p>
      </div>
      <!-- <div class="ref-goods" v-for="item in musicList.children" :key="item.id">
        <div class="head">
          <h3>- {{ item.name }}-</h3>
        </div>
        <div class="body">
          <GoodsItem v-for="good in item.goods" :goods="good" :key="good.id" />
        </div>
      </div> -->
    </div>
  </div>
</template>


<style scoped lang="scss">
.goods-item {
  margin: 20px;
}
.home-banner {
  width: 1240px;
  height: 500px;
  margin: 0 auto;
}

.top-category {
  position: absolute;
  top: 200px;
  left: 0px;
  h3 {
    font-size: 28px;
    color: #666;
    font-weight: normal;
    text-align: center;
    line-height: 100px;
  }

  .sub-list {
    margin-top: 20px;
    background-color: #fff;

    ul {
      display: flex;
      padding: 0 32px;
      flex-wrap: wrap;

      li {
        width: 168px;
        height: 160px;
        margin: 20px;
        list-style-type: none;


        a {
          text-align: center;
          display: block;
          font-size: 16px;

          img {
            width: 100px;
            height: 100px;
          }

          p {
            line-height: 40px;
          }

          &:hover {
            color: $xtxColor;
          }
        }
      }
    }
  }

  .ref-goods {
    background-color: #fff;
    margin-top: 20px;
    position: relative;

    .head {
      .xtx-more {
        position: absolute;
        top: 20px;
        right: 20px;
      }

      .tag {
        text-align: center;
        color: #999;
        font-size: 20px;
        position: relative;
        top: -20px;
      }
    }

    .body {
      display: flex;
      justify-content: space-around;
      padding: 0 40px 30px;
    }
  }

  .bread-container {
    padding: 25px 0;
  }
}
</style>