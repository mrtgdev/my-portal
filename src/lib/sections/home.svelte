<!-- Home Section 
    - Solo aparecerá en la primera versión
    - Luego será un modal del portal
-->
<div id="home" class="flex min-h-screen justify-center items-center z-10" 
    in:fly={{ y: -200, delay: 600, duration: 600 }} out:fly={{ y: -200, delay: 120, duration: 600 }}>
    <div id="container" class="flex flex-col gap-6 w-full xl:w-10/12 bg-transparent h-screen justify-center items-center font-grotesk space-y-4 px-8 py-12">
        <div class="grid overflow-hidden grid-cols-4 grid-rows-4 gap-2 w-full h-full">
            <div class="box row-start-1 row-end-1 col-start-1 col-span-3 bg-forest">
                <!-- Imagen y titulo de created to create -->
                <h1 class="">
                    Created to Create
                </h1>
                <img />
            </div>
            <button class="box col-span-1 bg-red-500" on:click={ () => push('/about') }>
                Sobre Mi
            </button>
            <div class="box row-span-3 col-span-1 bg-orange-400">
                <!-- Current Year -->
                <div class="w-full h-2/3 bg-white">
    
                </div>
                <div class="flex flex-col justify-end items-center text-end text-gray-800 font-titleGrotesk font-black z-0
                hover:text-gray-500 backdrop:transition duration-500 ease-in-out transform hover:translate-y-2 hover:scale-110">
                    <h2 class="text-5xl md:text-6xl lg:text-7xl flex-wrap leading-date">20<br>{ year }</h2>
                    <i class="ri-arrow-right-up-line font-bold text-5xl lg:text-7xl" />
                </div>
            </div>
            <div class="box row-span-3 col-span-3 bg-yellow-500">4</div>
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