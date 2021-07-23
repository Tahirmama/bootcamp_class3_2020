import './App.css';
import Name from './Name'

function App() {
  return (
    <div className="App">
      <hr/>
    <h1>Using Props </h1>
<hr/>
<h2>Introduction</h2>

    <Name name = "Tahir" F_name= "Muzaffar" age = "21" sports="Cricket & Volleyball" F_plan= "Leading Businessman"/>
    <Name name = "Waseem" F_name= "Azam" age = "21" sports="Pubg" F_plan= "NAB Officer"/>
    <Name name = "Hashim" F_name= "Raza" age = "24" sports="Badminton" F_plan= "Businessman"/>
    <Name name = "Mufaddal" F_name= "Arif" age = "21" sports="Swimming" F_plan= "Biggest Engineer Of Country"/>


    </div>

);
}

export default App;
