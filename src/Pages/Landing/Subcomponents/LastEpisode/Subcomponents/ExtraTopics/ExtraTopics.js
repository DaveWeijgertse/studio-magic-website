import React from 'react';
import i18n from 'i18n-react';

// Styling import
import './ExtraTopics.scss';


const ExtraTopics = ({extraTopics}) => (
    <div className="extra-topics-container">
        <div className="extra-topics-title">
            {i18n.translate('extra-topics')}:
        </div>
        <ul className="extra-topics-list">
            {extraTopics.map(
                (extraTopic) => {
                    return (
                        <li>{extraTopic}</li>
                    );
                }
            )}
        </ul>
    </div>
);

export default ExtraTopics;
