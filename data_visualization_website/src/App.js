import './App.scss';
import Header from './Components/Header';
import Body from './Components/Body';
import { FileContextProvider } from './Components/FileContext.js';
function App() {
  return (
    <>
      <Header/>
      <FileContextProvider><Body/></FileContextProvider>    
    </>
  );
}

export default App;
