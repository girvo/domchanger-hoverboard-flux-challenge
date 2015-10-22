import Hoverboard from 'hoverboard';
import PlanetStore from './planet';
import SithStore from './siths';

let AppStore = Hoverboard({
    getInitialState() {

        let listenToStores = () => {
            let planetState = PlanetStore.getState();
            let sithState = SithStore.getState();

            this.setState({
                PlanetStore: planetState,
                SithStore: sithState,
            });
        };

        PlanetStore.getState(listenToStores);
        SithStore.getState(listenToStores);

        return {
            PlanetStore: {},
            SithStore: {},
        };
    }
});

export default AppStore;
