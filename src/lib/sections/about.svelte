
<!-- About Section -->
<div class="flex flex-col gap-6 w-full justify-start items-center font-grotesk px-12 text-white">
    <div id="saludo">
        <p class="text-white">Hola! 👋, me llamo</p>
        <h1 class="text-white uppercase font-semibold">
            Mario Ortega Palacios
        </h1>
    </div>
    soy un Full-stack Developer con más de 3 años de experiencia en este sector residiendo en Madrid.<br>
        En mi horario laboral trabajo principalmente en Java y algún framework de Javascript, aunque me encanta investigar por mi cuenta nuevos entornos y 
        lenguajes de programación para ponerme al día.
        <br>
        Si te interesa más "Mi Perfil", puedes hacer click para ver más detalles sobre mí

    <!--
        Poner aqui las tarjetas de ineteres, que van a ser modals en un overflow infinito
        Estetica: los botones de mclaren irregular
            - Skills
            - Empleos
            - Aptitudes
            - Setup ( borde punteado )
    -->

    <div class="flex overflow-clip overflow-x-visible space-x-8">
        <div id="left" class="absolute w-screen z-0 h-32 bg-stripeLeft filter-svg"></div>
        <div id="right" class="absolute right-0 w-screen z-0 h-32 bg-stripeLeft filter-svg"></div>
        <!-- Un Loop For > que realice un listado de las opciones mostradas -->
        {#each aptitude as item, i }
            <button type="button" class="card relative flex items-center justify-center m-3 overflow-hidden shadow-xl w-36 h-52 md:w-60 md:h-72 font-grotesk text-gray-50 hover:text-fluro-papaya"
                data-bs-toggle="modal" data-bs-target="#exampleModalScrollable" on:click={handleClickCard}>
                <div class="zoom-image absolute w-full h-full transition-all duration-500 ease-in-out transform bg-center bg-cover { item.background }"></div>
                {#if item.name === 'SetUp'}
                    <h1 class="zoom-text absolute text-2xl md:text-3xl xl:text-5xl font-black transition-all duration-500 ease-in-out 
                        transform scale-150 opacity-60">
                        { item.name.slice(0,3) }
                        <br>
                        { item.name.slice(-2) }
                    </h1>
                {:else}
                <h1 class="zoom-text absolute text-2xl md:text-3xl xl:text-5xl font-black transition-all duration-500 ease-in-out 
                    transform scale-150 opacity-60">
                    { item.name }
                </h1>
                {/if}
                
            </button>
        {/each}
    </div>
</div>

<Modal {source} />

<script>

import { tick } from "svelte";

// Components
import Modal from '../modal.svelte';

// Styled SCSS
import '../../styles/card.scss';

// > Get the data
let source = `
# This is a header

This is a paragraph.

* This is a list
* With two items
  1. And a sublist
  2. That is ordered
    * With another
    * Sublist inside

| And this is | A table |
|-------------|---------|
| With two    | columns |`;

let aptitude = [
    { id: 1, name: 'Skills', source: source, background: 'bg-laptop'  },
    { id: 2, name: 'Empleos', source: source, background: 'bg-laptop'},
    { id: 3, name: 'Aptitudes', source: source, background: 'bg-laptop'},
    { id: 4, name: 'Hobbies', source: source, background: 'bg-laptop'},
    { id: 5, name: 'SetUp', source: source, background: 'bg-laptop'}
]

async function handleClickCard() {
    await handleUpdateModalStyled();
}

// > Delete the className of modal-backdrop
async function handleUpdateModalStyled() {
    await tick();
    let element = document.getElementsByClassName('modal-backdrop');
    element[0].parentNode.removeChild(element[0]);
}

</script>

<style>
.filter-svg {
    filter: invert(42%) sepia(7%) saturate(14%) hue-rotate(18deg) brightness(99%) contrast(86%);
}
</style>