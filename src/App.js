import {PDFViewer} from '@react-pdf/renderer'
import './App.css';
import Invoice from "./components/reports/Invoice";

function App() {
  return (
    <>
      <PDFViewer width='1000' height='600' className='app'>
        <Invoice />
      </PDFViewer>
    </>
  );
}

export default App;
