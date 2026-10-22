import './App.css';
import SidebarAkilles from "./components/Sidebar/Sidebar";
import HeaderAkilles from './components/Header/Header';
import FeaturedGame from './components/FeaturedGame/FeaturedGame';
import GameCard from './components/GameCard/GameCard';

function App() {
  return (
    <div className="App">
      <SidebarAkilles />
      
      <div className="conteudo">
        <HeaderAkilles />

        <main>
          <FeaturedGame/>
          <GameCard/>
        </main>
      </div>
    </div>
  );
}

export default App;
