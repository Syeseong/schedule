
import './App.css';
import './Detail.css';
import './Button.css'
import './Add.css'
import Header from './components/Header';
import DayBody from './components/DayBody';
import CellBody from './components/CellBody';
import DetailSchedule from './pages/DetailSchedule';


function App() {

  return (
    <div className="App">
      <Header />
      <DayBody />
      <CellBody />
      <DetailSchedule />
    </div>
  );
}

export default App;
