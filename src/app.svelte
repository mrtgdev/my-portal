
<!-- Main Layout -->

<!-- Fecha del portfolio -->
<div class="absolute top-24 right-12 text-7xl text-end text-gray-800 font-grotesk font-semibold z-10">
  <h2>20<br>{ year }</h2>
  <i class="ri-arrow-right-up-line" />
</div>

<div id="container">
  <Back />
  <main class="noise">
    <Parallax sections={4} config={{ stiffness: 0.2, damping: 0.3 }}>
      <ParallaxLayer>
        <div class="flex justify-center items-center py-10 md:py-0 min-h-screen px-4 bg-blue-300">
          <HomeSection />
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={1}>
        <div class="flex justify-center items-center min-h-screen px-4 bg-green-400">
          <AboutSection />
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={2}>
        <div class="flex justify-center items-center min-h-screen px-4 bg-red-400">
          <ProjectSection />
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={3}>
        <div class="flex justify-center items-center min-h-screen px-4 bg-lime-500">
          <ContactSection />
        </div>
      </ParallaxLayer>
    </Parallax>
  </main>
  <Footer />
</div>

<script>

import { fly } from 'svelte/transition';
import { Parallax, ParallaxLayer } from 'svelte-parallax';

// Components
import Back from './lib/back.svelte';
import Footer from './lib/footer.svelte';

// Section
import HomeSection from './lib/sections/home.svelte';
import AboutSection from './lib/sections/about.svelte';
import ProjectSection from './lib/sections/projects.svelte';
import ContactSection from './lib/sections/contact.svelte';

// Styles SCSS
import './styles/background.scss';

// > Get the inner height dynamic
let innerHeight = window.innerHeight;
console.log(innerHeight);

// > Get the current year
let currentTime = new Date();
let year = currentTime.getFullYear().toString().slice(-2);

</script>
