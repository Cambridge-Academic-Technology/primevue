<template>
    <DocSectionText v-bind="$attrs" />
    <DocSectionCode :code="code" hideToggleCode importCode hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
import DataTable from '@primevue/primevue/datatable';
import Column from '@primevue/primevue/column';
import ColumnGroup from '@primevue/primevue/columngroup';   // optional
import Row from '@primevue/primevue/row';                   // optional
`
            }
        };
    }
};
</script>
