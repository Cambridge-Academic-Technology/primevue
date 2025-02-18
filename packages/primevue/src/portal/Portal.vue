<template>
    <template v-if="inline">
        <slot></slot>
    </template>
    <template v-else-if="mounted">
        <Teleport :to="appendToValue">
            <slot></slot>
        </Teleport>
    </template>
</template>

<script>
import { isClient } from '@primeuix/utils/dom';

export default {
    name: 'Portal',
    props: {
        appendTo: {
            type: [String, Object],
            default: 'body'
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            mounted: false
        };
    },
    mounted() {
        this.mounted = isClient();
    },
    computed: {
        inline() {
            return this.disabled || this.appendTo === 'self';
        },
        appendToValue() {
            let appendTo = this.appendTo;

            if (appendTo === 'body') {
                if (this.$primevue.root?.host) {
                    if (this.$primevue.config.prefix) {
                        appendTo = this.$primevue.root.querySelector(this.$primevue.config.prefix);
                    } else {
                        appendTo = this.$primevue.root;
                    }
                } else if (this.$primevue.config.prefix) {
                    appendTo = this.$primevue.config.prefix;
                }
            }

            return appendTo;
        }
    }
};
</script>
