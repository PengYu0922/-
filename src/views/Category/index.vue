<script setup>
// import GoodsItem from '@/views/Home/components/contentItem.vue'
import { onBeforeMount, onBeforeUpdate, onMounted, ref } from 'vue'
import { getMusicAPI } from '@/api/getMusicAPI';
import { onBeforeRouteUpdate, useRoute } from 'vue-router';
// import musicItem from '@/views/Home/components/contentItem.vue'

const musicList = ref([])
const route = useRoute()
let filterRes = ref([])

onMounted(async () => {
  try {
    const res = await getMusicAPI()
    musicList.value = res.result
    filterRes = res.result.filter(item => {
      return item.type == route.params.id
    })
  } catch (err) {
    console.error(err)
  }
})

// 调用 getMusicAPI 函数并打印结果
onBeforeRouteUpdate(async (to) => {
  try {
    const res = await getMusicAPI()
    musicList.value = res.result
    filterRes = res.result.filter(item => {
      return item.type == to.params.id
    })
    // console.log(typeof(filterRes[0]))
  } catch (err) {
    console.error(err)
  }
})



</script>

<template>
  <div class="top-category">
    <div class="container m-top-20">
      <div class="sub-list">
        <h3>部分{{route.params.id}}歌曲</h3>
        <ul>
          <li v-for="i in filterRes.slice(0,50)" :key="i.id">
          <div to="/" class="goods-item">
            <p class="price">{{ i.children.slice(0,1)[0].musicName }}</p>
            <p class="name ellipsis">{{ i.children.slice(0,1)[0].author }}</p>
            <p class="desc ellipsis">{{ i.children.slice(0,1)[0].contents }}</p>
          </div>
            <!-- <musicItem :content="i" /> -->
              <!-- <p>{{ i.children.slice(0,1)[0].musicName }}</p>
              <p>{{ i.children.slice(0,1)[0].author }}</p>
              <p>{{ i.children.slice(0,1)[0].contents }}</p> -->
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