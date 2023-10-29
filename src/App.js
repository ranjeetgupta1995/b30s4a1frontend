
import './App.css';
import { AllRoutes } from './routes/AllRoutes';
import { Navbar } from './routes/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />      
    </div>
  );
}

export default App;
