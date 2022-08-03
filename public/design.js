const hamburger = document.getElementById('menu-icon');

const menu = document.getElementById('menu');
const homeButton = document.getElementById('homebutton')
const images = [
  'https://abeautifulmess.com/wp-content/uploads/2013/08/no-fail-boba-pearl-method.jpg',
  'https://static.onecms.io/wp-content/uploads/sites/44/2022/03/25/boba-tea-explainer.jpg',
  'https://i.pinimg.com/736x/c3/9e/1c/c39e1c54e690df4822c55522cd99427b.jpg',
  'https://i.pinimg.com/474x/fc/c0/45/fcc0455c1bac8a9a8c9be8a3b5d5704e.jpg'
  ];

function hamburgerClick() {
  console.log('click');
  const current = menu.className;
  console.log('current: ', current);
  menu.className = (current === 'open') ? 'close' : 'open';
}

hamburger.onclick = hamburgerClick;
const carousel = document.getElementById('carousel');

function populate(n)
{
  for(let i = 0; i < n; i++)
  {
    const frame = document.createElement('div');
    frame.className = 'frame';

    const title = document.createElement('img');
    title.src = `${images[i]}`;
    title.style.width = '100%';
    title.style.height = '100%';
    frame.appendChild(title);
    carousel.appendChild(frame);
  }
}

populate(4);

const lbtn = document.getElementById('lbtn');
const rbtn = document.getElementById('rbtn');

function navigate(dir)
{
  return function() {
    console.log('dir: ', dir);
    const first = Array.from(carousel.getElementsByClassName('frame'))[0];
    let offset = first.style.marginLeft;
    console.log(typeof offset, offset, offset.length);
    if (offset.length === 0 || offset === null)
    {
      offset = Number(offset);
    }
    else
    {
      offset = Number(offset.substring(0, offset.length - 2));
    }
    console.log('offset: ', offset);
    first.style.marginLeft = (dir === 'right') ? offset + 650 : offset - 650;
  
  }
}

lbtn.onclick = navigate('left');
rbtn.onclick = navigate('right');
