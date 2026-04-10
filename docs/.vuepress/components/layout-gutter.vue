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
    { slot: 'col_1' },
    { slot: 'col_2' },
    { slot: 'col_3' },
    { slot: 'col_4' }
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