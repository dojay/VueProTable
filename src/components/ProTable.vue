<template>
  <div>
    <Search 
      :searchConfig="searchConfig"
      :labelWidth="labelWidth"
      @search="handleSearch"
    />
    <Table
      v-if="tableParams !== null && tableParams.column && tableParams.column.length > 0"
      :border="tableParams.border || true"
      :columns="tableParams.column"
      :data="tableParams.data"
    >
      <slot name="action"></slot>
    </Table>

    <Page
      class="d-page-box"
      v-if="pageParams !== null && pageParams.total > pageParams.pageSize"
      :total="pageParams.total"
      :show-total="pageParams.showTotal"
      @on-change="change"
    />
  </div>
</template>

<script>
  import Search from './Search.vue'
  import SlotRender from '../utils/slotRender.js'

  export default {
    name: 'VueProTable',
    props: {
      searchConfig: {
        type: Array,
        default: []
      },
      labelWidth: {
        type: Number,
        default: 0
      },
      reqUrl: {
        type: String,
        default: ''
      },
      tableParams: {
        type: Object,
        default: null
      },
      pageParams: {
        type: Object,
        default: null
      }
    },
    components: {
      Search,
      SlotRender
    },
    data() {
      return {
        
      }
    },
    methods: {
      handleSearch(payload) {
        this.$emit('search', {...payload})
      },
      change(num) {
        this.$emit('pageChange', num)
      }
    }
  }
</script>

<style lang="less" scoped>
  .d-page-box{
    margin-top: 20px;
  }
</style>