<template>
  <div class="menu-items d-flex flex-column flex-lg-row mt-4">
    <div v-for="(item, index) in menu_items.data" :key="index">
      <div
        v-for="(image, index) in item.attributes.image"
        :key="index"
      >
        <img :src="`http://localhost:1337${image.attributes.formats.thumbnail.url}`" :alt="image.attributes.alternativeText" />
      </div>
      <div>{{ item.attributes.title }}</div>
      <div>{{ item.attributes.description }}</div>
      <div>{{ item.attributes.price }}</div>
      <AddToCart />
    </div>
  </div>
</template>

<script>
export default {
  props: ['menu_items'],
  data() {
    return {}
  },
}
</script>

<style lang="scss">
.menu-items {
}
</style>
