import '../styles/image_viewer.css';
import big from '../assets/maxresdefault.jpg';
import small from '../assets/download.png';

export default() => {

  const image = document.createElement('img');
  image.src = small;


  document.body.appendChild(image);
};