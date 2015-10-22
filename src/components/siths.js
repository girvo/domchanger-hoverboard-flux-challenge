function SithList() {
    return { render: render };

    function render(SithStore) {
        console.log(SithStore);
        return (
            ['section', { 'class': 'css-scrollable-list' },
                ['ul', { 'class': 'css-slots' },
                    SithStore.siths.map((sith) => {
                        return (
                            ['li', { 'class': 'css-slot' },
                                ['h3', sith.name],
                                ['h6', 'Homeworld: ' + sith.homeworld.name]]
                        );
                    })]]
        );
    }
}

export default SithList;
