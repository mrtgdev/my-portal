
<!-- Modal -->
<div class="fixed hidden inset-0 outline-none overflow-x-hidden overflow-y-auto z-50 font-grotesk"
  id="exampleModalScrollable" tabindex="-1" aria-labelledby="exampleModalScrollableLabel" aria-hidden="true" >
  <div class="modal-dialog modal-dialog-scrollable modal-xl absolute inset-0 w-full py-12 mx-auto" 
    in:fly="{{ x: 1200, duration: 800 }}" out:fade>
    <div class="modal-content border-none shadow-lg relative flex flex-col z-50 w-full bg-black bg-clip-padding
        outline-none text-current">
      <div
        class="modal-header flex flex-shrink-0 items-center justify-between p-4 pt-8">
        <h5 class="text-xl font-semibold leading-normal text-white" id="exampleModalScrollableLabel">
          { title }
        </h5>
        <button type="button"
          class="btn-close box-content w-4 h-4 p-1 text-white border-none rounded-none opacity-50 focus:shadow-none focus:outline-none 
          focus:opacity-100 hover:opacity-75 hover:no-underline"
          data-bs-dismiss="modal" aria-label="Close">
          <i class="ri-close-circle-line" />
        </button>
      </div>
      <div class="modal-body relative p-4 text-white">
        <SvelteMarkdown {source} />
      </div>
    </div>
    <div class="absolute w-full top-0">
      <img class="filter-papaya" src={ Card } alt="" width="20%"/>
    </div>
  </div>
</div>

<script>

import { fly, fade } from 'svelte/transition';
import SvelteMarkdown from 'svelte-markdown';

// Styled SCSS
import Card from '../assets/stripes/card-stripe.gif';

let title = 'Titulo';

// > Get the Data of features
export let source;
 
</script>

<style>

.filter-papaya {
  right: 0;
  filter: invert(40%) sepia(50%) saturate(6250%) hue-rotate(6deg) brightness(106%) contrast(105%);
}

</style>