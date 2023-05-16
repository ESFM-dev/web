<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <header class="flex items-center justify-between bg-slate-900/75 fixed z-20 top-0 left-0 w-full text-sm px-5 md:px-10 py-3 border-b border-slate-900/[0.1]" style="backdrop-filter: blur(5px);">
    <p class="font-bold mx-4 mr-10">
      &gt;ESFM_Dev
    </p>
    <a href="#" class="rounded-full text-center px-3 py-2 text-xs text-sky-400 font-bold bg-sky-400/[0.1]">
      Proximo seminario: Video Juegos
    </a>
  </header>
  <RouterView />
</template>

