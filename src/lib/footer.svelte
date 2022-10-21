
<!-- 
    Footer Component 
-->

<!-- Current Year -->
<div class="absolute top-12 md:top-16 xl:top-20 right-12 text-end text-gray-800 font-titleGrotesk font-black z-10
hover:text-gray-500 backdrop:transition duration-500 ease-in-out transform hover:translate-y-2 hover:scale-110">
    <h2 class="text-5xl md:text-6xl lg:text-7xl flex-wrap leading-date">20<br>{ year }</h2>
    <i class="ri-arrow-right-up-line text-5xl lg:text-7xl" />
</div>

<!-- Twitter Link -->
<div class="absolute top-12 md:top-16 xl:top-20 left-12 text-end text-gray-800 font-grotesk font-black z-10
hover:text-gray-600 backdrop:transition duration-500 ease-in-out transform">
    <a class="" href="/">
        <label class="flex-wrap txet-lg font-semibold">@mrtg.dev</label>
    </a>
</div>

<!-- Logo -->
<div class="hidden absolute bottom-12 md:bottom-16 xl:bottom-20 right-12 text-end h-16 w-12 text-gray-800 font-grotesk font-black z-10
    backdrop:transition duration-500 ease-in-out transform hover:-translate-y-2 hover:scale-110">
    <a class="" href="/">
        <img src="mrtg.svg" alt="home" />
    </a>
</div>

<!-- Text Creator -->
<div class="absolute bottom-12 md:bottom-16 xl:bottom-20 left-12 w-4/12 text-gray-800 font-grotesk font-black z-10">
    <h1 class="uppercase text-start text-xs md:text-base xl:text-lg">
        Este contenido ha sido creado por 
        <b class="hover:text-fluro-papaya backdrop:transition duration-500 ease-in-out ">Mario Ortega</b>. 
        <br> 
        <b class="backdrop:transition duration-500 ease-in-out transform
            hover:scale-110 hover:translate-x-1 hover:border-b-2 hover:border-b-fluro-papaya hover:text-white">
            Montado en Svelte + Vite
        </b>
    </h1>
</div>

<!-- Mobile Footer -->
<div class="hidden z-50 bottom-0 left-0 h-32 w-screen bg-black font-grotesk text-gray-700 justify-center items-center px-6 md:px-12">
    <div class="block flex-wrap w-3/5 h-8 justify-start items-center align-middle font-semibold text-xs md:text-sm">
        <p>Montado en Svelte + Vite</p>
        <p>Diseñado por Mario Ortega</p>
    </div>
    <div class="flex w-2/5 h-full align-middle items-center justify-end">
        <button id="cv" class="flex-shrink items-center border-2 p-2 px-6 border-gray-800 hover:border-neon-blue text-xs md:text-sm xl:text-base
            hover:text-white hover:font-bold backdrop:transition duration-500 ease-in-out transform hover:-translate-y-0 hover:scale-110" >
            Descargar CV
        </button>
    </div>
</div>

<script>

// > Get the current year
let currentTime = new Date();
let year = currentTime.getFullYear().toString().slice(-2);

</script>

<style>

.leading-date {
    line-height: 0.80;
}

</style>