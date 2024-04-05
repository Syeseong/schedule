
import './App.css';
import './Detail.css';
import './Button.css'
import './Add.css'
import Header from './components/Header';
import DayBody from './components/DayBody';
import CellBody from './components/CellBody';
import DetailSchedule from './pages/DetailSchedule';
import Main from './pages/Main';


function App() {

  return (
    <div className="App">
      <div className='main_container'>
        <Main />

      </div>
      <div className='detail_container'>
        <DetailSchedule />
      </div>
    </div>
  );
}

export default App;
