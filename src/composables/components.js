import { ref } from "vue";
import title from "../components/title.vue"
import subtitle from "../components/subtitle.vue"
import input_text from "../components/input_text.vue"
import input_select from "../components/input_select.vue"
import input_datalist from "../components/input_datalist.vue"
import input_datepicker from "../components/input_datepicker.vue"
import input_timepicker from "../components/input_timepicker.vue"
import button_primary from "../components/button_primary.vue"

export function components() {

    const componente = ref();

    const components = {
        title,
        subtitle,
        input_text,
        input_select,
        input_datalist,
        input_datepicker,
        input_timepicker,
        button_primary
    }

    function setSelectedComponent(component){        
        return components[component];
    }

    return {
        setSelectedComponent
    }
}