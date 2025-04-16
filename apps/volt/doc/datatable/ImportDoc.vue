<template>
    <DocSectionText v-bind="$attrs" />
    <DocSectionCode :code="code" lang="script" />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const code = ref(`import DataTable from '@/volt/DataTable.vue';
import Column from '@primevue/primevue/column';
import ColumnGroup from '@primevue/primevue/columngroup';  // optional
import Row from '@primevue/primevue/row';          // optional
`);
</script>
