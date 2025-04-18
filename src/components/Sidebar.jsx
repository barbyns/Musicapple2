const Sidebar = () => (
    <aside className="fixed top-0 left-0 w-64 h-screen bg-black text-white flex flex-col p-4 overflow-y-auto">
      <h1 className="text-2xl font-bold mb-8">Music</h1>
  
      <input
        type="text"
        placeholder="Cerca"
        className="p-2 mb-6 rounded bg-gray-800 text-white w-full"
      />
  
      <nav className="flex flex-col gap-4">
        <button className="text-left text-lg">Home</button>
        <button className="text-left text-lg">Novità</button>
        <button className="text-left text-lg">Radio</button>
      </nav>
    </aside>
  );
  
  export default Sidebar;
  