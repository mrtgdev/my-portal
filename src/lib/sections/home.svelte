<!-- Home Section 
    - Solo aparecerá en la primera versión
    - Luego será un modal del portal
-->
<div id="home" class="flex min-h-screen justify-center items-center z-10" 
    in:fly={{ y: -200, delay: 300, duration: 600, opacity: 0 }} out:fly={{ y: -200, delay: 120, duration: 600 }}>
    <div id="container" class="flex flex-col gap-6 w-full bg-transparent h-screen justify-center items-center font-grotesk space-y-4 p-8">
        <!-- Background GRID -->
        <div class="grid overflow-hidden grid-cols-4 grid-rows-5 gap-0.5 w-full h-full text-merino">
            <div id="" class="box row-span-2 bg-ocean-green">1</div>
            <div class="box flex row-span-5 col-span-2 bg-transparent justify-center items-center h-full w-full">
                <div id="text" class="z-10">
                    <h1 id="title" class="font-tuskerSuper text-ocean-green text-center text-9xl">MARIO ORTEGA PALACIOS</h1>
                    <p id="page-info" class="font-grotesk text-merino font-bold px-4">My Portafolio *</p>
                </div>
                <!-- IMG Black/White -->
            </div>
            <div class="box row-span-1 bg-transparent">3</div>
            <div class="box row-span-4 bg-ocean-green text-bigstone">
                <div class="flex flex-col w-1/2 py-4 justify-center items-center text-center font-tuskerSuper
                hover:text-gray-800 backdrop:transition duration-500 ease-in-out transform hover:translate-x-2 hover:translate-y-4 hover:scale-110">
                    <h2 class="text-5xl md:text-6xl lg:text-8xl flex-wrap leading-date">20<br>{ year }</h2>
                </div>
            </div>
            <div class="box flex row-span-3 bg-transparent justify-center items-end">
                <h1 class="text-left w-full h-2/5 font-tuskerSuper text-gray-900 text-7xl uppercase z-0">Created to Create</h1>
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