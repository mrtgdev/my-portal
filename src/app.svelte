
<!-- Main Layout -->
<div id="container">
  <div class="loader">
    <div class="page-transition"></div>
  </div>
  <main class="noise">
    <!-- Pagination -->
    <Navigation />
    <!-- Sections -->
    <div id="router" class="mt-28 lg:ml-28 lg:mt-0">
        <Router {routes} />
    </div>
  </main>
  <!-- Footer -->
  <Footer />
</div>

<script>

// @ts-nocheck
import Router from 'svelte-spa-router';
import { tick } from 'svelte';



// Components
import Navigation from './lib/navigation.svelte';
import Footer from './lib/footer.svelte';

// Section
import HomeSection from './lib/sections/home.svelte';
import AboutSection from './lib/sections/about.svelte';
import ProjectSection from './lib/sections/projects.svelte';

// Styles SCSS
import './styles/background.scss';

let routes = {
  '/': HomeSection,
  '/about': AboutSection,
  '/projects': ProjectSection
};

</script>
