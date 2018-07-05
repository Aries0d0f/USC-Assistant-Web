<template>
  <div class="container table-container">
    <h1>課表</h1>
    <div class="table">
      <div class="table-spam">
        <div class="course"></div>
      </div>
      <div class="table-time">
        <div class="course" v-for="time in 10" :key="time">
          <p>{{ time + 7 }}:00</p>
          <p>|</p>
          <p>{{ time + 8 }}:00</p>
        </div>
      </div>
      <div class="table-week">
        <div class="course" v-for="(day, i) in week" :key="i">
          <p class="uppercase">{{ day }}</p>
        </div>
      </div>
      <div class="table-inner">
        <div class="course shadow" v-for="spam in 50" :key="spam"></div>
      </div>
      <div class="table-inner">
        <div class="course" v-for="(item, i) in table" :key="i" :style="{ 'grid-area': `${item.time.part[0]} / ${item.time.day + 1} / ${item.time.part[item.time.part.length - 1] + 1} / ${item.time.day + 2}` }">
          <p>{{ item.room }}</p>
          <h3>{{ item.className.substring(5) }}</h3>
          <p>{{ item.class.substring(6) }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      table: [],
      week: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
      target: {
        id: 'A0661106',
        year: 107,
        sem: 1
      }
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    ...mapActions(['getClassTable']),
    async getData () {
      const res = await this.getClassTable(this.target)
      this.table = res
    }
  }
}
</script>
