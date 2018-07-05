<template>
  <div class="menu">
    <ul>
      <li v-for="(item, i) in menu" :key="i">
        <router-link :to="item.path" v-if="item.path" :class="{ 'active': $route.path === item.path }">
          <font-awesome-icon v-if="item.meta.icon" :icon="item.meta.icon" />
          <span>{{ item.meta.label || item.name }}</span>
        </router-link>
        <ul v-if="item.children">
          <li v-for="(item, j) in item.children" :key="j">
            <router-link :to="item.path" v-if="item.path">
              <span>{{ item.meta.label || item.name }}</span>
            </router-link>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    computed: {
      ...mapGetters({ menu: 'menuitems' })
    }
  }
</script>

<style scoped>

</style>