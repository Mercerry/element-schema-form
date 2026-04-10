<template>
  <el-form>
    <schema-form
      :model="{}"
      :layout="layout"
      :schema="schema"
    >
      <template v-for="idx in 4" :key="idx" #[`col_${idx}`]>
        <div class="grid-content"></div>
      </template>
    </schema-form>
  </el-form>
</template>

<script setup>
const layout = {
  gutter: 20
}

const schema = [
  [
    { slot: 'col_1', colGrid: { xs: 8, sm: 6, md: 4, lg: 3, xl: 1 } },
    { slot: 'col_2', colGrid: { xs: 4, sm: 6, md: 8, lg: 9, xl: 11 } },
    { slot: 'col_3', colGrid: { xs: 4, sm: 6, md: 8, lg: 9, xl: 11 } },
    { slot: 'col_4', colGrid: { xs: 8, sm: 6, md: 4, lg: 3, xl: 1 } }
  ]
]
</script>

<style  scoped>
.grid-content{
  border-radius: 4px;
  min-height: 36px;
  background: #d3dce6;
}
</style>