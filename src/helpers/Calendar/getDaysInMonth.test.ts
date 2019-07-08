import { getDaysInMonths } from './Calendar';

describe('getDaysInMonths', () => {
    it('01.2000 => 31', () => {
        expect(getDaysInMonths(1, 2000)).toEqual(31);
    });

    it('02.2000 => 29', () => {
        expect(getDaysInMonths(2, 2000)).toEqual(29);
    });

    it('02.2003 => 28', () => {
        expect(getDaysInMonths(2, 2003)).toEqual(28);
    });

    it('03.2003 => 31', () => {
        expect(getDaysInMonths(3, 2003)).toEqual(31);
    });

    it('04.2003 => 30', () => {
        expect(getDaysInMonths(4, 2003)).toEqual(30);
    });

    it('05.2003 => 31', () => {
        expect(getDaysInMonths(5, 2003)).toEqual(31);
    });

    it('06.2003 => 30', () => {
        expect(getDaysInMonths(6, 2003)).toEqual(30);
    });

    it('07.2003 => 31', () => {
        expect(getDaysInMonths(7, 2003)).toEqual(31);
    });

    it('08.2003 => 31', () => {
        expect(getDaysInMonths(8, 2003)).toEqual(31);
    });

    it('09.2003 => 30', () => {
        expect(getDaysInMonths(9, 2003)).toEqual(30);
    });

    it('10.2003 => 31', () => {
        expect(getDaysInMonths(10, 2003)).toEqual(31);
    });

    it('11.2003 => 30', () => {
        expect(getDaysInMonths(11, 2003)).toEqual(30);
    });

    it('12.2003 => 31', () => {
        expect(getDaysInMonths(12, 2003)).toEqual(31);
    });
});
