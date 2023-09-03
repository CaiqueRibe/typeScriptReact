import './App.css';
import Header from './Header';

function App() {
  return (
    <div className="App">
      {/* <Header /> // Property 'title' is missing in type '{}' but required in type 'Props'. */}
      <Header title='This is an React APP' />
      <Header title='This is a prop Title being based down with type definition and no color ' />
      <Header title='This is a prop Title being based down with type definition w/ color' color="black" />
    </div>
  );
}

export default App;
