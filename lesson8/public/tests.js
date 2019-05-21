'use strict';

class calculator {
    constructor(a, b, operation) {
        //this.a = parseInt(prompt('Выполните опрацию над числами\nВведите первое число'));
        //this.b = parseInt(prompt('Введите второе число'));
        //this.operation = prompt('Введите оператор: +, -, *, /');
        this.a = a;
        this.b = b;
        this.operation = operation;
        this.errOperator = 'Ошибочная операция'; // false
        this.errArgument = 'Ошибочный аргумент'; // false
        this.c = this.mathOperation();

    }

    sum(a, b) {
        if (typeof a == "number" && typeof b == "number") {
            let c = a + b;
            return c;
        }
        return this.errArgument; //false;
    }

    dif(a, b) {
        if (typeof a == "number" && typeof b == "number") {
            let c = a - b;
            return c;
        } else return this.errArgument; //false;
    }

    mult(a, b) {
        if (typeof a == "number" && typeof b == "number") {
            let c = a * b;
            return c;
        } else return this.errArgument; //false;
    }

    div(a, b) {
        if (typeof a == "number" && typeof b == "number" && b !== 0) {
            let c = a / b;
            return c;
        } else return this.errArgument; // false
    }


    mathOperation() {
        //let operators = ['-', '+', '/', '*'];
//
        //if (operators.indexOf(operation.trim()) == -1) return false;
        let c;

        switch (this.operation) {
            case '+':
                c = this.sum(this.a, this.b);
                break;
            case '-':
                c = this.dif(this.a, this.b);
                break;
            case '*':
                c = this.mult(this.a, this.b);
                break;
            case '/':
                c = this.div(this.a, this.b);
                break;
            default:
                c = this.errOperator;
        }
        //if (c > 0 || c <= 0)
        return c;
    }

    render() {
        return this.a + ' ' + this.operation + ' ' + this.b + ' = ' + this.c;
    }
}

//let c = new calculator(5,6,'+');
//document.write(c.render());

module.exports = calculator;
