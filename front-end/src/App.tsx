import { Form } from './components/Form';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar>
        <h1>Active Directory Password Changer</h1>
        <Form></Form>
      </Navbar>
    </div>
  );
}

export default App;
