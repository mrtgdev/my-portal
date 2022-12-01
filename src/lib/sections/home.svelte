<!-- Home Section 
    - Solo aparecerá en la primera versión
    - Luego será un modal del portal
-->
<div id="home" class="flex min-h-screen justify-center items-center z-10" 
    in:fly={{ y: -200, delay: 300, duration: 600, opacity: 0 }} out:fly={{ y: -200, delay: 120, duration: 600 }}>
    <div id="container" class="flex flex-col gap-6 w-full xl:w-10/12 bg-transparent h-screen justify-center items-center font-grotesk space-y-4 p-8">
        <div class="grid overflow-hidden grid-cols-5 grid-rows-4 gap-4 w-full h-full">
            <!-- 1 -> DIV Image -->
            <div class="box row-start-1 row-end-1 col-start-1 col-span-0 justify-center items-center bg-green-400"
                in:fly={{ y: -600, delay: 700*2, duration: 800 }} out:fly={{ y: -200, delay: 120, duration: 600 }}>
                <!-- Imagen modificada estilo RETRO -->
                1
                <img src="" alt="" />
            </div>
            <!-- 2 -> DIV Title -->
            <div class="flex box col-span-4 justify-center items-center"
                in:fly={{ x: -600, delay: 900, duration: 800, opacity: -20 }} out:fly={{ y: -200, delay: 120, duration: 600 }}>
                2
                <div class="box flex-inline">
                    <p id="page-info" class="font-grotesk text-ocean-green font-bold">My Portafolio *</p>
                    <h1 id="title" class="text-8xl font-bungee text-left text-green-600 font-black">MARIO ORTEGA</h1>
                </div>
                
            </div>
            <!-- 3 -> DIV Blog and News -->
            <div class="box row-span-3 col-span-3 bg-orange-400 z-10"
                in:fly={{ y: 300, delay: 900, duration: 900, opacity: 0 }} out:fly={{ x: -600, delay: 120*2, duration: 600, opacity: 0 }}>
                3
            </div>
            <!-- 4 -> DIV About Me and Current Year -->
            <div class="box row-span-3 col-span-2  z-50 space-y-2"
                in:fly={{ y: 550, delay: 800, duration: 680, opacity: 0 }} out:fly={{ x: 550, delay: 200*2, duration: 680, opacity: 0 }}>
                <!-- Current Year -->
                <button class="w-full h-2/3 bg-merino" on:click={ () => push('/about') }>
                    <p class="w-11/12 px-8">Si te interesa mi perfil, puedes ver mi carrera profesional en </p>
                    <div class="hover:text-ocean-green flex w-9/12 uppercase items-center mx-auto justify-center font-bold">
                        <h1 class="uppercase text-5xl">Sobre Mi</h1>
                        <i class="ri-arrow-right-up-line font-bold text-8xl" />
                    </div>
                </button>
                <div class="flex w-full h-full bg-yellow-500">
                    <div class="flex flex-col w-1/2 justify-center items-center text-center font-bungee font-black
                    hover:text-gray-500 backdrop:transition duration-500 ease-in-out transform hover:translate-y-2 hover:scale-110">
                        <h2 class="text-5xl md:text-6xl lg:text-8xl flex-wrap leading-date">20<br>{ year }</h2>
                    </div>
                    <div class="w-1/2">
                        <h1 class="block w-20 font-grotesk">Created to Create</h1>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</div>

<div id="contact" class="flex justify-center items-center min-h-screen z-10">
    <ContactSection />
</div>

<script>

import { push } from 'svelte-spa-router';
import { fly } from 'svelte/transition';

import ContactSection from './contact.svelte';

// > Get the current year
let currentTime = new Date();
let year = currentTime.getFullYear().toString().slice(-2);

</script>

<style>

.card-bottom {
    -webkit-clip-path: polygon(66% 0, 100% 36%, 100% 100%, 0 100%, 0 0);
    clip-path: polygon(88% 0, 100% 34%, 100% 100%, 0 100%, 0 0);
}

</style>