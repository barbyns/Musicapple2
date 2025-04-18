import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Home from './pages/Home';

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-64 w-full flex flex-col min-h-screen bg-black">
        <Topbar />
        <Home />
      </div>
    </div>
  );
}

export default App;
