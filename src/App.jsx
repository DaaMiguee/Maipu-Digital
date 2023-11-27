import './App.css';
import { ProductsProvider } from './context/ProductsContext';
import MainRouter from './routes/MainRouter';

const App = () => {
  return (
    <div>
      <ProductsProvider>
        <MainRouter />
      </ProductsProvider>
    </div>

  );
}

export default App;
