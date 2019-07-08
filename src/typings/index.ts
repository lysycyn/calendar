export interface DayInfo {
    date?: string;
    color?: string;
}

export interface MonthInfo {
    month: number;
    year: number;
}

export type DaysColorsInfo = Record<string, string>;

export enum MonthType {
    PREV_MONTH = 'PREV_MONTH',
    NEXT_MONTH = 'NEXT_MONTH'
}
