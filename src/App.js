import './App.css';
import '../node_modules/react-image-gallery/styles/css/image-gallery.css';
import ImageGallery from 'react-image-gallery';
import cheesecake from './assets/images/cheesecake.jpeg';
import chocolateCate from './assets/images/chocolate-cake.jpeg';
import ciderDonut from './assets/images/cider-donut.jpeg';
import cookie from './assets/images/cookie.jpeg';
import cookies from './assets/images/cookies.jpeg';
import croissant from './assets/images/croissant.jpeg';
import crossedEyes from './assets/images/crossed-eyes.jpeg';
import crossedEyes2 from './assets/images/crossed-eyes-2.jpeg';
import eatingWeddingCake from './assets/images/eating-wedding-cake.jpeg';
import iceCreamSundae from './assets/images/ice-cream-sundae.jpeg';
import notJustDessert from './assets/images/not-just-dessert.jpeg';
import nutallaPie from './assets/images/nutella-pie.jpeg';
import pancakes from './assets/images/pancakes.jpeg';
import prom from './assets/images/prom.jpeg';
import rootbeerFloat from './assets/images/rootbeer-float.jpeg';
import sharingDessert from './assets/images/sharing-dessert.jpeg';
import weddingCake from './assets/images/wedding-cake.jpeg';
import wedding from './assets/images/wedding.jpeg';

const images = [
  {
    original: cheesecake,
    thumbnail: cheesecake,
    description: 'Hi, I\'m Karl Schwirz, and let me tell you: I. Love. Cheesecake.',
  },
  {
    original: chocolateCate,
    thumbnail: chocolateCate,
    description: 'But it\'s not just cheesecake, I also love chocolate cake!',
  },
  {
    original: cookie,
    thumbnail: cookie,
    description: 'Even a cookie!',
  },
  {
    original: crossedEyes,
    thumbnail: crossedEyes,
    description: 'But if you see me like this? You know what\'s coming...',
  },
  {
    original: cookies,
    thumbnail: cookies,
    description: 'An entire tray of cookies!!',
  },
  {
    original: pancakes,
    thumbnail: pancakes,
    description: 'Or maybe some pancakes?',
  },
  {
    original: rootbeerFloat,
    thumbnail: rootbeerFloat,
    description: 'Or even a Root Beer Float',
  },
  {
    original: weddingCake,
    thumbnail: weddingCake,
    description: 'One time I had a huge party just so I could get a cake this epic',
  },
  {
    original: wedding,
    thumbnail: wedding,
    description: 'Yes, Care was there, and I love her...',
  },
  {
    original: eatingWeddingCake,
    thumbnail: eatingWeddingCake,
    description: 'But the cake! So worth it!',
  },
  {
    original: notJustDessert,
    thumbnail: notJustDessert,
    description: 'No, my whole life isn\'t just about cake. I\'m a foodie and I love to eat.',
  },
  {
    original: sharingDessert,
    thumbnail: sharingDessert,
    description: 'As I\'ve gotten older, I\'ve had to start sharing my dessert with my favorite little ones.',
  },
  {
    original: ciderDonut,
    thumbnail: ciderDonut,
    description: 'But I still love finding myself a treat, like a cider donut,',
  },
  {
    original: iceCreamSundae,
    thumbnail: iceCreamSundae,
    description: 'An ice cream sundae,',
  },
  {
    original: nutallaPie,
    thumbnail: nutallaPie,
    description: 'Or an delicious nutella pie.',
  },
  {
    original: croissant,
    thumbnail: croissant,
    description: 'I even enjoy a nice croissant.',
  },
  {
    original: crossedEyes2,
    thumbnail: crossedEyes2,
    description: 'But the one thing that always gets me looking all googley eyed...',
  },
  {
    original: prom,
    thumbnail: prom,
    description: 'Is this beaitiful wife of mine!',
  },
];

function App() {
  return (
    <div>
      <ImageGallery items={images} showPlayButton={false} />
    </div>
  );
}

export default App;
