// Беремо значення від користувача (число або рядок)
let numOrStr = prompt('input number or string');
console.log(numOrStr);

// switch(true) — перевіряємо умови по черзі, спрацює перший case, що дорівнює true
switch (true) {
  case numOrStr === null:
    console.log('ви скасували');
    break;

  case numOrStr.trim() === '':
    console.log('Empty String');
    break;

  case isNaN(+numOrStr):
    console.log(' number is Ba_NaN');
    break;

  default:
    console.log('OK!');
}