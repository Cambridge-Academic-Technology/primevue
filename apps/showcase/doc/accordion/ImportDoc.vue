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
import Accordion from '@primevue/primevue/accordion';
import AccordionPanel from '@primevue/primevue/accordionpanel';
import AccordionHeader from '@primevue/primevue/accordionheader';
import AccordionContent from '@primevue/primevue/accordioncontent';
`
            }
        };
    }
};
</script>
