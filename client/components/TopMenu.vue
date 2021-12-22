<template>
  <div class="top-menu text-center">
    <div class="row">
      <div class="col-12">
        <nuxt-link to="/">Starters</nuxt-link>
        <nuxt-link to="/lunch">Lunch</nuxt-link>
        <nuxt-link to="/desserts">Desserts</nuxt-link>
        <nuxt-link to="/yourorder">Your Order (0)</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.top-menu {
  background: transparent;
  .nuxt-link-exact-active {
    color: orangered;
  }
}
</style>
