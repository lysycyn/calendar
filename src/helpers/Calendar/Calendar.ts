import { DayInfo, DaysColorsInfo, MonthInfo } from '../../typings';

export const parseCurrentMonthInfo = (info?: string): MonthInfo => {
    const currentDay = new Date(Date.now());
    const defaultMonth: MonthInfo = {
        month: currentDay.getMonth(),
        year: currentDay.getFullYear()
    };

    if (!info) {
        return defaultMonth;
    }

    const parts = info.split('.');
    const regExp = /^-{0,1}\d+$/;

    if (
        parts.length !== 2 ||
        !parts[0].match(regExp) ||
        !parts[1].match(regExp)
    ) {
        return defaultMonth;
    }

    const month = parseInt(parts[0], 0);
    const year = parseInt(parts[1], 0);

    if (!month || month < 1 || month > 12 || !year || year < 1) {
        return defaultMonth;
    }

    return {
        month,
        year
    };
};

export const parseDaysInfo = (dates?: Array<DayInfo>): DaysColorsInfo => {
    return (dates || []).reduce(
        (acc, dayInfo) => {
            if (!dayInfo.date || !dayInfo.color) {
                return acc;
            }

            const parts = dayInfo.date.split('.');
            const regExp = /^-{0,1}\d+$/;

            if (
                parts.length !== 3 ||
                !parts[0].match(regExp) ||
                !parts[1].match(regExp) ||
                !parts[2].match(regExp)
            ) {
                return acc;
            }

            return { ...acc, [dayInfo.date]: dayInfo.color };
        },
        {} as DaysColorsInfo
    );
};

export const getFirstWeekDayInMonth = (
    month: number,
    year: number
): number | undefined => {
    const date = [month, '01', year].join('.');

    if (!Date.parse(date)) {
        return undefined;
    }

    const dateInfo = new Date(date);
    const day = dateInfo.getDay();

    return day === 0 ? 6 : day - 1;
};

export const isBissectYear = (year: number): boolean => {
    return year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0);
};

export const getDaysInMonths = (month: number, year: number): number => {
    if (month === 2) {
        return isBissectYear(year) ? 29 : 28;
    }

    return month > 7 ? (month % 2 === 0 ? 31 : 30) : month % 2 === 0 ? 30 : 31;
};

export const getDaysInPrevMonths = (month: number, year: number): number => {
    if (month === 1) {
        return getDaysInMonths(12, year - 1);
    }

    return getDaysInMonths(month - 1, year);
};

export const getDatesColorsKey = (
    day: number,
    month: number,
    year: number
): string => {
    return [
        day < 10 ? `0${day}` : day,
        month < 10 ? `0${month}` : month,
        year
    ].join('.');
};
