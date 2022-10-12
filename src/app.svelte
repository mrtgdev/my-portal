
<!-- Main Layout -->
<div id="container">

  <!-- Pagination -->
  <Pagination />

  <!-- Sections -->
  <main class="noise">
    <Parallax sections={3.25} config={{stiffness: 0.1, damping: 0.8}} style="z-index: 0;">
      <ParallaxLayer offset={0} style="display:flex; justify-content: center; align-items: center; min-height: 100vh;" >
        <HomeSection />
      </ParallaxLayer>
      <div class="flex justify-center items-center h-screen z-0"></div>
      <AboutSection class="flex justify-center items-center min-h-screen z-0" />
      <ProjectSection class="flex justify-center items-center min-h-screen z-0" />
      <ContactSection class="flex justify-center items-center min-h-screen z-0" />
    </Parallax>
  </main>

  <!-- Footer -->
  <Footer />
</div>

<script>

import { Parallax, ParallaxLayer } from 'svelte-parallax';

// Components
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
