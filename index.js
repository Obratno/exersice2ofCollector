import "./index.css"
import icon from './assets/js.jpeg'

console.log('Hello World!');

const img = document.createElement('img');
img.src = icon;

const h1 = document.createElement('h1');
h1.textContent = 'I love JavaScript';

document.body.append(h1);
document.body.append(img);
