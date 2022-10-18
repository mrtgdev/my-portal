
<!-- Main Layout -->
<div id="container">

  <!-- Pagination -->
  <Pagination />

  <!-- Sections -->
  <main class="noise">
    <HomeSection class="flex justify-center items-center min-h-screen z-10"/>
    <AboutSection class="flex justify-center items-center min-h-screen z-10" />
    <ProjectSection class="flex justify-center items-center min-h-screen z-10" />
    <ContactSection class="flex justify-center items-center min-h-screen z-10" />
  </main>

  <!-- Footer -->
  <Footer />
</div>

<script>

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
