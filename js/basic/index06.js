import num from './index07';
// import {ram,color} from './index08';
import * as main from './index08'
//default
num('welcome');
//이름
// ram('javascript');

//fam,color
// console.log(color.name)

//*as
console.log(main);
console.log(main.color.name);
console.log(main.default);
main.ram(10);