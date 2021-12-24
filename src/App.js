import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Card from "./Card";
import Heading from "./Heading"
import CData from "./CData";


function App() {
  return (
    <>
  <Heading/>
  {CData.map((val) =>
    
  <Card
    imgsrc={val.imgsrc}
    title={val.title}
    text={val.text}
    link={val.link}
    />

  )}
  

{/* <Card
  imgsrc={CData[1].imgsrc}
  title={CData[1].title}
  text={CData[1].text}
  link={CData[1].link}
  />

  <Card
  imgsrc={CData[2].imgsrc}
  title={CData[2].title}
  text={CData[2].text}
  link={CData[2].link}
  />

<Card
  imgsrc={CData[3].imgsrc}
  title={CData[3].title}
  text={CData[3].text}
  link={CData[3].link}
  />

<Card
  imgsrc={CData[4].imgsrc}
  title={CData[4].title}
  text={CData[4].text}
  link={CData[4].link}
  />

<Card
  imgsrc={CData[5].imgsrc}
  title={CData[5].title}
  text={CData[5].text}
  link={CData[5].link}
  />
   */}
  </>
  );
}

export default App;
// C:\Users\SAAD\Desktop\TVFlix\tv_flix\node_modules\bootstrap\dist\css\bootstrap.min.css