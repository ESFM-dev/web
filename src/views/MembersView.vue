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
            <img src="/images/jump.gif" draggable="false">
        </div>
    </div>

    <div class="flex flex-col items-center w-2/3 mx-auto lg:mt-10 mb-32">
        <p class="text-center text-lg">
            Si tomaste un curso anteriormente con nosotros, proximamente recibiras tu <b>constancia</b> mediante tu correo institucional.
        </p>
        <div class="flex items-center justify-center w-full h-8 rounded-full my-8 bg-gray-500 relative">
            Envio de constancias
            <div class="flex items-center justify-center absolute top-0 left-0 w-5/6 h-8 rounded-full bg-green-600">
                <p class="hidden md:block"> Total enviadas: 85% </p>
            </div>
        </div>
        <p class="text-center text-lg">
            El envio ya <b>comenzó</b>, el proceso es tardado por la cantidad de constancias mientras evitamos que el envio sea detectado como envio de <b class="text-2xl">SPAM</b>.
        </p>
    </div>

    <div class="flex flex-col items-stretch justify-center lg:flex-row w-full md:w-2/3 lg:w-full mx-auto pb-32 px-8 space-x-0 lg:space-x-10 space-y-5 lg:space-y-0">

        <div class="flex flex-col justify-center p-8 rounded-lg bg-gradient-to-br from-sky-600 to-blue-900">
            <div class="flex justify-center space-x-16">
                <div class="flex flex-col">
                    <p class="text-sm"> Proximo Seminario </p>
                    <p class="text-2xl font-bold" v-html="next.title"></p>
                    <p class="text-sm mt-5"> Ponente </p>
                    <p class="text-2xl font-bold"> {{ next.member }} </p>
                    <p class="text-sm mt-5"> Duración </p>
                    <p class="text-2xl font-bold"> {{ next.duration }} hrs </p>
                </div>
                <div class="flex flex-col justify-center">
                    <p class="text-sm"> Fecha </p>
                    <p class="text-2xl font-bold" v-html="next._date"></p>
                    <p class="text-sm mt-5"> Lugar </p>
                    <p class="text-xl font-bold"> {{ next.edif }} </p>
                    <p class="text-2xl font-bold"> {{ next.site }} </p>
                </div>
            </div>
            <router-link :to="{name: 'info'}" class="flex justify-center rounded-full bg-yellow-600 px-4 p-2 mt-8 w-2/3 lg:w-full mx-auto hover:cursor-pointer">
                Leer más...
            </router-link>
            <a href="https://registro.esfmdev.net" target="_blank" class="flex justify-center rounded-full bg-green-400/50 px-4 p-2 mt-4 w-2/3 lg:w-full mx-auto hover:cursor-pointer">
                Registrarse
            </a>
        </div>
        <div class="flex flex-col justify-center p-8 rounded-lg bg-gradient-to-br from-yellow-600 to-fuchsia-600">
            <div class="flex justify-center space-x-16">
                <div class="flex flex-col">
                    <p class="text-sm"> Seminario </p>
                    <p class="text-2xl font-bold"> Notación Cuántica </p>
                    <p class="text-sm mt-5"> Ponente </p>
                    <p class="text-2xl font-bold"> M. Fernanda </p>
                    <p class="text-sm mt-5"> Duración </p>
                    <p class="text-2xl font-bold"> 1 hrs </p>
                </div>
                <div class="flex flex-col justify-center">
                    <p class="text-sm"> Fecha </p>
                    <p class="text-2xl font-bold"> Por definir </p>
                    <p class="text-sm mt-5"> Lugar </p>
                    <p class="text-xl font-bold"> Edif. 9 </p>
                </div>
            </div>
        </div>

    </div>

    <div class="flex flex-col items-center justify-center my-10">
        <p class="text-2xl font-bold mb-16 border-b-2 border-gray-200"> Departamentos </p>

        <div class="w-full p-10 bg-gradient-to-b from-purple-800 to-purple-600 relative mt-[140px] mb-[100px]">
            <div class="absolute -top-[150px] left-0 w-full z-10" style="height: 150px; overflow: hidden;">
              <svg viewBox="0 0 500 150" preserveAspectRatio="none" style="height: 100%; width: 100%;">
                <path d="M0.00,50.00 C150.00,150.00 350.00,-50.00 500.00,50.00 L500.00,150.00 L0.00,150.00 Z" class="fill-purple-800" style="stroke: none;"></path>
              </svg>
            </div>
            <div class="min-h-[50px] mb-12 md:mb-5">
                <div class="relative">
                    <p class="base-cuantica cuantica text-yellow-400"> Programación Cuántica </p>
                    <p class="r-cuantica cuantica text-red-500"> Programación Cuántica </p>
                    <p class="b-cuantica cuantica text-blue-500"> Programación Cuántica </p>
                </div>
            </div>
            <div>
                <p class="w-full md:w-5/6 mx-auto text-lg">
                    La revolución de la física cuántica esta tomando mucha presencia actualmente. No solo en el área física si no tambien en el área de computación. En los ultimos años aparecio la ya famosa "Computación Cuántica" la cual hace uso del concepto de super posición cuántica aplicandola al clásico concepto de "bit". 
                </p>
            </div>
            <div class="absolute -bottom-[150px] left-0 w-full z-10" style="height: 150px; overflow: hidden;">
              <svg viewBox="0 0 500 150" preserveAspectRatio="none" style="height: 100%; width: 100%;">
                <path d="M0.00,49.98 C149.99,150.00 271.49,-49.98 500.00,49.98 L500.00,0.00 L0.00,0.00 Z" class="fill-purple-600" style="stroke: none;"></path>
              </svg>
            </div>
        </div>

        <div class="flex flex-col-reverse md:flex-row items-center pt-16">
            <div class="flex flex-col px-8 md:pl-16 md:w-1/2">
                <img src="../assets/images/controller.svg" class="h-[100px] w-auto mx-auto my-5">
                <p class="games text-gray-500 font-bold text-2xl text-center mb-5">
                    <span class="text-sky-600">V</span>
                    <span class="text-sky-600">í</span>
                    <span class="text-red-500">d</span>
                    <span class="text-green-600">e</span>
                    <span class="text-yellow-500">o </span>

                    <span class="text-red-500">J</span>
                    <span class="text-sky-600">u</span>
                    <span class="text-yellow-500">e</span>
                    <span class="text-sky-600">g</span>
                    <span class="text-green-600">o</span>
                    <span class="text-red-500">s</span>
                </p>
                <p class="text-lg text-justify">
                    Los videojuegos es una de las ramas de la programación que abarca gran cantidad de conocimiento, diciplina y conocimiento tecnico. Es un área muy llamativa, creativa y asombrosa pero tambien desgastante y complicada, no es un área que se recomiende para iniciar en el mundo de la programación pero si para aquellos que ya tienen conocimientos intermedios.
                </p>
                <div class="hidden md:block border-y-2 md:border-b-0 my-5 md:my-10 py-2 transform -rotate-3">
                    <p class="relative top-4 px-4">
                        "Aprendí mucho de programación en general cuando comencé a experimentar en esta área. Temas de los que desconocia totalmente así como de animación y optimización."
                    </p>
                    <!--<p class="font-bold text-right mt-4"> - C. Ramirez </p>-->
                    <p class="font-bold text-right mt-8 text-sm"> Director </p>
                </div>
            </div>
            <div class="w-5/6 md:w-1/2 overflow-hidden mx-auto">
                <img src="../assets/images/block.png" class="w-full relative md:-right-24">
            </div>
        </div>

        <div class="flex flex-col py-10 my-16 md:my-24">
            <p class="text-gray-500 font-bold text-4xl text-center mb-10"> Documentos con L<span class="text-base relative -top-4">A</span>T<span class="relative top-2">E</span>X </p>

            <div class="flex flex-row justify-start items-center px-8 mb-5 space-y-5 md:space-y-0">
                <div class="w-1/3 mx-auto md:mx-0">
                    <img src="../assets/images/article.png" class="w-1/2 md:w-1/3 mx-auto">
                </div>
                <div class="w-2/3 md:hidden">
                    <p class="w-3/4 text-justify md:hidden">
                        En la <b>ESFM</b>, muchos docentes solicitan reportes de laboratorio, tareas y mas en LaTeX.
                    </p>
                </div>
                <p class="hidden md:block md:w-1/3 text-justify md:pr-5">
                    En la <b>ESFM (Escuela Superior de Fisica y Matemáticas)</b>, muchos docentes solicitar o incitan a los estudiantes a aprender a manejar y utilizar este compositor de textos para la creación de sus reportes de laboratorio, creación de notas y más; y en <b>&gt;ESFM_Dev</b>, apoyamos esta iniciativa.
                </p>
            </div>

            <div class="flex flex-row justify-end items-center px-8 mt-14">
                <div class="flex justify-end w-2/3 md:hidden">
                    <p class="w-3/4 text-justify md:hidden">
                        Aprender LaTeX es fundamental para hacer publicaciones cientificas en revistas y gacetas.
                    </p>
                </div>
                <p class="hidden md:block md:w-1/3 text-justify md:pl-5">
                    Las más grandes revistas cientificas utilizan este sistema tipografico como base para la publicación de articulos. Revistas como la revista de Fisica de la <b>UNAM (Universidad Nacional Autonoma de México)</b> publican su rubrica a seguir con los estandares a cumplir para calificar y publicar un articulo.
                </p>
                <div class="w-1/3 mx-auto md:mx-0">
                    <img src="../assets/images/publication.png" class="w-1/2 md:w-1/3 mx-auto">
                </div>
            </div>
            <p class="text-lg font-bold text-center mt-8 px-4"> Y en &gt;ESFM_Dev apoyamos completamente esta iniciativa. </p>
        </div>

        <div class="flex flex-col bg-gray-400 px-10 md:px-20 py-16 text-black">
            <div class="space-y-5">
                <p class="text-gray-800 font-bold text-4xl text-center"> Desarrollo <span clasS="font-bold text-emerald-700">&lt;</span><span clasS="font-bold text-cyan-800">WEB</span><span clasS="font-bold text-emerald-700">&gt;</span> </p>
                <p class="hidden md:block text-lg">
                    Desde la creación de la <b>World Wide Web (www)</b> aparecio una creciente demanda de creación de contenido para la difución de información e interacción entre las personas del mundo puesto que esta red permite conectar a personas desde cualquier punto en el globo.
                </p>
                <div class="flex justify-center items-center mx-auto mt-4 mb-8">
                    <p class="md:w-2/3 mb-4 relative">
                        <span class="text-5xl relative top-4">"</span> La programación es una de las pocas industrias en la que puedes tener una idea y crear algo desde cero con solo tiempo y una computadora.<span class="text-5xl absolute -bottom-5">"</span>
                    </p>
                    <div class="flex flex-col md:flex-row justify-center items-center px-3">
                        <img src="../assets/images/like.png" class="h-[50px] mx-5 md:mx-2 transform -rotate-12">
                        <p class="text-center mt-3 md:mt-0"> Mark Zukerberg </p>
                    </div>
                </div>
                <div class="flex flex-col md:flex-row justify-center items-center">
                    <div class="flex md:flex-wrap justify-around md:w-1/3 py-3">
                        <div class="w-1/4 md:w-1/2 my-3">
                            <img src="../assets/images/google.png" class="w-1/2 mx-auto">
                        </div>
                        <div class="w-1/4 md:w-1/2 my-3">
                            <img src="../assets/images/facebook.png" class="w-1/2 mx-auto">
                        </div>
                        <div class="w-1/4 md:w-1/2 my-3">
                            <img src="../assets/images/amazon.png" class="w-1/2 mx-auto">
                        </div>
                        <div class="w-1/4 md:w-1/2 my-3">
                            <img src="../assets/images/netflix.png" class="w-1/2 mx-auto">
                        </div>
                    </div>
                    <div class="flex flex-col md:w-1/2 text-justify">
                        <p class="mt-4 md:mt-0">
                            <b>Google</b> comenzo con un servidor hecho de <b>LEGOS</b> para ahorrar costos. <br>
                            <b>Amazon</b> comenzo en un armario con el nombre de "Abra". <br>
                            <b>Facebook</b> fue una idea de pasatiempo para la escuela. <br>
                            <b>Netflix</b> fue rechazada por <b>Blockbuster</b>.
                        </p>
                        <p class="mt-4 text-center font-bold">
                            ¿Cual sera la sigueinte gran idea que cambie el mundo? <br>
                            ¿Cual será tu siguiente gran idea?
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <!--<personComponent >
            <div #departament>
                <p class="text-gray-500 font-bold text-2xl"> Animación </p>
            </div>
            <div #desc>
                Todos hemos visto peliculas de Disney, Pixar o Ilumination, pero... ¿Te has preguntado que tan dificil puede ser crear una animación? <br>
                La respuesta es obvia, muy dificil. Inicialmente, así era sin embargo, actualmente existen muchos y diversos programas y metodos que permiten crear animaciones. Sin embargo, surge otra pregunta aun mas importante... <br>
                ¿Estoy haciendo bien mi animación?
            </div>
            <div #desc1>
                Durante la epoca dorada de Disney, se crean las 12 normas de la animación. Un conjunto de reglas que determinan ciertos comportamientos que debe tener una animación para que esta se vea mas natural, mas agradable visualmente, mas realista. Y aun que existen muchos estilos de animación (pixel art, vectorizada, etc), todas siguen al menos un par de estas normas. Preguntate, ¿cuantas de estas normas conoces?
            </div>
            <div #desc2>
                Nuestra intención al crear este "departamento" es difundir  dichas normas así como el proceso de creación de animaciones con distintas finalidades. una de ellas, la difución cientifica de información.
            </div>
        </personComponent>-->

        <div class="flex flex-col-reverse md:flex-row items-center py-16">
            <div class="flex flex-col md:w-2/3 px-5 md:pl-16">
                <p class="text-gray-300 font-bold text-2xl mb-5"> Programación General </p>
                <p class="text-justify">
                    Antes de especializarnos en alguna área de la programación (video juegos, cuantica, web, etc), es importante tener buenos fundamentos, conocer las herramientas básicas y las buenas practicas.
                </p>
                <div class="flex flex-col md:flex-row justify-around my-4 space-y-2 md:space-y-0">
                    <p class="text-center">
                        ¿Cual es el mejor lenguaje?
                    </p>
                    <p class="text-center">
                        ¿Como crear un programa?
                    </p>
                    <p class="text-center">
                        ¿Cuales son los requisitos de mi idea?
                    </p>
                </div>
                <p class="hidden md:block">
                    Todas estas son preguntas que aparecen cuando se pretende crear algun software o programa que tiende a ser repetitivo o bastante complejo y en <b>&gt;ESFM_Dev</b> sabemos esto es por ello que antes de comenzar en alguna de las áreas que presentamos anteriormente, ofrecemos seminarios y cursos orientados para aquellas personas con inquietudes o interes en comenzar en este maravilloso mundo.
                </p>
                <!-- <p>
                    Contamos con miembros con grandes conocimientos en distintas áreas y lenguajes. <br>
                    ¿Quieres crear una aplicación de escritorio? No hay problema, uno de nuestros compañeros puede asesorarte para conocer de forma un poco mas precisa lo que necesitas aprender. <br>
                    ¿Quieres hacer tu propio mecanismo electronico? Por su puesto que sí, compañeros de la UPIITA colaboran con nosotros para brindar información y conocimientos que han adquirido durante su formación.<br>
                </p>-->
            </div>
            <div class="flex w-1/3 justify-end overflow-hidden">
                <img src="../assets/images/lenguages.svg" class="relative my-5 md:my-0 md:-right-10">
            </div>
        </div>
    </div>

</template>

<script>
import personComponent from '@/components/personComponent.vue'

export default {
    name: 'membersView',
    data (){
        return {
            next: {
                title: 'Videojuegos y...<br> ¿Walmart?',
                member: 'Cristian',
                _date: '28 de Julio<br>18:30 hrs',
                duration: '1:30',
                edif: 'Edif 9',
                site: 'MS Teams'
            }
        }
    },
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
        @apply absolute top-1 left-1 text-4xl text-center font-bold w-full;
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
