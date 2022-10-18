
<!-- Footer Component -->

<!-- Current Year -->
<div class="absolute top-36 md:top-24 right-12 text-end text-gray-800 font-titleGrotesk font-black z-10
hover:text-gray-500 backdrop:transition duration-500 ease-in-out transform hover:translate-x-2 hover:scale-110">
    <h2 class="title flex-wrap">20<br>{ year }</h2>
    <i class="ri-arrow-right-up-line text-7xl" />
</div>

<!-- Text Decoration -->
<div class="absolute hidden md:flex bottom-52 right-12 w-16 h-1/3 text-gray-800 font-grotesk z-10 justify-center
    hover:text-gray-500 hover:font-bold backdrop:transition duration-500 ease-in-out transform hover:translate-x-2 hover:scale-110">
    <h2 class=" text-base orientation-vertically font-semibold flex-wrap justify-center items-center">
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. <br>
        Aperiam at eius minus? Voluptate deleniti magni recusandae."
    </h2>
</div>

<!-- Mobile Footer -->
<div class="fixed flex lg:hidden z-50 bottom-0 left-0 h-32 w-screen bg-black font-grotesk text-gray-700 justify-center items-center px-6 md:px-12">
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

<!-- Desktop -->
<div class="fixed hidden 2xl:block w-1/5 bottom-20 left-12 text-gray-700 font-grotesk font-semibold z-10 space-y-8">
    <div>
        <p>Github</p>
        <p>Github</p>
        <p>Github</p>
    </div>
    <div class="block flex-wrap w-3/5 h-8 justify-start items-center align-middle font-semibold text-xs md:text-sm">
        <p>Montado en Svelte + Vite</p>
        <p>Diseñado por Mario Ortega</p>
    </div>
    <div class="flex w-3/5 h-full align-middle items-center justify-start">
        <button id="cv" class="flex-shrink items-center border-2 p-2 px-6 border-gray-800 hover:border-neon-blue text-xs md:text-sm
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

.title {
    font-size: 4.5em;
    line-height: 0.80;
}

.orientation-vertically {
    writing-mode: vertical-rl;
    text-orientation: mixed;
}

</style>