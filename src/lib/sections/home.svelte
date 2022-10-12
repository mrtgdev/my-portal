
<!-- Home Section -->
<div id="home" class="flex flex-row gap-6 w-screen lg:max-w-screen-xl h-full justify-start items-center font-grotesk px-4">
    <div id="state" class="px-2 pt-6 space-y-2">
        <h1 class="text-xl text-fluro-papaya font-bold italic"> 
            &gt; Full Stack Developer
        </h1>
        <p class="flex text-gray-300 text-sm"> 
            Apasionado de la música, el cine, la Formula 1 y los cafés por la mañana.
        </p>
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