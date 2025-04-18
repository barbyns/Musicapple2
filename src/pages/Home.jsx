import BannerCard from '../components/BannerCard';
import Section from '../components/Section';
import MusicCard from '../components/MusicCard';
import { useDispatch } from 'react-redux';
import { setCurrentTrack } from '../features/playerSlice';


import Banner1 from '../assets/1a.png';
import Banner2 from '../assets/1b.png';
import Banner3 from '../assets/1c.png';

import Episode1 from '../assets/2a.png';
import Episode2 from '../assets/2b.png';
import Episode3 from '../assets/2c.png';
import Episode4 from '../assets/2d.png';
import Episode5 from '../assets/2e.png';
import Episode6 from '../assets/2f.png';

const Home = () => {
  const dispatch = useDispatch();

  // Dati finti per i nuovi episodi radio (puoi migliorarlo con un array dinamico)
  const radioEpisodes = [
    { id: 1, image: Episode1, title: 'Rauw Alejandro', artist: 'Cosa Nuestra' },
    { id: 2, image: Episode2, title: 'Stephan Moccio', artist: 'Feel More Radio' },
    { id: 3, image: Episode3, title: 'Michael Bublé, Carly Pearce', artist: 'Zane Lowe' },
    { id: 4, image: Episode4, title: 'Stephan Moccio', artist: 'Zane Lowe' },
    { id: 5, image: Episode5, title: 'Julia Michaels', artist: 'Chart Show' },
    { id: 6, image: Episode6, title: 'Karri & Travis Mills', artist: '' },
  ];

  const handleTrackClick = (track) => {
    dispatch(setCurrentTrack(track));
  };

  return (
    <main className="ml-64 p-8 bg-black min-h-screen text-white">
      <h1 className="text-3xl font-bold mb-6">Novità</h1>

     
      <div className="flex gap-4 mb-8">
        <BannerCard imgSrc={Banner1} text="" />
        <BannerCard imgSrc={Banner2} text="" />
        <BannerCard imgSrc={Banner3} text="" />
      </div>

   
      <Section title="Nuovi episodi radio">
        {radioEpisodes.map((episode) => (
          <div key={episode.id} className="w-40 flex-shrink-0">
            <img src={episode.image} alt={episode.title} className="rounded-lg" />
            <p className="mt-2 text-sm font-semibold truncate">{episode.title}</p>
            <p className="text-xs text-gray-400">{episode.artist}</p>
          </div>
        ))}
      </Section>

    
      <Section title="Nuove uscite">
   
      </Section>
    </main>
  );
};

export default Home;
