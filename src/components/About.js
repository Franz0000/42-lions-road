
import { tours } from '../data'
import Title from './Title';
var latestImage = tours.length - 1;
const About = () => {
  return (
    <section className='section' id='about'>
      <Title title='about' subTitle='us' />

      <div className='section-center about-center'>
        <div className='about-img'>
          <img src={tours[latestImage].image} className='about-photo' alt='awesome beach' />
        </div>
        <article className='about-info'>
          <h3>Nick & Yolyn</h3>
          <p>
          In the symphony of our love, every note resonates with the sweet melody of togetherness. From the quiet moments of understanding to the crescendo of shared laughter, we compose a beautiful tale of 'us.' Hand in hand, heart to heart, our journey is an exquisite masterpiece, painted with the colors of affection and trust. Through the pages of time, our story unfolds, a narrative of resilience, growth, and unwavering commitment. In the book of love, we are the authors, and our story is a testament to the extraordinary bond we share. Here's to us, writing our own happily ever after. 💑💖 #LoveStory #ForeverUs
          </p>
          <a href='#home' className='btn'>
            read more
          </a>
        </article>
      </div>
    </section>
  );
};
export default About;
