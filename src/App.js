import {PDFViewer} from '@react-pdf/renderer'
import './App.css';
import Invoice from "./components/reports/Invoice";
import invoice from "./data/invoice";

function App() {
  return (
    <>
      <PDFViewer width='1000' height='600' className='app'>
        <Invoice invoice={invoice} />
      </PDFViewer>
    </>
  );
}

export default App;
