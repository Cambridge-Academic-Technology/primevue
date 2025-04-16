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
import Tabs from '@primevue/primevue/tabs';
import TabList from '@primevue/primevue/tablist';
import Tab from '@primevue/primevue/tab';
import TabPanels from '@primevue/primevue/tabpanels';
import TabPanel from '@primevue/primevue/tabpanel';
`
            }
        };
    }
};
</script>
