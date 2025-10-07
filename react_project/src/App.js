import logo from './logo.svg';
import './App.css';
import Header from './components/Header'

export default function App() {
    const divStyle = {
      backgroundColor: '#ffffff',
      height: '100vh'
    };
    return (
      <div style={divStyle } className="App">
        <Header/>
        <main>
          <section>
    <h3>Главные причины не пить алкоголь</h3>    

    <ul>
      <li>
        <p>
          <strong>Утром не будет болеть голова</strong>
        </p>
      </li>

      <li>
        <p>
          <strong>Невкусно</strong>
        </p>
      </li>
    </ul>
      </section>
    </main>
  </div>
    );
}
