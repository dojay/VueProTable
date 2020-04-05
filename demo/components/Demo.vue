<template>
  <VueProTable
    :searchConfig="searchConfig"
    :labelWidth="60"
    :tableParams="tableParams"
    :pageParams="pageParams"
    @search="search"
    @pageChange="pageChange"
  >
    <template slot="action" slot-scope="{row}">
      <button>编辑</button>
    </template>
  </VueProTable>
</template>

<script>
  export default {
    name: '',
    data() {
      return {
        searchConfig: [
          {
            type: 'input',
            label: '订单号',
            key: 'orderNo'
          },
          {
            type: 'select',
            label: '订单状态',
            key: 'orderStatus',
            options: [
              {key: '1', value: '进行中'},
              {key: '2', value: '已完成'}
            ]
          },
          {
            type: 'datepicker',
            label: '开始时间',
            key: 'startDate',
            defaultVal: ''
          }
        ],
        tableParams: {
          column: [
            {title: '订单号', key: 'orderNo'},
            {title: '订单状态', key: 'orderStatus'},
            {title: '开始时间', key: 'startTime'},
            {title: '操作', slot: 'action'}
          ],
          data: [
            {orderNo: '111', orderStatus: '222', startTime: '2020-01-02'}
          ],
          border: true
        },
        pageParams: {
          total: 110,
          pageNo: 1,
          pageSize: 10,
          showTotal: true
        }
      }
    },
    methods: {
      search (payload) {
        this.tableParams.data = [
          {orderNo: '111', orderStatus: '进行中', startTime: '2020-01-02'}
        ]
      },
      pageChange(num) {
        console.log(num)
      }
    }
  }
</script>

<style lang="less" scoped>
  
</style>