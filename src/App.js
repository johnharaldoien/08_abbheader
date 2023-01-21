import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Card from './components/Card/Card';
import AppData from './AppData';

function App() {
  const appDataElements = AppData.map(item => {
    return <Card 
              photo={item.photo}
              name={item.name}
              score={item.score}
              votes={item.votes}
              country={item.country}
              price={item.price} 
            />
  })
  return (
    <div className="App">
      <Navbar />
      <Hero />

      <div className='LessonList'>
        {appDataElements}
      </div>
    </div>
  );
}

export default App;
