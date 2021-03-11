const { getAllSystems } = require("./utils")
const { destinationLookup } = require("../db/rawSystems")

describe('getAllSystems', () => { 
    describe('Functionality', () => {
        it('returns an array', () => {
            const input = {};
            expect(Array.isArray(getAllSystems(input))).toBe(true);
        });
        it('returns an array of origin systems when 1 pair is input', () => {
            const input = { '0P9Z-I': 'Daras' }
            expect(getAllSystems(input)).toEqual(['0P9Z-I'])
        })
        it('returns an array with multiple origin systems when many pairs are input', () => {
            const input = {
                '0P9Z-I': 'Daras',
                '1G-MJE': 'Daras',
                '1IX-C0': 'Iitanmadan',
                '2B7A-3': 'Iitanmadan',
                '3-N3OO': 'Daras',
                '3-TD6L': 'Daras'
            };
            expect(getAllSystems(input)).toEqual(
                [
                    '0P9Z-I',
                    '1G-MJE',
                    '1IX-C0',
                    '2B7A-3',
                    '3-N3OO',
                    '3-TD6L'
                ]
            );
        });
        it('returns all the systems from the rawSystems data', () => {
            expect(getAllSystems(destinationLookup).length).toBe(3294)
        })
    });
    describe('Mutation', () => {
        it('does not mutate the input object', () => {
            const input = {
                '0P9Z-I': 'Daras',
                '1G-MJE': 'Daras',
                '1IX-C0': 'Iitanmadan',
                '2B7A-3': 'Iitanmadan',
                '3-N3OO': 'Daras',
                '3-TD6L': 'Daras'
            };
            const copyOfInput = {
                '0P9Z-I': 'Daras',
                '1G-MJE': 'Daras',
                '1IX-C0': 'Iitanmadan',
                '2B7A-3': 'Iitanmadan',
                '3-N3OO': 'Daras',
                '3-TD6L': 'Daras'
            };
            getAllSystems(input)
            expect(input).toEqual(copyOfInput)
        })
        it('returns an array with a different reference to the input', () => {
            const input = {
                '0P9Z-I': 'Daras',
                '1G-MJE': 'Daras',
                '1IX-C0': 'Iitanmadan',
                '2B7A-3': 'Iitanmadan',
                '3-N3OO': 'Daras',
                '3-TD6L': 'Daras'
            };
            expect(getAllSystems(input)).not.toBe(input)
        })
        it('returns the same value everytime', () => {
            const input = {
                '0P9Z-I': 'Daras',
                '1G-MJE': 'Daras',
                '1IX-C0': 'Iitanmadan',
                '2B7A-3': 'Iitanmadan',
                '3-N3OO': 'Daras',
                '3-TD6L': 'Daras'
            };
            expect(getAllSystems(input)).toEqual(
                [
                    '0P9Z-I',
                    '1G-MJE',
                    '1IX-C0',
                    '2B7A-3',
                    '3-N3OO',
                    '3-TD6L'
                ]
            );
            expect(getAllSystems(input)).toEqual(
                [
                    '0P9Z-I',
                    '1G-MJE',
                    '1IX-C0',
                    '2B7A-3',
                    '3-N3OO',
                    '3-TD6L'
                ]
            );
            expect(getAllSystems(input)).toEqual(
                [
                    '0P9Z-I',
                    '1G-MJE',
                    '1IX-C0',
                    '2B7A-3',
                    '3-N3OO',
                    '3-TD6L'
                ]
            );
        })
    })
});