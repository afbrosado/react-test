import React, {useEffect, useState} from 'react';
import axios from "axios";
import './style.css';
import Quill from "./Quill";
import {MyEditor as Draft} from "./Draft";
import logo from './logo.svg';
import {Btns} from "./Btns";
import TinyMCE from "./TinyMCE";
import CkEditor from "./CkEditor";
import Tiptap from "./TipTap";
import BarcodeReader from "./BarcodeReader";
import StripeContainer from "./StripeContainer";
import {BrowserRouter as Router, Switch, Route, Redirect, useLocation} from "react-router-dom";
import Canvas from "./Canvas";
import Home from "./Home";
import Grids from "./Grids";
import ButtonsBorder from "./ButtonsBorder";
import MroApproval from "./MroApproval";
import './App.css';
import SpeechBubble from "./SpeechBubble";
import {TextField} from "@material-ui/core";
import Timer from "./Timer";
import RIRSelect from "./Select";
import ProductListing from "./Prod/ProdProductListing";
import NullDependency from "./NullDependency";
import EditTable from "./EditTable";
import DateFNSTimer from "./DateFNSTimer";
import ImageResize from "./ImageResize";
import ReactImageResize from "./ReactImageResize";
import BootStrapSwitch from "./BootStrapSwitch";
import Camera from "./Camera";

function App() {

/*  const options = ['Cartao de cidadao', 'Cartao da bibilioteca', 'I love you'];
  const [selected, setSelected] = useState(options[0]);

  useEffect(() => {
    let iframes = document.getElementsByTagName("iframe");
    console.log(iframes)
    if (iframes.length > 0)
      iframes[0].classList.add("hideIframe");
  }, []);

  useEffect(() => {
    const data = { username: "api@example.com", password: "sylius-api" };
    axios.get('https://pokeapi.co/api/v2/pokemon/15')
      .then(response => {
        console.log("here")
        console.log(response)
      })
      .catch(error => {
        console.log(error);
      });
  }, []);*/

    useEffect(() => {
        let iframes = document.getElementsByTagName("iframe");
        if (iframes.length > 0) {
            iframes[0].classList.add("hideIframe");
        }
    }, []);

  return (
    <>
     {/* <Router>
        <Switch>
          <Route exact path = "/"><DateFNSTimer/></Route>
          <Route exact path = "/home"><Home/></Route>
        </Switch>
      </Router>*/}
      {/*<EditTable/>*/}
     {/* <NullDependency/>*/}
      {/*<ProductListing/>*/}
      {/*<RIRSelect selectedValue={selected} setSelectedValue={setSelected} options={options}/>*/}
      {/*<Timer/>*/}
      {/*<SpeechBubble/>*/}
      {/*<MroApproval/>*/}
      {/*<ButtonsBorder/>*/}
      {/*<Grids/>*/}
      {/*<Router>*/}
      {/*  <Switch>*/}
      {/*    <Route exact path="/" component={Home} />*/}
      {/*    <Route exact path="/stripe" component={StripeContainer} />*/}
      {/*  </Switch>*/}
      {/*</Router>*/}
      {/*<Quill/>*/}
      {/* <Draft/> */}
      {/* <div style={{marginRight: 100, marginTop: 100}}>*/}
      {/*   <Btns/>*/}
      {/* </div>*/}
      {/* <TinyMCE/>*/}
      {/*<CkEditor/>*/}
      {/*  <Tiptap/>*/}
      {/*  <BarcodeReader/>*/}
      {/*  <StripeContainer />*/}
      {/*<Canvas/>*/}
      {/*<DateFNSTimer/>*/}
     {/* <ImageResize/>*/}
     {/* <ReactImageResize/>*/}
     {/* <BootStrapSwitch/>*/}
        <Camera/>
    </>
  );
}

export default App;
