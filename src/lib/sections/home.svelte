<!-- Home Section -->
<div id="home" class="flex flex-col gap-6 w-screen bg-green-400 h-screen justify-center items-center font-grotesk space-y-4 px-8">
    <div class="sm:hidden">
        <!-- Imagen -->
        <Cube />
    </div>
    <div class="space-y-8">
        <div class="text-black text-2xl md:text-3xl text-start sm:w-9/12 md:w-3/5 xl:8/12 lg:text-4xl space-y-4">
            <div id="name">
                <p class="title font-titleGrotesk uppercase text-start font-black tracking-tighter">Mario Ortega</p>
            </div>
            <p><b> Soy Full Stack Developer especializado en</b> identidad y diseño de sitios web.</p>
            <p>Residiendo en Madrid.</p>
        </div>
        <div class="hidden sm:flex">
            <div id="cv" class="flex-shrink items-center p-2 px-6 hover:bg-neon-blue text-xs md:text-sm lg:text-xl
                hover:text-black hover:font-bold backdrop:transition duration-500 ease-in-out transform hover:-translate-y-0 hover:scale-110" >
                Explora mi trabajo
            </div>
        </div>
    </div>
</div>

<script>

// Animation
import Cube from "../anim/cube.svelte";
  
</script>

<style>

.title {
    font-size: 4.5em;
    line-height: 0.80;
}

</style>