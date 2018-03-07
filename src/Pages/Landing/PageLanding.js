import React from 'react';

// Subcomponent imports
import PayOffText from './Subcomponents/PayOffText';

// Styling imports
import './PageLanding.scss';


class PageLanding extends React.Component {
    render() {
        return (
            <div>
                <PayOffText />
            </div>
        )
    }
}

export default PageLanding;
