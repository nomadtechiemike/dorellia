<template>
  <div class="row">
    <div class="col-12">
      <PageTitle page_title="Lunch" />
      <MenuCombos :menu_combos="menuCombos" />
      <MenuItems :menu_items="menuItems" />
    </div>
  </div>
</template>

<script>
export default {
  layout: 'homepage',
  name: 'lunch',
  data() {
    return {
      menuCombos: [],
      menuItems: [],
    }
  },

  created() {
    this.getMenuCombos()
    this.getMenuItems()
  },

  methods: {
    async getMenuCombos() {
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
        this.menuCombos = results

      } catch (error) {
        console.log('something went wrong: ', error)
      }
    },

    async getMenuItems() {
      try {
        const qs = require('qs')
        const query = qs.stringify(
          {
            filters: {
              itemtype: {
                $eq: 'lunch',
              },
            },
          },
          {
            encodeValuesOnly: true,
          }
        )

        const results = await this.$axios.$get(
          `http://localhost:1337/api/menu-items/?populate=*&${query}`
        )
        this.menuItems = results

      } catch (error) {
        console.log('something went wrong: ', error)
      }
    },
  },
}
</script>
