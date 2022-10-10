
// > main.js
// @ts-nocheck

// Styles Externals
import './styles/app.scss';
import 'remixicon/fonts/remixicon.css';

import App from './app.svelte'

const app = new App({
  target: document.getElementById('app')
});

export default app;
