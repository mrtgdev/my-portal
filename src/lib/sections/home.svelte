
<!-- Home Section -->
<div id="home" class="flex flex-row w-full h-full justify-start items-center font-grotesk px-12 py-24 z-50">
    <div class="bg-green-500 w-full md:w-4/5 h-full grid relative template">
        <div class="bg-blue-500 col-start-1 col-end-6 row-start-1 row-end-5 hover:font-bold 
            backdrop:transition duration-500 ease-in-out transform hover:translate-x-2 hover:scale-105 hover:z-50">
            Imagen Principal
        </div>
        <div class="bg-sky-500">Hueco</div>
        <div class="bg-slate-500">Hueco</div>
        <div class="bg-gray-600 row-start-3 row-end-5">Hueco</div>
        <div class="bg-orange-500 col-start-1 col-end-4 row-start-5 row-end-7 hover:font-bold 
            backdrop:transition duration-500 ease-in-out transform hover:translate-x-2 hover:scale-105 hover:z-50">
            Imagen Espaldas
        </div>
        <div class="bg-red-500 col-start-4 col-end-7 row-start-5 row-end-7 hover:font-bold 
            backdrop:transition duration-500 ease-in-out transform hover:translate-x-2 hover:scale-105 hover:z-50">
            Imagen DEV
        </div>
        <!-- Ajustar en el final el SVG -->
    </div>
</div>

<!-- Background  -->
<div id="back" class="w-screen h-auto absolute inset-0" style="z-index: 0;">
    <div class="absolute -right-94 -top-24 justify-center items-center z-0">
        <img class="filter-black" src={CardStripe} alt="stripes" width="60%"/>
    </div>
    <div style="position: absolute; z-index: 0;">
        <img src={Background} alt="geometry" />
    </div>
</div>

<script>

// Background
import Background from '../../assets/stripes/background-init.svg';
import CardStripe from '../../assets/stripes/card-stripe.gif';
    
</script>

<style>

.template {
    grid-template-columns: 13% 17% 21% 12.5% 23% 13.5%;
    grid-template-rows: 14% 11% 10% 30% 10% 14% 11%;
    justify-content: stretch;  
}

</style>