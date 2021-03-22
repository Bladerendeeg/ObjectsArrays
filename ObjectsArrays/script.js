let person = {
    name: 'Henk',
    age: 33,
    evaluations: ['7', '10', '9']
};
person.name = 'Dieter';
let selection = 'age';
person[selection] = '11';

console.log(person.name);
console.log(person.age);
console.log(person.evaluations);

let colors = ['groen', 'blauw', 'rood']
colors.push('geel');
colors.push('5');
colors.push({ greeting: "Hi ik ben een object" });
console.log(colors);
console.log(colors.length);
console.log(colors[0]);
console.log(colors[colors.length - 1]);
