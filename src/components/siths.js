import Buttons from './buttons';

function SithList(emit, refresh) {
    return { render: render };

    function render(SithStore) {
        let empty = [];

        for (let i=0; i < 5; i++) {
            empty.push(['li', { 'class': 'css-slot' } ]);
        }

        return (
            ['section', { 'class': 'css-scrollable-list' },
                ['ul', { 'class': 'css-slots' },
                    SithStore.siths.map((sith) => {
                            return (sith === null)
                                ? ['li', { 'class': 'css-slot' }, ' ']
                                : ['li', { 'class': 'css-slot' },
                                    ['h3', sith.name],
                                    ['h6', 'Homeworld: ' + sith.homeworld.name]]
                        })],
                    [Buttons, refresh]]
        );
    }

    function isEmpty(siths) {
        let hasAny = false;

        siths.map((sith) => {
            if (sith !== null) {
                hasAny = true;
            }
        });

        return !hasAny;
    }
}

export default SithList;
