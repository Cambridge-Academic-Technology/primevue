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
import Stepper from '@primevue/primevue/stepper';
import StepList from '@primevue/primevue/steplist';
import StepPanels from '@primevue/primevue/steppanels';
import StepItem from '@primevue/primevue/stepitem';
import Step from '@primevue/primevue/step';
import StepPanel from '@primevue/primevue/steppanel';
`
            }
        };
    }
};
</script>
