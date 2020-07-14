import Vue from 'vue';

import DefaultHeader from "~/components/default/header.vue";
import DefaultNav from "~/components/default/nav.vue";
import DefaultSlider from "~/components/default/slider"

const components = {
    'default-header': DefaultHeader,
    'default-nav': DefaultNav,
    'default-slider': DefaultSlider
}

Vue.prototype.$eventHub = new Vue();

Object.keys(components).forEach((component) => Vue.component(component, components[component]));