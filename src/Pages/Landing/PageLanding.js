import React from 'react';

import './PageLanding.scss';


class PageLanding extends React.Component {
    render() {
        return (
            <div className="buzzsprout-container">
                <iframe
                    className="buzzsprout"
                    title="Studio Magic op Buzzsprout"
                    src="http://www.buzzsprout.com/133608"
                />
            </div>
        )
    }
}

export default PageLanding;
