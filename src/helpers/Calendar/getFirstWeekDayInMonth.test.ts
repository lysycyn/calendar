import { getFirstWeekDayInMonth } from './Calendar';

describe('isBissectYear', () => {
    it('04.1991 => 0', () => {
        expect(getFirstWeekDayInMonth(4, 1991)).toEqual(0);
    });

    it('05.1991 => 2', () => {
        expect(getFirstWeekDayInMonth(5, 1991)).toEqual(2);
    });

    it('01.2019 => 1', () => {
        expect(getFirstWeekDayInMonth(1, 2019)).toEqual(1);
    });

    it('02.2019 => 4', () => {
        expect(getFirstWeekDayInMonth(2, 2019)).toEqual(4);
    });

    it('03.2019 => 4', () => {
        expect(getFirstWeekDayInMonth(3, 2019)).toEqual(4);
    });

    it('02.2016 => 0', () => {
        expect(getFirstWeekDayInMonth(2, 2016)).toEqual(0);
    });

    it('03.2016 => 1', () => {
        expect(getFirstWeekDayInMonth(3, 2016)).toEqual(1);
    });

    it('04.2017 => 5', () => {
        expect(getFirstWeekDayInMonth(4, 2017)).toEqual(5);
    });

    it('04.2018 => 6', () => {
        expect(getFirstWeekDayInMonth(4, 2018)).toEqual(6);
    });
});
