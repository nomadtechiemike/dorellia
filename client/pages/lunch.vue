<template>
  <div class="row">
    <div class="col-12">
      <PageTitle page_title="Lunch" />
      <MenuCombos :menu_combos="menu" />
    </div>
  </div>
</template>

<script>
export default {
  layout: 'homepage',
  name: 'lunch',
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
              combotype: {
                $eq: 'lunch',
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
        this.menu = results

      } catch (error) {
        console.log('something went wrong: ', error)
      }
    },
  },
}
</script>
