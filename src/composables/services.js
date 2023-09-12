import axios from "axios";
import { readonly, ref } from "vue";

export function services(){

    const response = ref(null);
    const error = ref(null);

    const get = async (URL_API) =>{
        try {
            const { data } = await axios.get(URL_API);
            response.value = data;
        } catch (e) {
            error.value = e;
        }
    }

    const post = async (URL_API, formData) =>{
        try {
            const { data } = await axios.post(URL_API,formData);
            response.value = data;
        } catch (e) {
            error.value = e;
        }
    }



    return {
        get,
        post,
        response: readonly(response),
        error
    }


}