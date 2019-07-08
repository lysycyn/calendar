import range from 'lodash/range';
import React from 'react';

import Bem from '../../helpers/Bem/Bem';
import { getDatesColorsKey } from '../../helpers/Calendar/Calendar';
import { DaysColorsInfo, MonthType } from '../../typings';
import TableDay from '../TableDay/TableDay';

import './Table.css';

export interface TableProps {
    currentMonth: number;
    currentYear: number;
    daysInCurrentMonths: number;
    daysInPrevMonths: number;

    firstDayInWeek?: number;
    datesColors: DaysColorsInfo;
    onDayClick: (day: number, monthType?: MonthType) => void;
    activeDay?: number;
}

const BLOCK = 'table';

export default class Table extends React.Component<TableProps> {
    render() {
        const { firstDayInWeek } = this.props;

        return (
            <div className={BLOCK}>
                {firstDayInWeek !== undefined
                    ? this.renderTable()
                    : this.renderError()}
            </div>
        );
    }

    private renderTable() {
        const { firstDayInWeek, daysInCurrentMonths } = this.props;
        const lastWeek = (firstDayInWeek! + daysInCurrentMonths) % 7;
        const leftDaysForNextMonth = lastWeek ? 7 - lastWeek : 0;

        return (
            <>
                {firstDayInWeek !== 0 && this.renderPrevMonthDays()}
                {this.renderCurrentMonthDays()}
                {leftDaysForNextMonth !== 0 &&
                    this.renderNextMonthDays(leftDaysForNextMonth)}
            </>
        );
    }

    private renderError() {
        return (
            <div className={Bem.cls(BLOCK, 'error')}>
                Ошибка при рендере компонента. Год: {this.props.currentYear},
                Месяц: {this.props.currentMonth}
            </div>
        );
    }

    private renderPrevMonthDays() {
        const { firstDayInWeek, daysInPrevMonths } = this.props;

        return range(firstDayInWeek!).map((item: number, index: number) => {
            const day = daysInPrevMonths - (firstDayInWeek! - index - 1);

            return (
                <TableDay
                    key={index}
                    day={day}
                    isPrev={true}
                    onClickDay={this.props.onDayClick}
                />
            );
        });
    }

    private renderCurrentMonthDays() {
        const {
            daysInCurrentMonths,
            activeDay,
            datesColors,
            currentMonth,
            currentYear
        } = this.props;

        return range(daysInCurrentMonths).map((item: number, index: number) => {
            const day = index + 1;

            return (
                <TableDay
                    key={index}
                    day={day}
                    isActive={day === activeDay}
                    onClickDay={this.props.onDayClick}
                    color={
                        datesColors[
                            getDatesColorsKey(day, currentMonth, currentYear)
                        ]
                    }
                />
            );
        });
    }

    private renderNextMonthDays(daysLeft: number) {
        return range(daysLeft).map((item: number, index: number) => {
            const day = index + 1;

            return (
                <TableDay
                    key={index}
                    day={day}
                    isNext={true}
                    onClickDay={this.props.onDayClick}
                />
            );
        });
    }
}
