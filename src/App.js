import './App.css';
import Nav from './Components/Nav/Nav';
import HeroesFeatured from './Components/HeroesFeatured/HeroesFeatured';

function App() {
  return (
    <>
      <Nav></Nav>
      <main>
        <section className="container">
          <HeroesFeatured />
        </section>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
