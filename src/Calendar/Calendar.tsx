import React from 'react';

import { MONTHS } from '../constants/Constants';
import Bem from '../helpers/Bem/Bem';
import {
    parseCurrentMonthInfo,
    parseDaysInfo
} from '../helpers/Calendar/Calendar';
import { DayInfo, DaysColorsInfo, MonthInfo } from '../typings';

import Header from './Header/Header';
import { Week } from './Week/Week';

export interface CalendarProps {
    currentMonth?: string;
    dates?: Array<DayInfo>;
}

export interface CalendarState {
    currentMonth: number;
    currentYear: number;
    datesColors: DaysColorsInfo;

    activeDay?: number;
}

const BLOCK = 'calendar';

export default class Calendar extends React.Component<
    CalendarProps,
    CalendarState
> {
    constructor(props: CalendarProps) {
        super(props);

        const { month, year } = parseCurrentMonthInfo(props.currentMonth);
        const datesColors = parseDaysInfo(props.dates);

        this.state = {
            currentMonth: month,
            currentYear: year,
            datesColors
        };
    }

    render(): React.ReactNode {
        return (
            <div className={BLOCK}>
                {this.renderHeader()}
                <Week cls={Bem.cls(BLOCK, 'week')} />
            </div>
        );
    }

    private renderHeader() {
        const { currentYear, currentMonth } = this.state;
        const text = `${MONTHS[currentMonth - 1]} ${currentYear}`;

        return (
            <Header
                cls={Bem.cls(BLOCK, 'header')}
                onNextClick={this.onHeaderNextClick}
                onPrevClick={this.onHeaderPrevClick}
                text={text}
            />
        );
    }

    private onHeaderNextClick = () => {
        if (this.state.currentMonth === 12) {
            this.setState({
                currentMonth: 1,
                currentYear: this.state.currentYear + 1
            });
        } else {
            this.setState({ currentMonth: this.state.currentMonth + 1 });
        }
    };

    private onHeaderPrevClick = () => {
        if (this.state.currentMonth === 1) {
            this.setState({
                currentMonth: 12,
                currentYear: this.state.currentYear - 1
            });
        } else {
            this.setState({ currentMonth: this.state.currentMonth - 1 });
        }
    };
}
