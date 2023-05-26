const arr = require('../practice/04_arrays');
const array1 = [92, 84, 76, 45, 96, 79, 99, 59, 52, 68, 32];
const array2 = ['Bill', 'Ted', 'Andy', 'Melissa', 'Tisha', 'Zach'];
const array3 = [4, 6, 10, 25];


// TEST 1
// REMOVE X FROM DESCRIBE TO RUN TEST //
xdescribe('first', () => {
    test('returns first element from array', () => {
        expect(arr.first(array1)).toBe(92);
        expect(arr.first(array2)).toBe('Bill');
        expect(arr.first(array3)).toBe(4);
    });
});

// TEST 2
xdescribe('howMany', () => {
    test('returns the length of an array', () => {
        expect(arr.howMany(array1)).toBe(11);
        expect(arr.howMany(array2)).toBe(6);
        expect(arr.howMany(array3)).toBe(4);
    });
});

// TEST 3
xdescribe('last', () => {
    test('returns last element from array', () => {
        expect(arr.last(array1)).toBe(32);
        expect(arr.last(array2)).toBe('Zach');
        expect(arr.last(array3)).toBe(25);
    });
});

// TEST 4
xdescribe('sum', () => {
    test('returns sum of all elements', () => {
        expect(arr.sum(array1)).toBe(782);
        expect(arr.sum(array3)).toBe(45);
    });
});

// TEST 5
xdescribe('largest', () => {
    test('returns largest number of array', () => {
        expect(arr.largest(array1)).toBe(99);
        expect(arr.largest(array3)).toBe(25);
    });
});

// TEST 6
xdescribe('addTen', () => {
    test('returns array with 10 added to each element', () => {
        expect(arr.addTen(array1)).toStrictEqual([102, 94, 86, 55, 106, 89, 109, 69, 62, 78, 42]);
        expect(arr.addTen(array3)).toStrictEqual([14, 16, 20, 35]);
    });
});

// TEST 7
xdescribe('passingGrades', () => {
    test('returns elements greater than 59', () => {
        const grades1 = [98, 49, 38, 85, 16, 60, 59]
        expect(arr.passingGrades(array1)).toStrictEqual([92, 84, 76, 96, 79, 99, 68]);
        expect(arr.passingGrades(grades1)).toStrictEqual([98, 85, 60]);
        expect(arr.passingGrades(array3)).toStrictEqual([]);
    });
});

// TEST 8
xdescribe('curve', () => {
    test('returns array with elements less than 60 incremented by 10', () => {
        const grades1 = [98, 49, 38, 85, 16, 60, 59];
        const grades2 = [69, 72, 93, 99];
        expect(arr.curve(grades1)).toStrictEqual([98, 59, 48, 85, 26, 60, 69]);
        expect(arr.curve(array1)).toStrictEqual([92, 84, 76, 55, 96, 79, 99, 69, 62, 68, 42]);
        expect(arr.curve(array3)).toStrictEqual([14, 16, 20, 35]);
        expect(arr.curve(grades2)).toStrictEqual([69, 72, 93, 99]);
    });
});

// TEST 9
xdescribe('average', () => {
    test('returns average of array rounded up', () => {
        const grades1 = [98, 49, 38, 85, 16, 60, 59];
        const grades2 = [69, 72, 93, 99];
        expect(arr.average(grades1)).toBe(58);
        expect(arr.average(grades2)).toBe(84);
    })
})