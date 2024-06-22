<script setup>

import { getMusicAPI } from '@/api/getMusicAPI';
import { ref, onMounted } from 'vue';
import musicPanel from './musicPanel.vue'
import musicItem from './contentItem.vue'

const musicList = ref([])
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
  <div class="home-product">
    <musicPanel :title="music.type" v-for="music in musicList.slice(0, 5)" :key="music.id">
      <div class="box">
        <ul class="goods-list">
          <li v-for="content in music.children" :key="content.id">
            <musicItem :content="content" />
          </li>
        </ul>
      </div>
    </musicPanel>
  </div>
</template>

<style scoped lang='scss'>
.home-product {
  position: absolute;
  top: 200px;
  left: 0px;
  background: #fff;
  margin-top: 20px;
  .sub {
    margin-bottom: 2px;

    a {
      padding: 2px 12px;
      font-size: 16px;
      border-radius: 4px;

      &:hover {
        background: $xtxColor;
        color: #fff;
      }

      &:last-child {
        margin-right: 80px;
      }
    }
  }

  .box {
    display: flex;

    .cover {
      width: 240px;
      height: 610px;
      margin-right: 10px;
      position: relative;

      img {
        width: 100%;
        height: 100%;
      }

      .label {
        width: 188px;
        height: 66px;
        display: flex;
        font-size: 18px;
        color: #fff;
        line-height: 66px;
        font-weight: normal;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translate3d(0, -50%, 0);

        span {
          text-align: center;

          &:first-child {
            width: 76px;
            background: rgba(0, 0, 0, 0.9);
          }

          &:last-child {
            flex: 1;
            background: rgba(0, 0, 0, 0.7);
          }
        }
      }
    }

    .goods-list {
      width: 990px;
      display: flex;
      flex-wrap: wrap;

      li {
        width: 240px;
        height: 300px;
        margin-right: 10px;
        margin-bottom: 10px;

        &:nth-last-child(-n + 4) {
          margin-bottom: 0;
        }

        &:nth-child(4n) {
          margin-right: 0;
        }
      }
    }


  }
}
</style>