import SithActions from '../stores/siths';

function Buttons() {
    return { render: render };

    function render(refresh) {
        return (
            ['div', { 'class': 'css-scroll-buttons' },
                ['button', {
                    'class': 'css-button-up',
                    'onclick': SithActions.scrollUp
                }],
                ['button', {
                    'class': 'css-button-down',
                    'onclick': SithActions.scrollDown
                }]]
        );
    }
}

export default Buttons;
