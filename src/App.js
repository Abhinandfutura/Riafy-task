import './App.css';
import {BrowserRouter as Router , Routes as Switch ,Route} from 'react-router-dom'
import React,{lazy, Suspense } from 'react';
import Header from './Components/Header';
import { CircularProgress } from "@mui/material";
import styled from 'styled-components/macro';
const Samplefood=lazy(()=>import('../src/Pages/Samplefood'))
function App() {
  return (
    <Container>
     <Suspense
        fallback={
         
            <CircularProgress  />
          
        }
      >
        <Router>
          <Header/>
          <Switch>
            <Route path="/" element={<Samplefood />} />
           
          </Switch>
        </Router>
      </Suspense>
   
    </Container>
  );
}

export default App;


const Container=styled.div`
min-height:80vh;
`;