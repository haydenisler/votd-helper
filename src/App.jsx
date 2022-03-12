import './styles/App.css';
import witnessImg from './assets/witness.png';
import { RoomSymbol } from './components';

function App() {

  return (
    <main id='main'>
      <img src={witnessImg} />
      <h1>votd-helper</h1>
      <RoomSymbol />
    </main>
  )
}

export default App
