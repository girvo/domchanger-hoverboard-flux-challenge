function PlanetMonitor() {
    return { render: render };

    function render({currentPlanet}) {
        return (
            ['h1', { 'class': 'css-planet-monitor' },
                'Obi-Wan is currently on ' + currentPlanet.name]
        );
    }
}

export default PlanetMonitor;
