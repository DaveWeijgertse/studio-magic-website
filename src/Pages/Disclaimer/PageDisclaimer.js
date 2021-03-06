import React from 'react';
import i18n from 'i18n-react';

// Styling import
import './Disclaimer.scss';

class PageDisclaimer extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div className="page-disclaimer">
                <h1>{i18n.translate('disclaimer')}</h1>
                <div>
                    Wizards of the Coast, Magic: The Gathering, and their logos are trademarks of Wizards of the Coast
                    LLC in the United States and other countries. © 2020 Wizards. All Rights Reserved.
                </div>
                <div>
                    Magic: the Gathering, the mana symbols and any other official game images including card art remain
                    the property of Hasbro/Wizards of the Coast. We lay no claim of ownership to them. Any use of Magic:
                    the Gathering property including but not limited to card images, logos, or symbols, are for
                    illustrative purposes only and use of such is not to be construed as any attempt to claim any
                    official approval, support, or sponsorship from Wizards of the Coast.
                </div>
                <div>
                    Studio Magic is unofficial Fan Content permitted under the Fan Content Policy. Not approved/endorsed
                    by Wizards. Portions of the materials used are property of Wizards of the Coast.
                </div>
            </div>
        );
    }
}

export default PageDisclaimer;
