import Hoverboard from 'hoverboard';
import request from 'superagent';

const SITH_URL_BASE = 'http://localhost:3000/dark-jedis/';

let SithStore = Hoverboard({
    getInitialState() {
        let sidious = request
            .get(SITH_URL_BASE + '3616')
            .end(SithStore.receiveSidious);

        return {
            siths: [null, null, null, null, null],
            activeMasterRequests: [sidious],
            activeApprenticeRequests: [],
        };
    },

    onReceiveSidious(err, res) {
        let newSiths = this.state.siths.slice(0);
        let newActiveMasterRequests = this.state.activeMasterRequests.slice(0);
        newActiveMasterRequests.splice(newActiveMasterRequests.indexOf(res.req), 1);

        let sith = JSON.parse(res.text);
        newSiths[0] = sith;

        this.setState({
            activeMasterRequests: newActiveMasterRequests,
            siths: newSiths
        });

        setTimeout(() => { SithStore.findApprentice(sith, this.state.siths.slice(0)) }, 0);
    },

    onReceiveMaster(newIndex, err, res) {

    },

    onReceiveApprentice(newIndex, err, res) {
        let activeApprenticeRequests = this.state.activeApprenticeRequests.slice(0);
        activeApprenticeRequests.splice(activeApprenticeRequests.indexOf(res.req), 1);

        let newSiths = this.state.siths.slice(0);
        let sith = JSON.parse(res.text);

        newSiths[newIndex] = sith;

        this.setState({
            activeApprenticeRequests: activeApprenticeRequests,
            siths: newSiths
        });

        setTimeout(() => { SithStore.findApprentice(sith, this.state.siths.slice(0)) }, 0);
    },

    onScrollUp() {
        // cancel apprentice requests that will go out of view
        let newApprenticeRequests = this.state.activeApprenticeRequests.slice(0);

        let newSiths = this.state.siths.slice(0);
        newSiths.unshift(null);
        newSiths.unshift(null);
        newSiths.pop();
        newSiths.pop();

        if (newSiths[4] === null
         && newSiths[3] !== null) {
            this.state.activeApprenticeRequests.map((req) => {
                req.abort();
                newApprenticeRequests.splice(newApprenticeRequests.indexOf(req), 1);
            });
        }

        this.setState({
            activeApprenticeRequests: newApprenticeRequests,
            siths: newSiths
        });
    },

    onScrollDown() {

    },

    onFindApprentice(sith) {
        let activeApprenticeRequests = this.state.activeApprenticeRequests.slice(0);
        let currIndex = this.state.siths.indexOf(sith);

        if (currIndex + 1 > this.state.siths.length
         || sith.apprentice.url === null) {
            return;
        }

        if (this.state.siths[currIndex + 1] === null) {
            let req = request
                .get(sith.apprentice.url)
                .end((err, res) => {
                    SithStore.receiveApprentice(currIndex + 1, err, res);
                });

            activeApprenticeRequests.push(req);

            this.setState({
                activeApprenticeRequests: activeApprenticeRequests
            });
        }
    },

    onFindMaster(sith) {

    }
});

window.SithStore = SithStore;

export default SithStore;
