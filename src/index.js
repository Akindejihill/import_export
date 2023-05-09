import {choice, remove} from './helpers';
import food from './foods';

const choosened = choice(food);
const remaining = remove(food, choosened)

console.log(`I'd like one ${choosened} please`);
console.log(`Here you go: ${choosened}`);
console.log("Delicious!  May I have another");
console.log(`I'm sorry, we're all out.  We have ${remaining.length} left`);
