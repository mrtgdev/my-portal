<!-- Home Section 
    - Solo aparecerá en la primera versión
    - Luego será un modal del portal
-->
<div id="home" class="flex flex-col gap-6 w-screen lg:w-10/12 bg-transparent h-screen justify-center items-center font-grotesk space-y-4 px-8">

    <!-- DIV Center -->
    <div class="w-full justify-center items-center flex flex-col h-4/5">
        <!-- Carrousel -->
        <div id="images" class="flex-wrap w-full h-full bg-green-300">

        </div>
    </div>

    <!-- Current Year -->
    <div class="absolute bottom-32 lg:bottom-12 right-12 lg:right-12 text-end text-gray-800 font-titleGrotesk font-black z-0
    hover:text-gray-500 backdrop:transition duration-500 ease-in-out transform hover:translate-y-2 hover:scale-110">
        <h2 class="text-5xl md:text-6xl lg:text-7xl flex-wrap leading-date">20<br>{ year }</h2>
        <i class="ri-arrow-right-up-line font-bold text-5xl lg:text-7xl" />
    </div>
</div>

<script>

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