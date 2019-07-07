import React from 'react';
import {DayInfo, DaysColorsInfo, MonthInfo} from "../typings";
import {parseCurrentMonthInfo, parseDaysInfo} from "../helpers/Calendar";

export interface CalendarProps {
    currentMonth?: string;
    dates: Array<DayInfo>;
}

export interface CalendarState {
    currentMonth: number;
    currentYear: number;
    datesColors: DaysColorsInfo;

    activeDay?: number;
}

export default class Calendar extends React.Component<CalendarProps, CalendarState> {
    constructor(props: CalendarProps) {
        super(props);

        const {month, year} = parseCurrentMonthInfo(props.currentMonth);
        const datesColors = parseDaysInfo(props.dates)

        this.state = {
            currentMonth: month,
            currentYear: year,
            datesColors,
        };
    }

    render() {
        return (
            <div className={'calendar'}>

            </div>
        );
    }
}