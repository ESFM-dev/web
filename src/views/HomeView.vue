<template>
    <div class="flex items-center mx-auto pt-[80px] space-x-5">
        <div class="connect relative flex items-center justify-center mx-auto w-[80px] h-[80px] border-2 border-gray-700 rounded-full bg-cover person">
        </div>
        <div class="flex flex-col w-3/4">
            <div class="relative mb-12">
                <p class="base-cuantica cuantica text-gray-500"> Cuantica </p>
                <p class="r-cuantica cuantica text-red-500"> Cuantica </p>
                <p class="b-cuantica cuantica text-blue-500"> Cuantica </p>
            </div>
            <p class="text-justify w-3/4">
                El equipo de Computación Cuántica es dirigido por M. Fernanda, destacada estudiante con participación en eventos de IBM así como miembro del equipo de diseño de Cohetes y estudiante de la Licenciatura en Física y Matemáticas en la Escuela Superior de Física y Matemáticas del IPN (ESFM).
            </p>
            <div class="flex flex-row my-2 w-3/4">
                <p class="flex text-justify text-sm w-1/2 p-4">
                    Este equipo tiene como objetivo formar un equipo de alto rendimiento así como de constante aprendizaje en el ámtico de computación cuántica, rama de la computación relativamente nueva cuyo desarrollo se ha visto acelerado y promovido principalmente por IBM y Google. Se tiene como objetivo desarollar algoritmos y ejecuciones mas rapidas y eficientes que la computación clasica, la computación binaria.
                </p>
                <p class="flex text-justify text-sm w-1/2 p-4">
                    Se utiliza principalmente el lenguaje de programación Python, ya que al ser sencillo y con una sintaxis limpia hace que el desarrollo de scripts sea mas sencillo, entendible y limpio. Tambien, provee de muchas bibliotecas y paquetes de alto rendimiento para el correcto desempeño del área.
                </p>
            </div>
            <div class="flex justify-end w-3/4">
                <img src="../assets/images/github.svg" class="w-5 mx-5">
                <p> M. Fernanda </p>
            </div>
        </div>
    </div>
    <div class="flex items-center mx-auto pt-[80px] space-x-5">
        <div class="connect relative flex items-center justify-center mx-auto w-[80px] h-[80px] border-2 border-gray-700 rounded-full bg-cover person">
        </div>
        <div class="flex flex-col w-3/4">
            <div class="relative mb-5">
                <p class="base-games text-gray-500 font-bold text-2xl"> Vídeo Juegos </p>
            </div>
            <p class="text-justify w-3/4">
                Equipo encabezado por Cristian, teniendo por objetivo aprender como funcionan y como se desarollan los video juegos haciendo uso de software libre y gratuito como es Blender para el modelado 3D, Krita para diseño 2D y Godot Engine como motor principal de video juegos. Estudiante de la Licenciatura en Física y Matemáticas en la Escuela Superior de Física y Matemáticas del IPN (ESFM).
            </p>
            <div class="flex flex-row my-2 w-3/4">
                <p class="flex text-justify text-sm w-1/2 p-4">
                    Todo video juego esta compuesto de distintos nodos (personajes, escenarios, obstaculos, etc) los cuales a su vez deben ser diseñados para tener un componente visual. Para ello existen numeros programas que nos permiten realizar dichos diseños y algunos como Blender para el diseño y animación vectorial 3D y 2D o Krita para diseño y animación 2D, son realmente buenos y lo mejor de todos, son libres y gratuitos.
                </p>
                <p class="flex text-justify text-sm w-1/2 p-4">
                    Una herramienta mas, es el motor en que se ejecutara el video juego. A pesar de existir bibliotecas como JavaFX o PyGame para crear un video juego, la principal diferencia entre un motor y dichas bibliotecas radica en que el motor ya trae una infraestructura diseñada en la cual integra distintas funcionalidades como la detección de colisiones, cambios de escenarios, capas o layers, entre otras cosas, las cuales se tendrían que programar desde cero haciendo uso de una biblioteca como las antes mencionadas.
                </p>
            </div>
            <div class="flex justify-end w-3/4">
                <img src="../assets/images/github.svg" class="w-5 mx-5">
                <p> Cristian R </p>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .person {
        background-image: url('../assets/images/person.png');
    }
    .connect::after {
        content: ' ';
        border-left: 2px solid #000;
        position: absolute;
        left: calc(50% - 1px);
        bottom: 100%;
        height: 250px;
    }
    .connect::before {
        content: ' ';
        border-left: 2px solid #000;
        position: absolute;
        left: calc(50% - 1px);
        top: 100%;
        height: 250px;
    }
    .base-games {
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
