import './App.css';
import SidebarAkilles from "./components/Sidebar/Sidebar";
import HeaderAkilles from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <SidebarAkilles />
      
      <div className="conteudo">
        <HeaderAkilles />

        <main>
          
        </main>
      </div>
    </div>
  );
}

export default App;
