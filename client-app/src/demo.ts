// let data: number | string;
let data = 42;

data = 10;

export interface ICar {
    color: string;
    model: string;
    topSpeed?: number;
}

const car1: ICar = {
    color: 'blue',
    model: 'BMW'
}

const car2: ICar = {
    color: 'blue',
    model: 'Mercedes',
    topSpeed: 100
}

// 명시하지 않으면 void 
const multyply = (x: number, y: number): string => {
    return (x*y).toString();
}

export const cars = [car1, car2];