import Hoverboard from 'hoverboard';

let PlanetStore = Hoverboard({
    getInitialState() {
        return {
            currentPlanet: {
                name: '',
                id: -1
            },
        }
    },

    onNewPlanet(planet) {
        this.setState({
            currentPlanet: planet
        })
    }
});

window.PlanetStore = PlanetStore;

export default PlanetStore
