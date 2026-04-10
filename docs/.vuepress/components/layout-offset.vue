<template>
  <el-form>
    <schema-form
      :model="{}"
      :schema="schema"
    >
      <template v-for="idx in 4" :key="idx" #[`col_${idx}`]>
        <div class="grid-content"></div>
      </template>
    </schema-form>
  </el-form>
</template>

<script setup>
const schema = [
  [
    { slot: 'col_1', colGrid: { span: 6 } },
    { slot: 'col_2', colGrid: { span: 6, offset: 6 } }
  ],
  [
    { slot: 'col_1', colGrid: { span: 6, offset: 6 } },
    { slot: 'col_2', colGrid: { span: 6, offset: 6 } }
  ],
  [
    { slot: 'col_1', colGrid: { span: 12, offset: 6 } }
  ]
]
</script>

<style  scoped>
.grid-content{
  border-radius: 4px;
  min-height: 36px;
  background: #d3dce6;
  margin-bottom:10px;
}
</style>