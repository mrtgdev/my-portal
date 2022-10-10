
<!-- Main Layout -->
<div id="container">

  <!-- Noise Background -->
  <Back />

  <!-- Pagination -->
  <Pagination />

  <!-- Sections -->
  <main class="noise">
    <Parallax sections={4} config={{ stiffness: 0.2, damping: 0.3 }}>
      <StickyLayer offset={{ top:0, bottom: 1 }}
        style="display:flex; justify-content: center; align-items: center; min-height: 80vh;" >
        <HomeSection />
      </StickyLayer>
      <StickyLayer offset={{ top: 1, bottom: 2 }} 
        style="display:flex; justify-content: center; align-items: center; min-height: 100vh;" >
        <AboutSection />
      </StickyLayer>
      <StickyLayer offset={{ top: 2, bottom: 3 }} 
        style="display:flex; justify-content: center; align-items: center; min-height: 100vh;" >
        <ProjectSection />
      </StickyLayer>
      <StickyLayer offset={{ top: 3, bottom: 6 }} 
        style="display:flex; justify-content: center; align-items: center; min-height: 100vh;" >
        <ContactSection />
      </StickyLayer>
    </Parallax>
  </main>

  <!-- Footer -->
  <Footer />
</div>

<script>

import { Parallax, StickyLayer } from 'svelte-parallax';

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
