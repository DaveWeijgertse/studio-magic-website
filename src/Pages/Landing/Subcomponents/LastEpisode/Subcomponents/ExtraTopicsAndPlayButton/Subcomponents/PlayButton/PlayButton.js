import React from 'react';
import i18n from 'i18n-react';


const PlayButton = ({url}) => (
    <a
        href={url}
        target="_blank"
    >
        {i18n.translate('listen')}
    </a>
);

export default PlayButton;
