import {parseCurrentMonthInfo} from "./Calendar";
import {MonthInfo} from "../../typings";

describe('parseCurrentMonthInfo', () => {
    const date = new Date(Date.now());
    let currentMonth: MonthInfo;

    beforeEach(function() {
        currentMonth = {
            month: date.getMonth(),
            year: date.getFullYear(),
        }
    });

    it('empty date string return current day', () => {
        expect(
            parseCurrentMonthInfo()
        ).toEqual(currentMonth);
    });

    it('wrong date string return current day', () => {
        expect(
            parseCurrentMonthInfo('sdfdsfsdf')
        ).toEqual(currentMonth);
    });

    it('month info is 10.2012 return 10.2012', () => {
        expect(
            parseCurrentMonthInfo('10.2012')
        ).toEqual({
            month: 10,
            year: 2012
        });
    });

    it('month info is 10.sdfsdf2012 return current day', () => {
        expect(
            parseCurrentMonthInfo('10.sdfsdf2012')
        ).toEqual(currentMonth);
    });

    it('month info is 10.2012sdfdsf return current day', () => {
        expect(
            parseCurrentMonthInfo('10.2012sdfdsf')
        ).toEqual(currentMonth);
    });

    it('month info is 10sdfdsf.2012sdfdsf return current day', () => {
        expect(
            parseCurrentMonthInfo('10sdfdsf.2012sdfdsf')
        ).toEqual(currentMonth);
    });

    it('month info is 1sdfgsfd10.2012sdfdsf return current day', () => {
        expect(
            parseCurrentMonthInfo('1sdfdsf10.2012sdfdsf')
        ).toEqual(currentMonth);
    });

    it('month info is 0.2012 return current day', () => {
        expect(
            parseCurrentMonthInfo('0.2012')
        ).toEqual(currentMonth);
    });

    it('month info is 10.0 return current day', () => {
        expect(
            parseCurrentMonthInfo('10.0')
        ).toEqual(currentMonth);
    });

    it('month info is -10.2019 return current day', () => {
        expect(
            parseCurrentMonthInfo('-10.2019')
        ).toEqual(currentMonth);
    });

    it('month info is 10.-2019 return current day', () => {
        expect(
            parseCurrentMonthInfo('10.-2019')
        ).toEqual(currentMonth);
    });
});