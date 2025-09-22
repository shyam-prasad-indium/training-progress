import './App.css'
import MyProvider from './assets/context';
import Content from './components/content';
import Header from './components/header';

function App() {
  return (
    <MyProvider>
    <div className="container">
    <div className='w-75 mx-auto box'>
      <Header />
      <Content />
    </div>
    </div>
    </MyProvider>
  )
}

export default App
