import {Test} from './hello';
import chelsea from '../assets/Chelsea.png';

Test("Alihan");

var container = document.getElementById('container');

var image = document.createElement('img');
image.src = `/dist/${chelsea}`;
image.alt = 'image';
image.style.width = '200px';
image.style.height = '200px;'
container.appendChild(image);