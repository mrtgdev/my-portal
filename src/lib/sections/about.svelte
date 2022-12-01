
<!-- About Section -->
<div class="flex flex-col gap-6 w-full lg:w-11/12 bg-transparent backdrop-blur-sm justify-center items-center font-grotesk p-8 text-merino"
    in:fly={{ y: -200, delay: 640, duration: 600 }} out:fly={{ y: -200, duration: 600 }}>
    <!-- Pattern Background -->
    <!-- About Text -->
    <div class="flex flex-col space-y-24 justify-center items-center z-10">
        <div id="welcome" class="space-y-12">
            <div id="me" class="">
                <p class="text-merino">Hola! 👋, me llamo</p>
                <h1 class="title uppercase font-black font-titleGrotesk text-5xl md:text-6xl 2xl:text-7xl bg-clip-text">
                    Mario Ortega Palacios
                </h1>
            </div>
            <div class="space-y-2 justify-center items-center"> 
                <p class="text-xl text-forest font-semibold">&gt; Full-stack Developer residiendo en Madrid.</p>
                <br>
                <div class="w-11/12">
                    <strong>Apasionado del diseño y la experiencia de usuario</strong>, procuro siempre que mis desarrollos sean estables, 
                    inclusivos y accesible a cualquier persona que quiera utilizarlo.
                </div>
                <div class="">
                    En mi tiempo libre me encanta hacer cosas externas a la programación, como escuchar mis vinilos, 
                    hacer deporte y entretenerme con los resumenes de la NBA, F1…
                </div>
            </div>
        </div>
        <button id="card" class="card flex border-dashed hover:border-2 hover:border-forest p-4 hover:text-forest backdrop:transition 
            duration-300 ease-in-out transform hover:-translate-y-2 hover:scale-105 text-start"
            on:click={updateToggleMore}>
            <strong>Si te interesa mi perfil, puedes pinchar para saber más de mi</strong>
            <i class="{ more ? 'ri-arrow-right-up-line' : 'ri-arrow-right-down-line' } text-5xl lg:text-7xl " />
        </button>
        <div class="{ more ? 'block backdrop:transition duration-300 ease-in-out transform' : 'hidden' }">
            <MoreAbout />
        </div>
    </div>
</div>

<script>
// @ts-nocheck
import { push } from 'svelte-spa-router';
import { fly } from 'svelte/transition';
import { tick, afterUpdate } from 'svelte';

// Section > Modal
import MoreAbout from '../modal/more.svelte';

// Styled SCSS
import '../../styles/accordion.scss';

let more = false;

async function updateToggleMore() {
    await tick();
    more = !more;
}

afterUpdate(() => {
    console.log('Se actualiza');
});

</script>