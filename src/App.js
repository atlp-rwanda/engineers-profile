import Routes from './routes';
import NavBar from './pages/Navbar';

const App = () => {
  return (
    <div className='min-h-screen w-full'>
      <NavBar />
      <Routes />
    </div>
  );
};

export default App;
