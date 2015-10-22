import PlanetActions from '../stores/planet';

function init() {
    var ws = new WebSocket('ws://localhost:4000');
    ws.onmessage = receive;
    ws.onerror = (err) => {
        console.error(err);
    };
}

function receive(msg) {
    let res = JSON.parse(msg.data);
    PlanetActions.newPlanet(res);
}

export default init;
