const calculator = require( '../public/tests' );




describe( 'calculator ' , () => {
    it( 'должна возвращать 5 при аргументах (3, 2, "+")' , () => {
        let result = new calculator(3, 2, "+");
        expect(result.c).toBe( 5 );
    });

    it( 'должна возвращать \'Ошибочный аргумент\' при аргументах ("n", "m", "+")' , () => {
        let result = new calculator("n", "m", "+");
        expect(result.c).toBe( 'Ошибочный аргумент' );
    });

    it( 'должна возвращать \'Ошибочный аргумент\' при аргументах (null, null, "+")' , () => {
        let result = new calculator(null, null, "+");
        expect(result.c).toBe( 'Ошибочный аргумент' );
    });

    it( 'должна возвращать \'Ошибочный аргумент\' при аргументах (5, 0, "/")' , () => {
        let result = new calculator(5, 0, "/");
        expect(result.c).toBe( 'Ошибочный аргумент' );
    });

    it( 'должна возвращать false при аргументах (6, 2, 0)' , () => {
        let result = new calculator(6, 2, 0);
        expect(result.c).toBe( 'Ошибочная операция' );
    });

    it( 'должна возвращать \'Ошибочная операция\' при аргументах ()' , () => {
        let result = new calculator();
        expect(result.c).toBe( 'Ошибочная операция' );
    });
});