import Hoverboard from 'hoverboard';
import request from 'superagent';

const SITH_URL_BASE = 'http://localhost:3000/dark-jedis';

let SithStore = Hoverboard({
    getInitialState() {
        let sidious = request
            .get(SITH_URL_BASE + '/3616')
            .end(SithStore.receiveSith);

        return {
            siths: [],
            activeRequests: [sidious],
        };
    },

    onReceiveSith(err, res) {
        let newSiths = this.state.siths.slice(0);
        let newActiveRequests = this.state.activeRequests.slice(0);
        newActiveRequests.splice(newActiveRequests.indexOf(res.req), 1);

        let sith = JSON.parse(res.text);
        newSiths.push(sith);

        this.setState({
            activeRequests: newActiveRequests,
            siths: newSiths
        });
    }
});

export default SithStore;
