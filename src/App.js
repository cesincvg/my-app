import logo from './logo.svg';
import './App.css';
import LoginPage from ''

function App(){
  return(
    <Router>
      <div className = "container">
        <Header
      </div>
      </nav>
      <Routes>
        <Route path="/login" element={<login/>}/>
        <Route path="/newpage" element={<newpage/>}/>
        <Route path="/user" element={<user/>}/>
      </Routes>
    </Router>
  );
}

export default App;
