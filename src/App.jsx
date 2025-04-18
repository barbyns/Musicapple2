import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Home from './pages/Home';
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex">
      
      <Sidebar />

    
      <div className="flex flex-col flex-1 bg-black min-h-screen">
        <Topbar />
        <Home />
        <Footer />
      </div>
    </div>
  );
}

export default App;
