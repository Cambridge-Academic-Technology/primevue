import BaseDirective from '@primevue/core/basedirective';
import TooltipStyle from '@primevue/primevue/tooltip/style';

const BaseTooltip = BaseDirective.extend({
    style: TooltipStyle
});

export default BaseTooltip;
