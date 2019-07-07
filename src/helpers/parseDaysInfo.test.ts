import {parseDaysInfo} from "./Calendar";
import {DayInfo, MonthInfo} from "../typings";

describe('parseDaysInfo', () => {
    it('empty dates return empty object', () => {
        expect(
            parseDaysInfo()
        ).toEqual({});
    });

    it('wrong dates info return empty object', () => {
        const info: Array<DayInfo> = [
            {
                date: 'werwerwer',
                color: 'sdfdsf'
            },
            {
                date: 'werwerwer',
                color: 'sdfdsf'
            }
        ];


        expect(
            parseDaysInfo(info)
        ).toEqual({});
    });

    it('someone wrong date erases from result', () => {
        const info: Array<DayInfo> = [
            {
                date: 'werwerwer',
                color: 'sdfdsf'
            },
            {
                date: '10.12.2015',
                color: '#ffffff'
            }
        ];


        expect(
            parseDaysInfo(info)
        ).toEqual({
            '10.12.2015': '#ffffff'
        });
    });

    it('someone empty color erases from result', () => {
        const info: Array<DayInfo> = [
            {
                date: '11.12.2015',
            },
            {
                date: '10.12.2015',
                color: '#ffffff'
            }
        ];

        expect(
            parseDaysInfo(info)
        ).toEqual({
            '10.12.2015': '#ffffff'
        });
    });

    it('someone empty color erases from result', () => {
        const info: Array<DayInfo> = [
            {
                date: '11.12.2015',
                color: '#ffffff'
            },
            {
                date: '10.12.2015',
                color: '#ffffff'
            }
        ];

        expect(
            parseDaysInfo(info)
        ).toEqual({
            '10.12.2015': '#ffffff',
            '11.12.2015': '#ffffff'
        });
    });
});