console.log('import something here');
import q from './00_types';
import {forLoop} from './01_var';
import {someArrow, someConst} from './02_modules';
import {superBigObject} from "./04_destruct";

q();

forLoop();
console.log(someConst);
console.log(someArrow(5));


function q(bigObject) {
    //destructuring done using {}
    const {cars: [{id}, {}, q = 2]} = superBigObject;
    return q;
}