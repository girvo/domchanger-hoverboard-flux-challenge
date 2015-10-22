import Hoverboard from 'hoverboard';
import PlanetStore from './planet';

let AppStore = Hoverboard({
    getInitialState() {
        PlanetStore.getState((planetState) => {
            this.setState({ PlanetStore: planetState });
        });

        return {
            PlanetStore: {}
        };
    },

    onUpdate(newState) {
        this.setState(newState);
    }
});

export default AppStore;
