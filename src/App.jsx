import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Home from './pages/Home';

function App() {
  return (
    <div className="flex">
      
      <Sidebar />

    
      <div className="flex flex-col flex-1 bg-black min-h-screen">
        <Topbar />
        <Home />
      </div>
    </div>
  );
}

export default App;
