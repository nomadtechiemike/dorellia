<template>
  <div class="menu-combos d-flex flex-column flex-lg-row mt-4">
    <div v-for="(item, index) in menu_combos.data" :key="index">
      <div
        v-for="(image, index) in item.attributes.Image"
        :key="index"
        :style="`background-image: url(http://localhost:1337${image.attributes.formats.medium.url})`"
        class="menu-combos__image d-flex align-items-center"
      >
        <div class="w-100">
          <div
            :style="`background-color: #${item.attributes.Color}`"
            class="text-center"
          >
            <h2>{{ item.attributes.title }}</h2>
          </div>
        </div>
      </div>

      <div class="d-flex mt-4">
        <div class="flex-fill">{{ item.attributes.Description }}</div>
        <div class="price">${{ item.attributes.Price }}</div>
      </div>

      <AddToCart />
    </div>
  </div>
</template>

<script>
export default {
  props: ['menu_combos'],
}
</script>

<style lang="scss">
.menu-combos {
  line-height: 24px;
  h2 {
    font-size: 2.3333333333333335rem;
  }
  @media screen and (max-width: 992px) {
    > div {
      border-right: none;
      border-bottom: 1px dotted $primary;
      margin-right: 0;
      padding-right: 0;
      margin-bottom: 20px;
      padding-bottom: 20px;
    }
  }
  @media screen and (min-width: 992px) {
    > div {
      border-right: 1px dotted $primary;
      margin-right: 20px;
      padding-right: 20px;
      &:last-child {
        margin-right: 0;
        padding-right: 0;
        border: none;
      }
    }
  }
  &__image {
    padding: 20px;
    height: 244px;
    > div {
      padding: 10px;
      margin: 10px;
      border: 1px solid white;
      > div {
        padding: 20px;
        margin: 10px;
        color: white;
      }
    }
  }
  .price {
    font-size: 1.6666666666666667rem;
    font-weight: 500;
    padding-left: 15px;
  }
}
</style>
