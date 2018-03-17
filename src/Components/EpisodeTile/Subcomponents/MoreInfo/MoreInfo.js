import React from 'react';
import i18n from 'i18n-react';
import { Link } from 'react-router-dom';

import {
    ROUTE_EPISODE_DETAIL,
} from 'appUtils/routes/paths';

// Styling import
import './MoreInfo.scss';


const MoreInfo = ({id}) => (
    <div className="episode-more-info">
        <Link to={ROUTE_EPISODE_DETAIL + '/' + id}>
            {i18n.translate('more-info')}
        </Link>
    </div>
);

export default MoreInfo;
