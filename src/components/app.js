import PlanetMonitor from './planet';

function App(emit, refresh) {
    return { render: render };

    function render({PlanetStore}) {
        return (
            ['div', { 'class': 'css-root' },
               [PlanetMonitor, PlanetStore]]
        );
    }
}

export default App;
