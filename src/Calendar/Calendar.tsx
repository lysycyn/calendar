import React from 'react';

import { MONTHS } from '../constants/Constants';
import Bem from '../helpers/Bem/Bem';
import {
    getDaysInMonths,
    getDaysInPrevMonths,
    getFirstWeekDayInMonth,
    parseCurrentMonthInfo,
    parseDaysInfo
} from '../helpers/Calendar/Calendar';
import { DayInfo, DaysColorsInfo, MonthType } from '../typings';

import './Calendar.css';
import Header from './Header/Header';
import Table from './Table/Table';
import { Week } from './Week/Week';

export interface CalendarProps {
    startMonth?: string;
    dates?: Array<DayInfo>;
}

export interface CalendarState {
    currentMonth: number;
    currentYear: number;
    datesColors: DaysColorsInfo;

    activeDay: number;
    activeDayMonth: number;
    activeDayYear: number;
}

const BLOCK = 'calendar';

export default class Calendar extends React.Component<
    CalendarProps,
    CalendarState
> {
    constructor(props: CalendarProps) {
        super(props);

        const { month, year } = parseCurrentMonthInfo(props.startMonth);
        const datesColors = parseDaysInfo(props.dates);

        this.state = {
            currentMonth: month,
            currentYear: year,
            datesColors,
            activeDayMonth: month,
            activeDayYear: year,
            activeDay: 1
        };
    }

    render() {
        return (
            <div className={BLOCK}>
                {this.renderHeader()}
                <Week cls={Bem.cls(BLOCK, 'week')} />
                {this.renderTable()}
            </div>
        );
    }

    private renderHeader() {
        const { currentYear, currentMonth } = this.state;
        const text = `${MONTHS[currentMonth - 1]} ${currentYear}`;

        return (
            <Header
                cls={Bem.cls(BLOCK, 'header')}
                onNextClick={this.onNextMonthClick}
                onPrevClick={this.onPrevMonthClick}
                text={text}
            />
        );
    }

    private onNextMonthClick = () => {
        if (this.state.currentMonth === 12) {
            const newYear = this.state.currentYear + 1;
            this.setState({
                currentMonth: 1,
                currentYear: newYear
            });
            console.log(`Выбран следующий месяц: ${MONTHS[0]} ${newYear}`);
        } else {
            const newMonth = this.state.currentMonth + 1;
            this.setState({ currentMonth: newMonth });
            console.log(
                `Выбран следующий месяц: ${MONTHS[newMonth - 1]} ${
                    this.state.currentYear
                }`
            );
        }
    };

    private onPrevMonthClick = () => {
        if (this.state.currentMonth === 1) {
            const newYear = this.state.currentYear - 1;

            this.setState({
                currentMonth: 12,
                currentYear: newYear
            });
            console.log(`Выбран предыдущий месяц: ${MONTHS[11]} ${newYear}`);
        } else {
            const newMonth = this.state.currentMonth - 1;
            this.setState({ currentMonth: newMonth });
            console.log(
                `Выбран предыдущий месяц: ${MONTHS[newMonth - 1]} ${
                    this.state.currentYear
                }`
            );
        }
    };

    private onDayClick = (day: number, monthType?: MonthType) => {
        console.log(`Выбран день: ${day}`);
        switch (monthType) {
            case MonthType.NEXT_MONTH:
                this.onNextMonthClick();
                break;
            case MonthType.PREV_MONTH:
                this.onPrevMonthClick();
                break;
            default:
                break;
        }
        this.setNewActiveDay(day, monthType);
    };

    private setNewActiveDay(day: number, monthType?: MonthType) {
        switch (monthType) {
            case MonthType.PREV_MONTH:
                if (this.state.activeDayMonth === 1) {
                    this.setState({
                        activeDay: day,
                        activeDayMonth: 12,
                        activeDayYear: this.state.activeDayYear - 1
                    });
                } else {
                    this.setState({
                        activeDay: day,
                        activeDayMonth: this.state.activeDayMonth - 1
                    });
                }
                break;
            case MonthType.NEXT_MONTH:
                if (this.state.activeDayMonth === 12) {
                    this.setState({
                        activeDay: day,
                        activeDayMonth: 1,
                        activeDayYear: this.state.activeDayYear + 1
                    });
                } else {
                    this.setState({
                        activeDay: day,
                        activeDayMonth: this.state.activeDayMonth + 1
                    });
                }
                break;
            default:
                this.setState({
                    activeDay: day,
                    activeDayMonth: this.state.currentMonth,
                    activeDayYear: this.state.currentYear
                });
                break;
        }
    }

    private renderTable() {
        const {
            currentYear,
            currentMonth,
            datesColors,
            activeDayYear,
            activeDay,
            activeDayMonth
        } = this.state;
        const firstDayInWeek = getFirstWeekDayInMonth(
            currentMonth,
            currentYear
        );
        const daysInCurrentMonth = getDaysInMonths(currentMonth, currentYear);

        return (
            <Table
                currentMonth={currentMonth}
                currentYear={currentYear}
                firstDayInWeek={firstDayInWeek}
                daysInCurrentMonths={daysInCurrentMonth}
                daysInPrevMonths={getDaysInPrevMonths(
                    currentMonth,
                    currentYear
                )}
                activeDay={
                    currentYear === activeDayYear &&
                    currentMonth === activeDayMonth
                        ? activeDay
                        : undefined
                }
                onDayClick={this.onDayClick}
                datesColors={datesColors}
            />
        );
    }
}
