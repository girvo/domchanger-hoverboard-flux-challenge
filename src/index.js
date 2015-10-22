import domChanger from 'domchanger';
import AppComponent from './components/app';
import Flux from './stores/app';
import initWebsocket from './sources/obiwan';

// Instantiate our top-level component
let App = domChanger(AppComponent, document.querySelector('.app-container'));

// Run it!
Flux.getState((state) => {
    App.update(state);
});

initWebsocket();
