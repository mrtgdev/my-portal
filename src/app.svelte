
<!-- Main Layout -->
<div id="container">

  <!-- Noise Background -->
  <Back />

  <!-- Pagination -->
  <Pagination />

  <!-- Sections -->
  <main class="noise">
    <Parallax sections={4} config={{ stiffness: 0.2, damping: 0.3 }} style="z-index: 0;">
      <ParallaxLayer offset={0}
        style="display:flex; justify-content: center; align-items: center; min-height: 80vh;" >
        <HomeSection />
      </ParallaxLayer>
      <ParallaxLayer offset={1} 
        style="display:flex; justify-content: center; align-items: center; min-height: 100vh;" >
        <AboutSection />
      </ParallaxLayer>
      <ParallaxLayer offset={2} 
        style="display:flex; justify-content: center; align-items: center; min-height: 100vh;" >
        <ProjectSection />
      </ParallaxLayer>
      <ParallaxLayer offset={3} 
        style="display:flex; justify-content: center; align-items: center; min-height: 100vh;" >
        <ContactSection />
      </ParallaxLayer>
    </Parallax>
  </main>

  <!-- Footer -->
  <Footer />
</div>

<script>

import { Parallax, ParallaxLayer } from 'svelte-parallax';

// Components
import Back from './lib/back.svelte';
import Pagination from './lib/pagination.svelte';
import Footer from './lib/footer.svelte';

// Section
import HomeSection from './lib/sections/home.svelte';
import AboutSection from './lib/sections/about.svelte';
import ProjectSection from './lib/sections/projects.svelte';
import ContactSection from './lib/sections/contact.svelte';

// Styles SCSS
import './styles/background.scss';

</script>
