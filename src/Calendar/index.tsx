import React from 'react';

import { parseCurrentMonthInfo, parseDaysInfo } from '../helpers/Calendar';
import { DayInfo, DaysColorsInfo, MonthInfo } from '../typings';

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
        return <div className={'calendar'} />;
    }
}
