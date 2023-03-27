import './App.css';
import Header from './components/Header'
// import Header from './components/HeaderClass'

const App = function() {
  return (
    <div className="App">
      <Header size="100" color="000000"/>
      <Header size="200" color="123456"/>
      <Header size="300" color="FFFFFF"/>
    </div>
  );
}

export default App;
