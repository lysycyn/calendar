import { getDaysInPrevMonths } from './Calendar';

describe('getDaysInMonths', () => {
    it('01.2000 => 12.1999 => 31', () => {
        expect(getDaysInPrevMonths(1, 2000)).toEqual(31);
    });

    it('03.2000 => 02.2000 => 29', () => {
        expect(getDaysInPrevMonths(3, 2000)).toEqual(29);
    });

    it('07.2000 => 06.2000 => 30', () => {
        expect(getDaysInPrevMonths(7, 2000)).toEqual(30);
    });

    it('08.2000 => 07.2000 => 31', () => {
        expect(getDaysInPrevMonths(8, 2000)).toEqual(31);
    });
});
