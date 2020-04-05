<template>
  <div class="d-search-box" v-if="searchConfig.length > 0">
    <Form 
      inline
      :modal="searchForm"
      :label-width="labelWidth"
    >
      <FormItem 
        v-for="(item, index) in searchConfig"
        :key="index"
        :label="item.label"
      >
        <!-- 输入框 -->
        <Input 
          v-if="item.type === 'input'"
          :placeholder="item.placeholder || '请输入'"
          v-model="searchForm[item.key]"
          :type="item.inputType"
          :clearable="item.clearable"
          :disabled="item.disabled"
          :readonly="item.readonly"
        />
        <!-- 选择框 -->
        <Select
          v-if="item.type === 'select'"
          style="minWidth: 140px;textAlign: left"
          :placeholder="item.placeholder || '请选择'"
          v-model="searchForm[item.key]"
        >
          <Option v-for="(i, idx) in item.options" :value="i.key" :key="idx">{{ i.value }}</Option>
        </Select>
        <!-- 日期选择 -->
        <DatePicker 
          v-if="item.type === 'datepicker'"
          type="date"
          :options="item.options || {}"
          :placeholder="item.placeholder || '请选择时间'"
          v-model="searchForm[item.key]"
          style="width: 140px"
          @on-change="dateChange"
        ></DatePicker>
      </FormItem>
      <FormItem :label-width="20">
        <Button :loading="loading" type="primary" @click="handleClick">查询</Button>
      </FormItem>
    </Form>
  </div>
</template>

<script>
  export default {
    name: 'search',
    props: ['searchConfig', 'labelWidth'],
    data() {
      return {
        searchForm: {},
        loading: false
      }
    },
    methods: {
      handleClick() {
        this.$emit('search', {
          ...this.searchForm
        })
      },
      dateChange(date, type) {
        console.log(date, type)
      }
    }
  }
</script>

<style lang="less" scoped>
  .d-search-box {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
  }
</style>