import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
      {/* TODO: include an icon for the quote book */}
      <Header />
      <h2>Submit a quote</h2>
      {/* TODO: implement custom form submission logic to not refresh the page */}
      <Form />
      <h2>Previous Quotes</h2>
      {/* TODO: Display the actual quotes from the database */}
      <div className="messages">
        <p>Peter Anteater</p>
        <p>Zot Zot Zot!</p>
        <p>Every day</p>
      </div>
    </div>
  );
}

export default App;
