import './App.css';
import Header from './MyComponents/Header';
import {Footer} from './MyComponents/Footer';
import {Todos} from './MyComponents/Todos';


function App() {
  let todos = [
    {
      sno:1, 
      title: "Go to Market 1", 
      desc: "Need to go to market to buy vegetables1"
    }, 
    {
      sno:2, 
      title: "Go to Market 2", 
      desc: "Need to go to market to buy vegetables2"
    }, 
    {
      sno:3, 
      title: "Go to Market 3", 
      desc: "Need to go to market to buy vegetables3"
    }
  ]
  return (
    <>
      <Header title = "MyToDoList" searchBar={false}/>
      <Todos todos = {todos}/>
      <Footer/>
    </>
  );
}

export default App;
