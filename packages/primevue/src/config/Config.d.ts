import type { DefaultPassThrough, PassThrough } from '@primevue/core';
import type { PrimeVueCSPOptions, PrimeVueLocaleOptions, PrimeVueZIndexOptions } from '@primevue/core/config';
import type { AccordionPassThroughOptions } from '@primevue/primevue/accordion';
import type { AccordionContentPassThroughOptions } from '@primevue/primevue/accordioncontent';
import type { AccordionHeaderPassThroughOptions } from '@primevue/primevue/accordionheader';
import type { AccordionPanelPassThroughOptions } from '@primevue/primevue/accordionpanel';
import type { AccordionTabPassThroughOptions } from '@primevue/primevue/accordiontab';
import type { AnimateOnScrollDirectivePassThroughOptions } from '@primevue/primevue/animateonscroll';
import type { AutoCompletePassThroughOptions } from '@primevue/primevue/autocomplete';
import type { AvatarPassThroughOptions } from '@primevue/primevue/avatar';
import type { AvatarGroupPassThroughOptions } from '@primevue/primevue/avatargroup';
import type { BadgePassThroughOptions } from '@primevue/primevue/badge';
import type { BadgeDirectivePassThroughOptions } from '@primevue/primevue/badgedirective';
import type { BlockUIPassThroughOptions } from '@primevue/primevue/blockui';
import type { BreadcrumbPassThroughOptions } from '@primevue/primevue/breadcrumb';
import type { ButtonPassThroughOptions } from '@primevue/primevue/button';
import type { ButtonGroupPassThroughOptions } from '@primevue/primevue/buttongroup';
import type { CalendarPassThroughOptions } from '@primevue/primevue/calendar';
import type { CardPassThroughOptions } from '@primevue/primevue/card';
import type { CarouselPassThroughOptions } from '@primevue/primevue/carousel';
import type { CascadeSelectPassThroughOptions } from '@primevue/primevue/cascadeselect';
import type { ChartPassThroughOptions } from '@primevue/primevue/chart';
import type { CheckboxPassThroughOptions } from '@primevue/primevue/checkbox';
import type { CheckboxGroupPassThroughOptions } from '@primevue/primevue/checkboxgroup';
import type { ChipPassThroughOptions } from '@primevue/primevue/chip';
import type { ChipsPassThroughOptions } from '@primevue/primevue/chips';
import type { ColorPickerPassThroughOptions } from '@primevue/primevue/colorpicker';
import type { ColumnPassThroughOptions } from '@primevue/primevue/column';
import type { ColumnGroupPassThroughOptions } from '@primevue/primevue/columngroup';
import type { ConfirmDialogPassThroughOptions } from '@primevue/primevue/confirmdialog';
import type { ConfirmPopupPassThroughOptions } from '@primevue/primevue/confirmpopup';
import type { ContextMenuPassThroughOptions } from '@primevue/primevue/contextmenu';
import type { DataTablePassThroughOptions } from '@primevue/primevue/datatable';
import type { DataViewPassThroughOptions } from '@primevue/primevue/dataview';
import type { DatePickerPassThroughOptions } from '@primevue/primevue/datepicker';
import type { DeferredContentPassThroughOptions } from '@primevue/primevue/deferredcontent';
import type { DialogPassThroughOptions } from '@primevue/primevue/dialog';
import type { DividerPassThroughOptions } from '@primevue/primevue/divider';
import type { DockPassThroughOptions } from '@primevue/primevue/dock';
import type { DrawerPassThroughOptions } from '@primevue/primevue/drawer';
import type { DropdownPassThroughOptions } from '@primevue/primevue/dropdown';
import type { EditorPassThroughOptions } from '@primevue/primevue/editor';
import type { FieldsetPassThroughOptions } from '@primevue/primevue/fieldset';
import type { FileUploadPassThroughOptions } from '@primevue/primevue/fileupload';
import type { FloatLabelPassThroughOptions } from '@primevue/primevue/floatlabel';
import type { FluidPassThroughOptions } from '@primevue/primevue/fluid';
import type { FocusTrapDirectivePassThroughOptions } from '@primevue/primevue/focustrap';
import type { GalleriaPassThroughOptions } from '@primevue/primevue/galleria';
import type { IconFieldPassThroughOptions } from '@primevue/primevue/iconfield';
import type { IftaLabelPassThroughOptions } from '@primevue/primevue/iftalabel';
import type { ImagePassThroughOptions } from '@primevue/primevue/image';
import type { ImageComparePassThroughOptions } from '@primevue/primevue/imagecompare';
import type { InlineMessagePassThroughOptions } from '@primevue/primevue/inlinemessage';
import type { InplacePassThroughOptions } from '@primevue/primevue/inplace';
import type { InputChipsPassThroughOptions } from '@primevue/primevue/inputchips';
import type { InputGroupPassThroughOptions } from '@primevue/primevue/inputgroup';
import type { InputGroupAddonPassThroughOptions } from '@primevue/primevue/inputgroupaddon';
import type { InputIconPassThroughOptions } from '@primevue/primevue/inputicon';
import type { InputMaskPassThroughOptions } from '@primevue/primevue/inputmask';
import type { InputNumberPassThroughOptions } from '@primevue/primevue/inputnumber';
import type { InputOtpPassThroughOptions } from '@primevue/primevue/inputotp';
import type { InputSwitchPassThroughOptions } from '@primevue/primevue/inputswitch';
import type { InputTextPassThroughOptions } from '@primevue/primevue/inputtext';
import type { KeyFilterDirectivePassThroughOptions } from '@primevue/primevue/keyfilter';
import type { KnobPassThroughOptions } from '@primevue/primevue/knob';
import type { ListboxPassThroughOptions } from '@primevue/primevue/listbox';
import type { MegaMenuPassThroughOptions } from '@primevue/primevue/megamenu';
import type { MenuPassThroughOptions } from '@primevue/primevue/menu';
import type { MenubarPassThroughOptions } from '@primevue/primevue/menubar';
import type { MessagePassThroughOptions } from '@primevue/primevue/message';
import type { MeterGroupPassThroughOptions } from '@primevue/primevue/metergroup';
import type { MultiSelectPassThroughOptions } from '@primevue/primevue/multiselect';
import type { OrderListPassThroughOptions } from '@primevue/primevue/orderlist';
import type { OrganizationChartPassThroughOptions } from '@primevue/primevue/organizationchart';
import type { OverlayBadgePassThroughOptions } from '@primevue/primevue/overlaybadge';
import type { OverlayPanelPassThroughOptions } from '@primevue/primevue/overlaypanel';
import type { PaginatorPassThroughOptions } from '@primevue/primevue/paginator';
import type { PanelPassThroughOptions } from '@primevue/primevue/panel';
import type { PanelMenuPassThroughOptions } from '@primevue/primevue/panelmenu';
import type { PassThroughOptions } from '@primevue/primevue/passthrough';
import type { PasswordPassThroughOptions } from '@primevue/primevue/password';
import type { PickListPassThroughOptions } from '@primevue/primevue/picklist';
import type { PopoverPassThroughOptions } from '@primevue/primevue/popover';
import type { ProgressBarPassThroughOptions } from '@primevue/primevue/progressbar';
import type { ProgressSpinnerPassThroughOptions } from '@primevue/primevue/progressspinner';
import type { RadioButtonPassThroughOptions } from '@primevue/primevue/radiobutton';
import type { RadioButtonGroupPassThroughOptions } from '@primevue/primevue/radiobuttongroup';
import type { RatingPassThroughOptions } from '@primevue/primevue/rating';
import type { RippleDirectivePassThroughOptions } from '@primevue/primevue/ripple';
import type { RowPassThroughOptions } from '@primevue/primevue/row';
import type { ScrollPanelPassThroughOptions } from '@primevue/primevue/scrollpanel';
import type { ScrollTopPassThroughOptions } from '@primevue/primevue/scrolltop';
import type { SelectPassThroughOptions } from '@primevue/primevue/select';
import type { SelectButtonPassThroughOptions } from '@primevue/primevue/selectbutton';
import type { SidebarPassThroughOptions } from '@primevue/primevue/sidebar';
import type { SkeletonPassThroughOptions } from '@primevue/primevue/skeleton';
import type { SliderPassThroughOptions } from '@primevue/primevue/slider';
import type { SpeedDialPassThroughOptions } from '@primevue/primevue/speeddial';
import type { SplitButtonPassThroughOptions } from '@primevue/primevue/splitbutton';
import type { SplitterPassThroughOptions } from '@primevue/primevue/splitter';
import type { SplitterPanelPassThroughOptions } from '@primevue/primevue/splitterpanel';
import type { StepPassThroughOptions } from '@primevue/primevue/step';
import type { StepItemPassThroughOptions } from '@primevue/primevue/stepitem';
import type { StepListPassThroughOptions } from '@primevue/primevue/steplist';
import type { StepPanelPassThroughOptions } from '@primevue/primevue/steppanel';
import type { StepPanelsPassThroughOptions } from '@primevue/primevue/steppanels';
import type { StepperPassThroughOptions } from '@primevue/primevue/stepper';
import type { StepsPassThroughOptions } from '@primevue/primevue/steps';
import type { StyleClassDirectivePassThroughOptions } from '@primevue/primevue/styleclass';
import type { TabPassThroughOptions } from '@primevue/primevue/tab';
import type { TabListPassThroughOptions } from '@primevue/primevue/tablist';
import type { TabMenuPassThroughOptions } from '@primevue/primevue/tabmenu';
import type { TabPanelPassThroughOptions } from '@primevue/primevue/tabpanel';
import type { TabPanelsPassThroughOptions } from '@primevue/primevue/tabpanels';
import type { TabsPassThroughOptions } from '@primevue/primevue/tabs';
import type { TabViewPassThroughOptions } from '@primevue/primevue/tabview';
import type { TagPassThroughOptions } from '@primevue/primevue/tag';
import type { TerminalPassThroughOptions } from '@primevue/primevue/terminal';
import type { TextareaPassThroughOptions } from '@primevue/primevue/textarea';
import type { TieredMenuPassThroughOptions } from '@primevue/primevue/tieredmenu';
import type { TimelinePassThroughOptions } from '@primevue/primevue/timeline';
import type { ToastPassThroughOptions } from '@primevue/primevue/toast';
import type { ToggleButtonPassThroughOptions } from '@primevue/primevue/togglebutton';
import type { ToggleSwitchPassThroughOptions } from '@primevue/primevue/toggleswitch';
import type { ToolbarPassThroughOptions } from '@primevue/primevue/toolbar';
import type { TooltipDirectivePassThroughOptions } from '@primevue/primevue/tooltip';
import type { TreePassThroughOptions } from '@primevue/primevue/tree';
import type { TreeSelectPassThroughOptions } from '@primevue/primevue/treeselect';
import type { TreeTablePassThroughOptions } from '@primevue/primevue/treetable';
import type { VirtualScrollerPassThroughOptions } from '@primevue/primevue/virtualscroller';

export * from '@primevue/core/config';
export { default } from '@primevue/core/config';

export interface PrimeVueConfiguration {
    ripple?: boolean;
    /**
     * @deprecated since v4.0. Use 'inputVariant' instead.
     */
    inputStyle?: 'filled' | 'outlined' | undefined;
    inputVariant?: 'filled' | 'outlined' | undefined;
    locale?: PrimeVueLocaleOptions;
    filterMatchModeOptions?: any;
    zIndex?: PrimeVueZIndexOptions;
    theme?: any;
    unstyled?: boolean;
    pt?: PassThrough<PrimeVuePTOptions>;
    ptOptions?: PassThroughOptions;
    csp?: PrimeVueCSPOptions;
}

export interface PrimeVuePTOptions {
    accordion?: DefaultPassThrough<AccordionPassThroughOptions>;
    accordionpanel?: DefaultPassThrough<AccordionPanelPassThroughOptions>;
    accordionheader?: DefaultPassThrough<AccordionHeaderPassThroughOptions>;
    accordioncontent?: DefaultPassThrough<AccordionContentPassThroughOptions>;
    /**
     * @deprecated since v4. Use the new structure of Accordion instead.
     */
    accordiontab?: DefaultPassThrough<AccordionTabPassThroughOptions>;
    autocomplete?: DefaultPassThrough<AutoCompletePassThroughOptions>;
    avatar?: DefaultPassThrough<AvatarPassThroughOptions>;
    avatargroup?: DefaultPassThrough<AvatarGroupPassThroughOptions>;
    badge?: DefaultPassThrough<BadgePassThroughOptions>;
    blockui?: DefaultPassThrough<BlockUIPassThroughOptions>;
    breadcrumb?: DefaultPassThrough<BreadcrumbPassThroughOptions>;
    button?: DefaultPassThrough<ButtonPassThroughOptions>;
    buttongroup?: DefaultPassThrough<ButtonGroupPassThroughOptions>;
    /**
     * @deprecated since v4. Use the new structure of DatePicker instead.
     */
    calendar?: DefaultPassThrough<CalendarPassThroughOptions>;
    card?: DefaultPassThrough<CardPassThroughOptions>;
    carousel?: DefaultPassThrough<CarouselPassThroughOptions>;
    cascadeselect?: DefaultPassThrough<CascadeSelectPassThroughOptions>;
    chart?: DefaultPassThrough<ChartPassThroughOptions>;
    checkbox?: DefaultPassThrough<CheckboxPassThroughOptions>;
    checkboxgroup?: DefaultPassThrough<CheckboxGroupPassThroughOptions>;
    chip?: DefaultPassThrough<ChipPassThroughOptions>;
    /**
     * @deprecated since v4. Use the new structure of InputChips instead.
     */
    chips?: DefaultPassThrough<ChipsPassThroughOptions>;
    colorpicker?: DefaultPassThrough<ColorPickerPassThroughOptions>;
    column?: DefaultPassThrough<ColumnPassThroughOptions>;
    columngroup?: DefaultPassThrough<ColumnGroupPassThroughOptions>;
    confirmdialog?: DefaultPassThrough<ConfirmDialogPassThroughOptions>;
    confirmpopup?: DefaultPassThrough<ConfirmPopupPassThroughOptions>;
    contextmenu?: DefaultPassThrough<ContextMenuPassThroughOptions>;
    datatable?: DefaultPassThrough<DataTablePassThroughOptions>;
    dataview?: DefaultPassThrough<DataViewPassThroughOptions>;
    datepicker?: DefaultPassThrough<DatePickerPassThroughOptions>;
    deferredcontent?: DefaultPassThrough<DeferredContentPassThroughOptions>;
    divider?: DefaultPassThrough<DividerPassThroughOptions>;
    dialog?: DefaultPassThrough<DialogPassThroughOptions>;
    dock?: DefaultPassThrough<DockPassThroughOptions>;
    drawer?: DefaultPassThrough<DrawerPassThroughOptions>;
    /**
     * @deprecated since v4. Use the new structure of Select instead.
     */
    dropdown?: DefaultPassThrough<DropdownPassThroughOptions>;
    dynamicdialog?: DefaultPassThrough<DialogPassThroughOptions>;
    editor?: DefaultPassThrough<EditorPassThroughOptions>;
    fieldset?: DefaultPassThrough<FieldsetPassThroughOptions>;
    fileupload?: DefaultPassThrough<FileUploadPassThroughOptions>;
    floatlabel?: DefaultPassThrough<FloatLabelPassThroughOptions>;
    fluid?: DefaultPassThrough<FluidPassThroughOptions>;
    galleria?: DefaultPassThrough<GalleriaPassThroughOptions>;
    iconfield?: DefaultPassThrough<IconFieldPassThroughOptions>;
    iftalabel?: DefaultPassThrough<IftaLabelPassThroughOptions>;
    image?: DefaultPassThrough<ImagePassThroughOptions>;
    imagecompare?: DefaultPassThrough<ImageComparePassThroughOptions>;
    inlinemessage?: DefaultPassThrough<InlineMessagePassThroughOptions>;
    inplace?: DefaultPassThrough<InplacePassThroughOptions>;
    inputchips?: DefaultPassThrough<InputChipsPassThroughOptions>;
    inputgroup?: DefaultPassThrough<InputGroupPassThroughOptions>;
    inputgroupaddon?: DefaultPassThrough<InputGroupAddonPassThroughOptions>;
    inputicon?: DefaultPassThrough<InputIconPassThroughOptions>;
    inputmask?: DefaultPassThrough<InputMaskPassThroughOptions>;
    inputnumber?: DefaultPassThrough<InputNumberPassThroughOptions>;
    /**
     * @deprecated since v4. Use the new structure of ToggleSwitch instead.
     */
    inputotp?: DefaultPassThrough<InputOtpPassThroughOptions>;
    inputswitch?: DefaultPassThrough<InputSwitchPassThroughOptions>;
    inputtext?: DefaultPassThrough<InputTextPassThroughOptions>;
    knob?: DefaultPassThrough<KnobPassThroughOptions>;
    listbox?: DefaultPassThrough<ListboxPassThroughOptions>;
    megamenu?: DefaultPassThrough<MegaMenuPassThroughOptions>;
    menu?: DefaultPassThrough<MenuPassThroughOptions>;
    menubar?: DefaultPassThrough<MenubarPassThroughOptions>;
    message?: DefaultPassThrough<MessagePassThroughOptions>;
    metergroup?: DefaultPassThrough<MeterGroupPassThroughOptions>;
    multiselect?: DefaultPassThrough<MultiSelectPassThroughOptions>;
    orderlist?: DefaultPassThrough<OrderListPassThroughOptions>;
    organizationchart?: DefaultPassThrough<OrganizationChartPassThroughOptions>;
    overlaybadge?: DefaultPassThrough<OverlayBadgePassThroughOptions>;
    /**
     * @deprecated since v4. Use the new structure of Popover instead.
     */
    overlaypanel?: DefaultPassThrough<OverlayPanelPassThroughOptions>;
    paginator?: DefaultPassThrough<PaginatorPassThroughOptions>;
    panel?: DefaultPassThrough<PanelPassThroughOptions>;
    panelmenu?: DefaultPassThrough<PanelMenuPassThroughOptions>;
    password?: DefaultPassThrough<PasswordPassThroughOptions>;
    picklist?: DefaultPassThrough<PickListPassThroughOptions>;
    popover?: DefaultPassThrough<PopoverPassThroughOptions>;
    progressbar?: DefaultPassThrough<ProgressBarPassThroughOptions>;
    progressspinner?: DefaultPassThrough<ProgressSpinnerPassThroughOptions>;
    radiobutton?: DefaultPassThrough<RadioButtonPassThroughOptions>;
    radiobuttongroup?: DefaultPassThrough<RadioButtonGroupPassThroughOptions>;
    rating?: DefaultPassThrough<RatingPassThroughOptions>;
    row?: DefaultPassThrough<RowPassThroughOptions>;
    scrollpanel?: DefaultPassThrough<ScrollPanelPassThroughOptions>;
    scrolltop?: DefaultPassThrough<ScrollTopPassThroughOptions>;
    /**
     * @deprecated since v4. Use the new structure of Drawer instead.
     */
    sidebar?: DefaultPassThrough<SidebarPassThroughOptions>;
    skeleton?: DefaultPassThrough<SkeletonPassThroughOptions>;
    slider?: DefaultPassThrough<SliderPassThroughOptions>;
    speeddial?: DefaultPassThrough<SpeedDialPassThroughOptions>;
    selectbutton?: DefaultPassThrough<SelectButtonPassThroughOptions>;
    select?: DefaultPassThrough<SelectPassThroughOptions>;
    splitbutton?: DefaultPassThrough<SplitButtonPassThroughOptions>;
    splitter?: DefaultPassThrough<SplitterPassThroughOptions>;
    splitterpanel?: DefaultPassThrough<SplitterPanelPassThroughOptions>;
    step?: DefaultPassThrough<StepPassThroughOptions>;
    stepitem?: DefaultPassThrough<StepItemPassThroughOptions>;
    steplist?: DefaultPassThrough<StepListPassThroughOptions>;
    steppanel?: DefaultPassThrough<StepPanelPassThroughOptions>;
    steppanels?: DefaultPassThrough<StepPanelsPassThroughOptions>;
    stepper?: DefaultPassThrough<StepperPassThroughOptions>;
    steps?: DefaultPassThrough<StepsPassThroughOptions>;
    tabmenu?: DefaultPassThrough<TabMenuPassThroughOptions>;
    tabs?: DefaultPassThrough<TabsPassThroughOptions>;
    tablist?: DefaultPassThrough<TabListPassThroughOptions>;
    tab?: DefaultPassThrough<TabPassThroughOptions>;
    tabpanels?: DefaultPassThrough<TabPanelsPassThroughOptions>;
    tabpanel?: DefaultPassThrough<TabPanelPassThroughOptions>;
    /**
     * @deprecated since v4. Use tabs instead.
     */
    tabview?: DefaultPassThrough<TabViewPassThroughOptions>;
    tag?: DefaultPassThrough<TagPassThroughOptions>;
    terminal?: DefaultPassThrough<TerminalPassThroughOptions>;
    textarea?: DefaultPassThrough<TextareaPassThroughOptions>;
    tieredmenu?: DefaultPassThrough<TieredMenuPassThroughOptions>;
    timeline?: DefaultPassThrough<TimelinePassThroughOptions>;
    toast?: DefaultPassThrough<ToastPassThroughOptions>;
    togglebutton?: DefaultPassThrough<ToggleButtonPassThroughOptions>;
    toggleswitch?: DefaultPassThrough<ToggleSwitchPassThroughOptions>;
    toolbar?: DefaultPassThrough<ToolbarPassThroughOptions>;
    tree?: DefaultPassThrough<TreePassThroughOptions>;
    treeselect?: DefaultPassThrough<TreeSelectPassThroughOptions>;
    treetable?: DefaultPassThrough<TreeTablePassThroughOptions>;
    virtualscroller?: DefaultPassThrough<VirtualScrollerPassThroughOptions>;
    directives?: {
        animate?: AnimateOnScrollDirectivePassThroughOptions;
        badge?: BadgeDirectivePassThroughOptions;
        focustrap?: FocusTrapDirectivePassThroughOptions;
        keyfilter?: KeyFilterDirectivePassThroughOptions;
        ripple?: RippleDirectivePassThroughOptions;
        styleclass?: StyleClassDirectivePassThroughOptions;
        tooltip?: TooltipDirectivePassThroughOptions;
    };
    global?: {
        css?: ((options: any) => string | undefined) | string | undefined;
    };
}
