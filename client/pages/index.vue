<template>
  <div class="row">
    <div class="col-12">
      <PageTitle page_title="Starters" />

      <div>
        <div v-for="(item, index) in menu.data" :key="index" class="pb-3">
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
    </div>
  </div>
</template>

<script>
export default {
  layout: 'homepage',
  name: 'starters',
  data() {
    return {
      menu: [],
    }
  },

  created() {
    this.getMenu()
  },

  methods: {
    async getMenu() {
      try {
        const qs = require('qs')
        const query = qs.stringify(
          {
            filters: {
              title: {
                $eq: 'Junior Starter',
              },
            },
          },
          {
            encodeValuesOnly: true,
          }
        )

        const results = await this.$axios.$get(
          `http://localhost:1337/api/menu-combos/?populate=*&${query}`
        )
        // const results = await this.$strapi.find('menu-combos', {
        //   populate: ['*'],
        // })
        this.menu = results

      } catch (error) {
        console.log('something went wrong: ', error)
      }
    },
  },
}
</script>
