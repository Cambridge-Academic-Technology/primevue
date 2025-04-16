<template>
    <DocSectionText v-bind="$attrs"></DocSectionText>
    <DocSectionCode :code="code" hideToggleCode importCode hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
import Avatar from '@primevue/primevue/avatar';
import AvatarGroup from '@primevue/primevue/avatargroup';   //Optional for grouping
`
            }
        };
    }
};
</script>
