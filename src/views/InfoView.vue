<template>
  <!-- Para PC -->
  <div class="about pt-10">
    <p class="title"> Videojuegos y... <span class="text-yellow-400">¿Walmart?</span> </p>
    <p class="type"> Seminario </p>
  </div>
  <div class="hidden md:flex flex-col">
      <div class="flex items-center">
          <div class="flex flex-col px-10 text-justify space-y-5 text-lg">
              <p>
                Desarrollar un videojuego puede ser una de las actividades mas demandantes dentro del ámbito de la programación. Esto es debido a que requiere de una gran cantidad de conocimientos tecnicos y creativos.
              </p>
              <p>
                Desde crear un personaje, un escenario hasta imaginar las interaccuones, todo proceso puede volverse sumamente complejo ya que no solo es crear dichos elementos, se debe mantener un estandar que permita la correcta armonia de los elementos.
              </p>
              <div class="flex justify-around my-5">
                  <img src="@/assets/images/godot.png" style="max-height:80px;">
                  <img src="@/assets/images/pygame.png" style="max-height:80px;">
                  <img src="@/assets/images/unity.png" style="max-height:80px;">
              </div>
              <p>
                  Tambien se debe tener en consideracion el uso de distintos programas y entornos, para crear y diseñar los personas y las animaciones, los sonidos, la logicay la forma en qje se va a distribuir, es decir, la plataforma para cual se esta programando el juego (pueder movil, web, PC o consola de videojuegos), y claro que cada plataforma agrega complejidad al desarrollo.
              </p>
          </div>
          <img src="@/assets/images/cajero.png" class="w-1/3" style="height:300px;">
      </div>
  </div>

  <!-- Para mobiles -->
  <div class="flex flex-col md:hidden">
      <div class="flex flex-col text-justify">
          <div class="flex items-center mb-4">
                  <p class="px-4">
                    Desarrollar un videojuego puede ser una de las actividades mas demandantes dentro del ámbito de la programación. Esto es debido a que requiere de una gran cantidad de conocimientos tecnicos y creativos.
                  </p>
              <img src="@/assets/images/cajero.png" class="w-1/3" style="max-height: 200px;">
          </div>
          <p class="px-4">
              Desde crear un personaje, un escenario hasta imaginar las interaccuones, todo proceso puede volverse sumamente complejo ya que no solo es crear dichos elementos, se debe mantener un estandar que permita la correcta armonia de los elementos.
          </p>
          <div class="flex justify-around my-5">
              <img src="@/assets/images/godot.png" style="max-height:80px;">
              <img src="@/assets/images/pygame.png" style="max-height:80px;">
              <img src="@/assets/images/unity.png" style="max-height:80px;">
          </div>
          <p class="px-4">
              Tambien se debe tener en consideracion el uso de distintos programas y entornos, para crear y diseñar los personas y las animaciones, los sonidos, la logicay la forma en qje se va a distribuir, es decir, la plataforma para cual se esta programando el juego (pueder movil, web, PC o consola de videojuegos), y claro que cada plataforma agrega complejidad al desarrollo.
          </p>
      </div>
  </div>

  <img src="@/assets/images/Walmart.png" class="my-4">
  <div class="flex flex-col text-lg text-justify space-y-5 px-4 md:px-10">
      <p>
        Pero en este seminario no hablaremos de eso, es decir, se requiere de todo un curso de muchas horas de trabajo para explicar de todos estos elementos. Es aqui donde comenzamos, los fundamentos de un videojuego y como es que Walmart nos puede ayudar a entenderlo. En este seminario vamos a hablar acerca de como funciona un videojuego, hablaremos acerca de los elementos que lo componen, estrategias para hacer uno y algunos conceptos de programacion a los que se suele recurrir.
      </p>
      <p>
        No hace falta tener conocimientos previos de programación de videojuegos sin embargo, es de mucha ayuda saber un poco de programación general para tener mas claros los conceptos y temas de los que vamos a platicar.
      </p>
  </div>
  <a href="https://registro.esfmdev.net" target="_blank" class="flex justify-center rounded-full bg-green-400/50 px-4 py-2 md:py-3 my-10 w-2/3 md:w-1/3 mx-auto font-bold hover:cursor-pointer">
    Registrarse
  </a>
  <div class="flex flex-col md:flex-row items-center px-4 md:px-16 mb-10">
      <p class="text-justify text-lg md:px-8 w-full md:w-2/3 mb-5">
        Durante el seminario se hablará y se mostraran algunos elementos y desarrollos de programación. Si quieres seguir a la par dicho seminario, será necesario tener las siguientes herramientas y archivos.
      </p>
      <div class="bg-yellow-400/75 rounded-lg pl-8 pr-12 py-5 mx-auto mt-5 text-gray-900 transform -rotate-3">
        <p class="text-lg font-bold mb-3"> Recursos: </p>
        <ul class="space-y-2">
          <li><a href="https://www.python.org/downloads/"> &gt; Interprete de Python </a></li>
          <li><a href="https://godotengine.org/download/3.x"> &gt; Godot Engine - v3 </a></li>
          <li><a href="#"> &gt; Archivo de recursos </a></li>
        </ul>
      </div>
  </div>
</template>

<style scoped>
  .about {
    @apply px-10 pt-16;
    margin: 20px 0px;
  }
  .title {
    font-size: 1.5rem;
    font-weight: bold;
  }
  .type {
    font-size: 1.2rem;
  }
</style>
