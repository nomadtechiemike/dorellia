<template>
  <div class="menu-items row">
    <div v-for="(item, index) in menu_items.data" :key="index" class="col-lg-6 mb-5 mb-lg-3">
      <div class="d-flex flex-row">
        <div v-for="(image, index) in item.attributes.image" :key="index">
          <img
            :src="`http://localhost:1337${image.attributes.formats.thumbnail.url}`"
            :alt="image.attributes.alternativeText"
          />
        </div>
        <div class="flex-fill">
          <div class="d-flex flex-row header-group">
            <div class="flex-fill">
              <span class="pe-2 item-title">{{ item.attributes.title }}</span>
            </div>
            <div>
              <span class="ps-2 fw-bold">${{ item.attributes.price }}</span>
            </div>
          </div>
          <div class="mt-3">
            {{ item.attributes.description }}</div>
          <AddToCart />
        </div>
      </div>
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
  margin-top: 42px!important;
  line-height: 24px;
  position: relative;
  &:before {
    display: block;
    content: '';
    width: 1px;
    border-left: 1px dotted $primary;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
  }
  @media screen and (max-width: 992px) {
    &:before {
      display: none;
    }
    > div {
      margin-bottom: 42px;
    }
  }

  @media screen and (min-width: 992px) {
    > div {
      padding-right: 20px;
      &:nth-child(2n) {
        padding-right: 0px;
        padding-left: 20px;
      }
    }
  }
  > div {
    img {
      width: 168px;
      margin-right: 20px;
    }
    .header-group {
      border-bottom: 1px dotted $primary;
      span {
        display: inline-block;
        background-color: $white;
        position: relative;
        top: 7px;
        &.item-title {
          text-transform: uppercase;
          font-size: 1.1111111111111112rem;
          color: $primary;
          font-weight: 500;
        }
      }
    }
  }
}
</style>
