import { isBissectYear } from './Calendar';

describe('isBissectYear', () => {
    it('2000 => true', () => {
        expect(isBissectYear(2000)).toEqual(true);
    });

    it('2004 => true', () => {
        expect(isBissectYear(2004)).toEqual(true);
    });

    it('1900 => false', () => {
        expect(isBissectYear(1900)).toEqual(false);
    });

    it('2100 => false', () => {
        expect(isBissectYear(2004)).toEqual(true);
    });

    it('2104 => true', () => {
        expect(isBissectYear(2104)).toEqual(true);
    });

    it('2108 => true', () => {
        expect(isBissectYear(2108)).toEqual(true);
    });

    it('2016 => true', () => {
        expect(isBissectYear(2016)).toEqual(true);
    });

    it('1600 => true', () => {
        expect(isBissectYear(1600)).toEqual(true);
    });

    it('1991 => false', () => {
        expect(isBissectYear(1991)).toEqual(false);
    });
});
