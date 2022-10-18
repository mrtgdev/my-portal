
<!-- About Section -->
<div class="flex flex-col gap-6 w-screen bg-green-400 h-full justify-center items-center font-grotesk space-y-4 px-8">
    <div class="flex flex-col py-12 w-full space-y-6">
        {#each aptitude as item, i }
            <div>
                <h1>
                    { item.name }
                </h1>
            </div>
            <div id="markdown">
                { @html item.source }
            </div>
        {/each}
    </div>
</div>

<script>
// @ts-nocheck

// Markdowns
import { html as Experience } from '../markdown/experience.md'; 
import { html as Explore } from '../markdown/explore.md';
import { html as Skills } from '../markdown/skills.md';
import { html as Hobbies } from '../markdown/hobbies.md';
import { html as SetUp } from '../markdown/setup.md';

// Styled SCSS
import '../../styles/accordion.scss';

let aptitude = [
    { id: 'experience', name: 'Experiencia Laboral', source: Experience },
    { id: 'explore', name: 'Aptitudes', source: Explore },
    { id: 'skills', name: 'Skills', source: Skills },
    { id: 'hobb', name: 'Hobbies', source: Hobbies },
    { id: 'setup', name: 'Set Up', source: SetUp }
];

</script>