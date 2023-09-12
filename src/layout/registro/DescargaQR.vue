<template>

    <div class="container c_qr">
        <div class="subcontainer sc_qr">
            <div class="row">
                <div class="col col-sm-12 col-md-12 col-lg-12 text-center titulo_uno">
                    <h5>El registro de su visita se ha generado con la siguiente información</h5>
                </div>
                <div class="row col-lg-12 text-center img_qr">

                    <div class="col col-sm-12 col-md-12 col-lg-12">
                        <img :src="ulr_img + data.datos_ingreso.codigo_qr" alt="">
                        <h6> <strong>C&oacute;digo generado: </strong> <span> <br> <br>{{ data.datos_ingreso.codigo }}</span></h6>
                    </div>

                    <div class="col-12 col-sm-12 col-md-6 col-lg-6 d_datos">
                        <h6> <strong>Nombre del visitante </strong> </h6>
                        <h6 class="txt_dato">
                            {{ data.datos_visitante.nombre }}
                        </h6>
                    </div>
                    <div class="col-12 col-sm-12 col-md-6 col-lg-6 d_datos">
                        <h6> <strong>Fecha y hora de la cita</strong> </h6>
                        <h6 class="txt_dato">{{ data.datos_ingreso.fecha + " a las " + data.datos_ingreso.hora_agendada }}
                        </h6>
                    </div>

                    <div class="col col-sm-12 col-md-12 col-lg-12 text-center div_botones">
                        <h5> ¿Necesitas registrar tu equipo de c&oacute;mputo o autom&oacute;vil?  </h5>

                        <br>
                        <div class="col-12 col-sm-12 col-md-12 col-lg-12">
                             <button class="btn btn-outline-secondary col-12 col-sm-12 col-md-6 col-lg-3" data-bs-toggle="modal"
                            data-bs-target="#modal_equipo" type="button">REGISTRAR EQUIPO</button>

                        <button class="btn btn-outline-secondary col-12 col-sm-12 col-md-6 col-lg-3" data-bs-toggle="modal"
                            data-bs-target="#modal_auto" type="button">REGISTRAR AUTOM&Oacute;VIL</button>
                        </div>

                        <button class="btn btn-outline-danger btn-lg col-12 col-sm-12 col-md-6 col-lg-4" type="button"
                            @click="descargarQR()">DESCARGAR COMPROBANTE</button>
                    </div>

                </div>
            </div>
        </div>



        <ModalEquipo :data="data"></ModalEquipo>
        <ModalAutomovil :data="data"></ModalAutomovil>


    </div>
</template>
    
<script lang="ts" setup>
import ModalEquipo from './ModalEquipo.vue';
import ModalAutomovil from './ModalAutomovil.vue';

import { PDFDocument} from 'pdf-lib'
import download from 'downloadjs'

const props = defineProps({
    data: Object

});

const ulr_img = "http://localhost/mx.tecdmx.ctrlingresosapi.2023b/resources/images/";



const descargarQR = async () => {

    const pngUrl = ulr_img + props.data.datos_ingreso.codigo_qr;
    const pngImageBytes = await fetch(pngUrl).then((res) => res.arrayBuffer())
    const pdfDoc = await PDFDocument.create()
    const pngImage = await pdfDoc.embedPng(pngImageBytes)
    const pngDims = pngImage.scale(0.8)

    const page = pdfDoc.addPage()
    /* page.drawText('Datos para el ingreso a las instalaciones del TECDMX', 
    { x: 50, 
      y: 200, 
      size: 14 }) */

    page.drawImage(pngImage, {
        x: page.getWidth() / 2 - pngDims.width / 2,
        y: page.getHeight() / 2 - pngDims.height + 200,
        width: pngDims.width,
        height: pngDims.height,
    })
    const pdfBytes = await pdfDoc.save()
    download(pdfBytes, (props.data.datos_ingreso.codigo + ".pdf"), "application/pdf");

}

</script>
    
<style scoped>
.c_qr {
    padding: 50px;
    /* border: solid 1px red; */
    /* height: 80vh; */
    display: flex;
    justify-content: center;
    align-items: center;
}

.sc_qr {
    border-radius: 20px;
    background: #EFEDED;
    border: solid 3px #690061;
}

.titulo_uno {
    /* padding-top: 2em;
    padding-bottom: 1em; */
    padding: 25px;
}

.titulo_uno h5 {
    font-size: 20px;
    font-weight: 800;
}

.img_qr {
    /* display: flex; */
    /* border: solid 2px #690061; */
}

.img_qr img {
    width: 15em;
    margin: 25px;
    border: solid 5px black;
    border-radius: 10px;
}

.img_qr strong{
    font-size: 12px;
}

.div_botones h5{
    font-size: 16px !important;
    font-weight: 800;
   /* padding: 2em;  */
    /* border: solid 1px red; */
    padding: 10px;
}

.div_botones button {
    margin: 10px;
    /* width: 100%; */
    font-weight: 600;
    letter-spacing: 1px;
}

.txt_dato {
    font-size: 16px !important;
    font-weight: 500;
}

.d_datos {
    margin-top: 20px;
    margin-bottom: 20px;
}

/* .row div {
    border: solid 1px red;
} */
</style>
    