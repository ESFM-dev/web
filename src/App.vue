<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <header class="flex items-center justify-between bg-slate-900/75 fixed z-20 top-0 left-0 w-full text-sm px-5 md:px-10 py-3 border-b border-slate-900/[0.1]" style="backdrop-filter: blur(5px);">
    <router-link :to="{name: 'home'}" class="font-bold mx-4 mr-10">
      &gt;ESFM_Dev
    </router-link>
    <router-link :to="{name: 'info'}" class="rounded-full text-center px-3 py-2 text-xs text-sky-400 font-bold bg-sky-400/[0.1]">
      Proximo seminario: Videojuegos y... ¿Walmart?
    </router-link>
  </header>

  <RouterView />
  
  <footer class="flex flex-col md:flex-row py-10 px-10 bg-gray-800 text-justify space-y-5 md:space-y-0 md:space-x-8">
      <div class="flex flex-col md:w-1/2">
        <p>
        &gt;ESFM_Dev es una iniciativa de estudiantes con la finalidad de apoyar a la comunidad politecnica de forma gratuita generando proyectos, cursos, seminarios, etc.
        </p>
        <div class="flex justify-center my-4">
          <a href="https://www.facebook.com/esfm.dev/"><img src="@/assets/images/facebook.png" class="w-[30px]"></a>
        </div>
      </div>
      <p class="md:w-1/4">
        No almacenamos cookies ni hacemos uso de software de terceros que puedan rastrear tu actividad.
      </p>
      <p class="md:w-1/4">
        La información proporcionada en el registro es encriptada y no se comparte con nadie.
      </p>
  </footer>
</template>

