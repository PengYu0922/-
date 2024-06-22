<script setup>
defineProps({
    content: {
        type: Object,
        default: () => ({})
    }
})
</script>

<template>

    <div to="/" class="goods-item">
        <p class="price">{{ content.musicName }}</p>
        <p class="name ellipsis">{{ content.author }}</p>
        <p class="desc ellipsis">{{ content.contents }}</p>
    </div>

</template>

<style lang="scss">
    .goods-item {
      display: block;
      width: 220px;
      padding: 20px 30px;
      text-align: center;
      transition: all .5s;

      &:hover {
        transform: translate3d(0, -3px, 0);
        box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
      }

      p {
        padding-top: 10px;
      }

      .name {
        font-size: 16px;
      }

      .desc {
        color: #999;
      }

      .price {
        color: $priceColor;
        font-size: 20px;
      }
    }
</style>