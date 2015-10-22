import PlanetMonitor from './planet';
import SithList from './siths';

function App(emit, refresh) {
    return { render: render };

    function render(AppStore) {
        return (
            ['div', { 'class': 'css-root' },
               [PlanetMonitor, AppStore.PlanetStore],
               [SithList, AppStore.SithStore]]
        );
    }
}

export default App;
