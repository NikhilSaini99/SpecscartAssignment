
import img1 from './assets/anti-glare-lenses-example-active-glare.jpg'
import img2 from './assets/anti-glare-lenses-example-normal.jpg'
import Comparing from './Comparing';
import Section1 from './Section1';
import Section2 from './Section2';
import {Routes,Route} from 'react-router-dom'

function App() {
  return (

    <Routes>
      <Route path="/" element={<Section1/>}/>
      <Route path="/Section2" element={<Section2/>}/>
      <Route path="/Section3" element={<Comparing beforeImage={img1} afterImage={img2}/>}/>
    </Routes>
  );
}

export default App;
