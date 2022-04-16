import './App.css';
import Header from './Components/Header/Header';
import FitnessGoal from './Components/FitnessGoal/FitnessGoal';
import FitclubStory from './Components/FitclubStory/FitclubStory';
import Footer from './Components/Footer/Footer';

function App() {
    return (
        <div className="App">
            <Header></Header>
            <FitnessGoal></FitnessGoal>
            <FitclubStory></FitclubStory>
            <Footer></Footer>
        </div>
    );
}

export default App;
