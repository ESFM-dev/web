<template>
    <picture class="absolute z-20 top-0 inset-x-0 flex justify-center overflow-hidden pointer-events-none">
        <source srcset="/images/bg.avif" type="image/avif">
        <img src="/images/bg.png" alt="" class="w-[90rem] flex-none max-w-none" decoding="async">
    </picture>

    <div class="flex flex-col md:flex-row w-full h-screen justify-center items-center px-10">
        <div class="flex justify-center items-center md:flex-1">
            <div class="flex flex-col justify-center">
                <p class="text-sm font-bold"> Para la comunidad politecnica </p>
                <p class="text-4xl font-bold"> Crear </p>
                <p class="text-4xl font-bold"> Desarrollar </p>
                <p class="text-4xl font-bold mb-5"> Desplegar </p>
                <div class="flex justify-center border-2 border-sky-600 p-2 my-5 hover:bg-sky-600">
                    <p class="font-press text-xl boder-2 border-sky-600 py-3 px-2 hover:cursor-default"> &gt;ESFM_Dev </p>
                </div>
            </div>

            <!--<div class="flex flex-1 flex-col bg-slate-200/[.1] rounded-lg p-5">
                <p class=""> Próximos Eventos </p>
                <p class=""> Seminario </p>
                <div class="bg-contain bg-no-repeat bg-center py-4" style="background-image: url('/images/games.png');">
                    <p class="text-center"> Introducción a los Video Juegos </p>
                </div>
            </div>-->
        </div>
        <div class="flex justify-center w-1/2">
            <img src="/images/cube.png" class="md:w-3/4" draggable="false">
        </div>
    </div>

    <personComponent >
        <template #departament>
            <div class="relative mb-24 md:mb-10">
                <p class="base-cuantica cuantica text-gray-500"> Programación Cuántica </p>
                <p class="r-cuantica cuantica text-red-500"> Programación Cuántica </p>
                <p class="b-cuantica cuantica text-blue-500"> Programación Cuántica </p>
            </div>
        </template>
        <template #desc>
            Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (
        </template>
        <template #desc1>
            Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (
        </template>
        <template #desc2>
            Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (
        </template>
    </personComponent>

    <personComponent >
        <template #departament>
            <p class="games text-gray-500 font-bold text-2xl"> Vídeo Juegos </p>
        </template>
        <template #desc>
            Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (
        </template>
        <template #desc1>
            Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (
        </template>
        <template #desc2>
            Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (
        </template>
    </personComponent>
</template>

<script>
import personComponent from '@/components/personComponent.vue'

export default {
    name: 'membersView',
    components: {
        personComponent
    }
}
</script>

<style scoped>
    .games {
        font-family: 'press', sans-serif;
    }

    .cuantica {
        font-family: 'share', sans-serif;
        @apply absolute top-1 left-1 text-4xl font-bold;
        animation-duration: 0.8s;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
        animation-direction: alternate;
    }
    .base-cuantica {
        animation-name: base-cuantica;
    }
    .r-cuantica {
        animation-name: r-cuantica;
    }
    .b-cuantica {
        animation-name: b-cuantica;
    }

    @keyframes base-cuantica {
        0% { @apply opacity-100; }

        14% { @apply opacity-100; }
        30% { @apply opacity-100; }

        44% { @apply opacity-100; }
        45% { @apply opacity-0; }

        59% { @apply opacity-0; }
        60% { @apply opacity-100; }

        84% { @apply opacity-100; }
        85% { @apply opacity-0; }

        100% { @apply opacity-0; }
    }
    @keyframes r-cuantica {
        0% { @apply top-0.5 left-0.5 opacity-0; }

        14% { @apply top-0.5 left-0.5 opacity-0; }
        30% { @apply top-0.5 left-0.5 opacity-0; }

        44% { @apply top-0.5 left-0.5 opacity-0; }
        45% { @apply top-0 left-0 opacity-100; }

        59% { @apply top-0 left-0 opacity-100; }
        60% { @apply top-0.5 left-0.5 opacity-0; }

        84% { @apply top-0.5 left-0.5 opacity-0; }
        85% { @apply top-0 left-0 opacity-100; }

        100% { @apply top-0 left-0 opacity-100; }
    }
    @keyframes b-cuantica {
        0% { @apply top-1 left-1 opacity-0; }

        14% { @apply top-1 left-1 opacity-0; }
        30% { @apply top-1 left-1 opacity-0; }

        44% { @apply top-1 left-1 opacity-0; }
        45% { @apply top-1.5 left-1.5 opacity-100; }

        59% { @apply top-1.5 left-1.5 opacity-100; }
        60% { @apply top-1 left-1 opacity-0; }

        84% { @apply top-1 left-1 opacity-0; }
        85% { @apply top-1.5 left-1.5 opacity-100; }

        100% { @apply top-1.5 left-1.5 opacity-100; }
    }
</style>
