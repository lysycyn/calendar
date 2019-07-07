import classNames from 'classnames';
import React from 'react';

import { WEEK_DAYS } from '../../constants/Constants';
import Bem from '../../helpers/Bem/Bem';

import './Week.css';

const BLOCK = 'week';

export const Week = React.memo(({ cls }: { cls?: string }) => {
    return (
        <div className={classNames(BLOCK, cls)}>
            {WEEK_DAYS.map((day, index) => (
                <div key={index} className={Bem.cls(BLOCK, 'day')}>
                    {day}
                </div>
            ))}
        </div>
    );
});
