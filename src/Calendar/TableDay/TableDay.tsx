import React from 'react';

import Bem from '../../helpers/Bem/Bem';
import { MonthType } from '../../typings';

import './TableDay.css';

interface TableDayProps {
    onClickDay: (day: number, monthType?: MonthType) => void;
    day: number;
    isPrev?: boolean;
    isNext?: boolean;
    isActive?: boolean;
    color?: string;
}

const BLOCK = 'table-day';

export default class TableDay extends React.PureComponent<TableDayProps> {
    render() {
        const { day, isPrev, isNext, isActive, color } = this.props;

        return (
            <div
                className={Bem.cls({
                    block: BLOCK,
                    mods: {
                        'no-active': Boolean(isPrev || isNext),
                        active: Boolean(isActive)
                    }
                })}
                onClick={this.onClick}
            >
                <span
                    className={Bem.cls(BLOCK, 'text')}
                    style={{ color: color }}
                >
                    {day}
                </span>
            </div>
        );
    }

    private onClick = () => {
        const { day, isNext, isPrev, onClickDay } = this.props;

        if (isNext) {
            onClickDay(day, MonthType.NEXT_MONTH);
        } else if (isPrev) {
            onClickDay(day, MonthType.PREV_MONTH);
        } else {
            onClickDay(day);
        }
    };
}
