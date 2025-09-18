import './App.css'
import MyProvider from './assets/context';
import Content from './components/content';
import Header from './components/header';

function App() {
  return (
    <MyProvider>
    <div className="container-fluid">
    <div className='box'>
      <Header />
      <Content />
    </div>
    </div>
    </MyProvider>
  )
}

export default App
