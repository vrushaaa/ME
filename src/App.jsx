import './App.css' ;
import { LoadingScreen } from './components/LoadingScreen';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <LoadingScreen/>
    </>
  )
}

export default App
