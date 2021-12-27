<template>
  <div class="d-inline-block">
    <button class="btn btn-primary mt-3 add-to-cart">add to cart</button>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.btn-primary {
  &.add-to-cart {
    background-color: lighten($color: $primary, $amount: 30);
  }
}
</style>
