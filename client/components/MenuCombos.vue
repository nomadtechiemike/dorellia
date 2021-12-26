<template>
  <div class="menu-combos">
    <div v-for="(item, index) in menu_combos.data" :key="index" class="pb-3">
      <div v-for="(image, index) in item.attributes.Image" :key="index">
        <img
          :src="`http://localhost:1337${image.attributes.formats.medium.url}`"
          alt=""
        />
      </div>
      <!-- <div><img :src="item.Image.data.attributes.formats.medium.url" alt=""></div> -->
      <div :style="`background-color: #${item.attributes.Color}`">
        {{ item.attributes.Color }}
      </div>
      <div>{{ item.attributes.title }}</div>
      <div>{{ item.attributes.Description }}</div>
      <div>{{ item.attributes.Price }}</div>
      <button class="btn btn-primary">add to cart</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['menu_combos']
}
</script>

<style lang="scss">
.menu-combos {
}
</style>
