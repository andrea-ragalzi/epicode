import logo from './logo.svg';
import './App.css';
import ButtonComponent from './components/ButtonComponent.jsx'
import ImageComponent from './components/ImageComponent.jsx'

const generateRandomHexColor = (seed) => {
  const random = Math.abs(Math.sin(seed) * 16777215) % 16777215;
  const color = '#' + Math.floor(random).toString(16);
  return color;
};

const generateRandomSeed = () => {
  const date = new Date();
  const seed = date.getTime();
  return seed;
};


function App() {
  const images = [100, 200, 300];
  const colors = images.map(index => generateRandomHexColor(generateRandomSeed()));
  return (
    <div className="App">
      <h1>So mettere un bottone e ben tre immagine</h1>
      <div>
        <ButtonComponent />
      </div>
      {images.map((size, index) => (
        <ImageComponent key={index} size={size} color={colors[index]} />
      ))}
    </div>
  )
}

export default App;
