import { FaHome, FaMusic, FaBroadcastTower } from 'react-icons/fa';
import { useState } from 'react';

const Sidebar = () => {
  const [active, setActive] = useState('Home');

  const menuItems = [
    { name: 'Home', icon: <FaHome /> },
    { name: 'Novità', icon: <FaMusic /> },
    { name: 'Radio', icon: <FaBroadcastTower /> },
  ];

  return (
    <aside className="fixed top-0 left-0 w-64 h-screen bg-black text-white flex flex-col p-6 shadow-lg">
    
      <h1 className="text-2xl font-bold mb-10">Music</h1>

    
      <div className="relative mb-10">
        <input
          type="text"
          placeholder="Cerca"
          className="w-full p-2 rounded-md bg-[#1c1c1e] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
        />
      </div>

    
      <nav className="flex flex-col gap-4">
        {menuItems.map((item) => (
          <button
            key={item.name}
            onClick={() => setActive(item.name)}
            className={`flex items-center gap-4 p-2 rounded-md text-lg transition-colors 
            ${active === item.name ? 'bg-[#1c1c1e] text-white' : 'hover:text-red-500'}`}
          >
            {item.icon}
            {item.name}
          </button>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
