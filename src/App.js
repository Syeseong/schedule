
import './App.css';
import './Detail.css';
import './Button.css'
import './Add.css'
import './Modal.css'
import DetailSchedule from './pages/DetailSchedule';
import Main from './pages/Main';
import { useSchedules } from './context/ScheduleContext';
import Modal2 from './pages/Modal2';


function App() {
  const { modalOn, modalOn2 } = useSchedules()
  return (
    <div className="App">
      <div className='main_container'>
        <Main />
      </div>
      <div className='detail_container'>
        <DetailSchedule />
      </div>
      <div className={`modal-overlay ${modalOn || modalOn2 ? 'display-block' : 'display-none'}`}></div>
    </div>
  );
}

export default App;
