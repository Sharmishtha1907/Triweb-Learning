let num: { x: number; y: number } = { x: 1, y: 4 };
console.log(num);

let num1: { x: number; y?: number } = { x: 1 };
console.log(num1);

interface Point {
        x: number;
        y: number;
       }
    
let p1: Point = { x: 100, y: 100 };
let p1_new:Point;
    
      
type myPoint = {
    x: number;
    y: number;
}

let p2:myPoint={x:21,y:50};
    
let id:number|string;
//union

type boolandfish={
    [key:string]:boolean|"fish";
}