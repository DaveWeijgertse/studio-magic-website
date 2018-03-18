import React from 'react';
import i18n from 'i18n-react';

// Styling import
import './Schedule.scss';


const Schedule = ({ schedule }) => (
    <div className="episode-detail-container-schedule">
        <h1>{i18n.translate('time-schedule.title')}</h1>
        <div className="schedule-container">
            {schedule.map(
                (scheduleMoment) => {
                    const {
                        timestamp,
                        topic,
                    } = scheduleMoment;

                    return (
                        <div className="time-schedule">
                            <div className="time-stamp">
                                {timestamp}
                            </div>
                            <div className="topic">
                                {topic}
                            </div>
                        </div>
                    );
                }
            )}
        </div>
    </div>
);

export default Schedule;
