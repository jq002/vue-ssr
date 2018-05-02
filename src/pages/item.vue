<!-- Item.vue -->
<template>
  <div>
      <h1>item page</h1>
      <h1>{{ item.title }}</h1>
      
      </div>
</template>
<script>
export default {
  asyncData ({ store, route }) {
    // 触发 action 后，会返回 Promise
    return store.dispatch('fetchItem', route.params.id)
  },
  computed: {
    // 从 store 的 state 对象中的获取 item。
    item () {
      return this.$store.state.items[this.$route.params.id]
    }
  }
}
</script>