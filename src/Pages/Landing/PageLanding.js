import React from 'react';

// Subcomponent imports
import LastEpisode from './Subcomponents/LastEpisode';
import PayOffText from './Subcomponents/PayOffText';

// Styling imports
import './PageLanding.scss';


class PageLanding extends React.Component {
    render() {
        return (
            <div>
                <PayOffText />
                <LastEpisode />
            </div>
        )
    }
}

export default PageLanding;
