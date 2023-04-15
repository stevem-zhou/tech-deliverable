import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import Display from "./components/Display";

function App() {
  return (
    <div className="App">
      {/* TODO: include an icon for the quote book */}
      <Header />
      {/* TODO: implement custom form submission logic to not refresh the page */}
      {/* <Form /> */}
      {/* TODO: Display the actual quotes from the database */}
      <Display />
    </div>
  );
}

export default App;
