import './App.css';
import '../node_modules/react-image-gallery/styles/css/image-gallery.css';
import ImageGallery from 'react-image-gallery';

const images = [
  {
    original: 'https://mattyungerpics.s3.amazonaws.com/matty1.jpeg',
    thumbnail: 'https://mattyungerpics.s3.amazonaws.com/matty1.jpeg',
    description: 'Hi, I\'m Matty Unger! Husband, Dog-Dad, CORNELL MBA Candidate, Meme-Sharer, but most of all: lover of airplanes, airport lounges, and everything related to airplanes and airport lounges!',
  },
  {
    original: 'https://mattyungerpics.s3.amazonaws.com/airplane3.jpeg',
    thumbnail: 'https://mattyungerpics.s3.amazonaws.com/airplane3.jpeg',
    description: 'This, my friends, is an airplane! I\'m getting a half-chubb just looking at this majestic bird',
  },
  {
    original: 'https://mattyungerpics.s3.amazonaws.com/airplane5.jpeg',
    thumbnail: 'https://mattyungerpics.s3.amazonaws.com/airplane5.jpeg',
    description: 'The tail on this airplane?! DAMN!',
  },
  {
    original: 'https://mattyungerpics.s3.amazonaws.com/lounge1.jpeg',
    thumbnail: 'https://mattyungerpics.s3.amazonaws.com/lounge1.jpeg',
    description: 'And sometimes when I fly, there are airport lounges. I feel like such a fucking boss when I sit in an airport lounge...',
  },
  {
    original: 'https://mattyungerpics.s3.amazonaws.com/airplane6.jpeg',
    thumbnail: 'https://mattyungerpics.s3.amazonaws.com/airplane6.jpeg',
    description: 'First class, yo this is bad; Drinking orange juice out of a champagne glass; Is this what the points guys lives like?; Hmm this might be alright',
  },
  {
    original: 'https://mattyungerpics.s3.amazonaws.com/cornell1.jpeg',
    thumbnail: 'https://mattyungerpics.s3.amazonaws.com/cornell1.jpeg',
    description: 'Also, I go to Cornell, like a boss. Ivy MBA!',
  },
  {
    original: 'https://mattyungerpics.s3.amazonaws.com/lucy1.jpeg',
    thumbnail: 'https://mattyungerpics.s3.amazonaws.com/lucy1.jpeg',
    description: 'This is my dog Lucy (She. Rocks.)',
  },
  {
    original: 'https://mattyungerpics.s3.amazonaws.com/matty2.jpeg',
    thumbnail: 'https://mattyungerpics.s3.amazonaws.com/matty2.jpeg',
    description: 'And my amazing wife Sabrina',
  },
  {
    original: 'https://mattyungerpics.s3.amazonaws.com/cornell2.jpeg',
    thumbnail: 'https://mattyungerpics.s3.amazonaws.com/cornell2.jpeg',
    description: 'Also, did I mention I go to Cornell?',
  },
  {
    original: 'https://mattyungerpics.s3.amazonaws.com/memes1.jpeg',
    thumbnail: 'https://mattyungerpics.s3.amazonaws.com/memes1.jpeg',
    description: 'Have you heard of Memes? Like ICanHazCheezburger cat? Well I have ALL the memes - follow me on Instagram for all memes!',
  },
  {
    original: 'https://mattyungerpics.s3.amazonaws.com/airplane1.jpeg',
    thumbnail: 'https://mattyungerpics.s3.amazonaws.com/airplane1.jpeg',
    description: 'Sitting in one plane while looking at a DIFFERENT plane? That\'s the dream!',
  },
  {
    original: 'https://mattyungerpics.s3.amazonaws.com/airplane2.jpeg',
    thumbnail: 'https://mattyungerpics.s3.amazonaws.com/airplane2.jpeg',
    description: 'That Engine? So hot right now...',
  },
  {
    original: 'https://mattyungerpics.s3.amazonaws.com/lounge2.jpeg',
    thumbnail: 'https://mattyungerpics.s3.amazonaws.com/lounge2.jpeg',
    description: 'Look at this lounge, you can see a plane from it AND there are drinks!',
  },
  {
    original: 'https://mattyungerpics.s3.amazonaws.com/airplane4.jpeg',
    thumbnail: 'https://mattyungerpics.s3.amazonaws.com/airplane4.jpeg',
    description: 'To Summarize: My life goal is to be The Points Guy (+Sabrina and Lucy, obviously)',
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
