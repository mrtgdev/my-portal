
<!-- About Section -->
<div class="flex flex-col gap-6 w-screen lg:max-w-screen-xl justify-start items-center font-grotesk px-4 text-white">
    <h1>
        Me llamo Mario Ortega Palacios, soy un Full-stack Developer con más de 3 años de experiencia en este sector residiendo en Madrid.<br>
        En mi horario laboral trabajo principalmente en Java y algún framework de Javascript, aunque me encanta investigar por mi cuenta nuevos entornos y 
        lenguajes de programación para ponerme al día.
        <br>
        Si te interesa más "Mi Perfil", puedes hacer click para ver más detalles sobre mí
    </h1>

    <!--
        Poner aqui las tarjetas de ineteres, que van a ser modals en un overflow infinito
        Estetica: los botones de mclaren irregular
            - Skills
            - Empleos
            - Aptitudes
            - Setup ( borde punteado )
    -->

    <div>
        <button type="button"
            class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            data-bs-toggle="modal" data-bs-target="#exampleModalScrollable" on:click={handleClickCard}>
                Launch demo modal dialog scrollable
        </button>
    </div>
</div>

<Modal showModal />

<script>

import { tick } from "svelte";

// Components
import Modal from '../modal.svelte';

// > Variable - show modal / hidden modal
let showModal = false;

async function handleClickCard() {
    await handleUpdateModalStyled();
    showModal = !showModal;
}

// > Delete the className of modal-backdrop
async function handleUpdateModalStyled() {
    await tick();
    let element = document.getElementsByClassName('modal-backdrop');
    element[0].parentNode.removeChild(element[0]);
}

</script>