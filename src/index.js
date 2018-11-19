import _ from 'lodash';
import './style.css';
import Image from './test.jpg';

function component() {
  let element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');
  return element;

  var myImg = new image ();
  myImg.src = Image;
  element.appendChild(myImg);
}

  document.body.appendChild(component());
