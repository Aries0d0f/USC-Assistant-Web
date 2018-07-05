<template>
  <div class="menu">
    <ul>
      <li v-for="(item, i) in menu" :key="i" :class="{ 'active': $route.path === item.path }">
        <router-link :to="item.path" v-if="item.path">
          <div class="icon">
            <font-awesome-icon v-if="item.meta.icon" :icon="item.meta.icon" />
          </div>
          <span>{{ item.meta.label || item.name }}</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({ menu: 'menuItem' })
  }
}
</script>
