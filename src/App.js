import './App.css';
import SidebarAkilles from "./components/Sidebar/Sidebar";
import HeaderAkilles from './components/Header/Header';
import FeaturedGame from './components/FeaturedGame/FeaturedGame';

function App() {
  return (
    <div className="App">
      <SidebarAkilles />
      
      <div className="conteudo">
        <HeaderAkilles />

        <main>
          <FeaturedGame/>
        </main>
      </div>
    </div>
  );
}

export default App;
