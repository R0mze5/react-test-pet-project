import { List, Map } from 'immutable';

const iA = List();
const iB = List();

console.log(iA.equals(iB)); // true
console.log(iA === iB); // true

let iM = Map();

iM = iM.set('a', '1');
iM = iM.set('b', '1');
iM = iM.set('c', '1');

console.log(iM.toJS());
