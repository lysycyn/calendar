import {DayInfo, DaysColorsInfo, MonthInfo} from "../typings";

export const parseCurrentMonthInfo = (info?: string) : MonthInfo  => {
    const currentDay = new Date(Date.now());
    const defaultMonth:MonthInfo = {
        month: currentDay.getMonth(),
        year: currentDay.getFullYear(),
    }

    if (!info) {
        return defaultMonth;
    }

    const parts = info.split('.');
    const regExp = /^-{0,1}\d+$/;

    if (parts.length !== 2 || !parts[0].match(regExp) || !parts[1].match(regExp)) {
        return defaultMonth;
    }

    const month = parseInt(parts[0]);
    const year = parseInt(parts[1]);

    if (!month || month < 1 || month > 12 || !year || year < 1) {
        return defaultMonth;
    }

    return {
        month,
        year
    };
};

export const parseDaysInfo = (dates?: Array<DayInfo>): DaysColorsInfo => {
    return (dates || []).reduce((acc, dayInfo) => {
        if (!dayInfo.date || !dayInfo.color) {
            return acc;
        }

        const parts = dayInfo.date.split('.');
        const regExp = /^-{0,1}\d+$/;

        if (parts.length !== 3 || !parts[0].match(regExp) || !parts[1].match(regExp) || !parts[2].match(regExp)) {
            return acc;
        }

        return {...acc, [dayInfo.date]: dayInfo.color};
    }, {} as DaysColorsInfo);
}