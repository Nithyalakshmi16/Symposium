import React from 'react';
import back from './back.jpeg';
import work from'./wlogo.jpeg';
export default class Nith extends React.Component {
  render() 

       {
        const bg={
          backgroundImage:`url('${back}')`,
          height:'350vh',
          marginTop:'-20px',
          backgroundSize:'cover',
          backgroundRepeat:'no repeat'
        }; 

    return ( 
      <div style={bg}>
              <h3 className='topic'> SRI ACHIEVERS INSTITUTE OF ENGINEERING AND TECHNOLOGY AN AUTONOMOUS INSTITUTION</h3>
              <h6 className='bor'></h6>
              <div>
                <button className='bac'>back</button>
                <button className='reg'>register</button>
                <button className='hom' >home</button>        
                <button className='qui'>quiz</button>
                <button className='work' >Workshop</button>
                <button className='abo' >About</button>
                </div>
                   <select className='tech'>
                  <option selected value="Technical event">technical event</option>
                  <option value="hackthon">hackathon</option>
                 </select>
                 <select className='nontech'>
                   <option selected value="non Technical event">non technical event</option>
                   <option value="dance">dance</option>
                   <option value="game">Game</option>
                 </select>
                <div>                      
                  <div className='square1'></div>                         
                     <img src={work} alt='wlogos'  className='wlogo'></img>
                    <h2 className='hh'>Workshop</h2>                        
                <div className='tb'></div>
                  <p className='pp'>We usually brief intensive educational program for a relatively small group of people  that focuses especially on techniques,   skills in a particular field.</p>                
                </div>
                  <div>
                    <h2 className='page'>EEE workshop</h2>        
                    <h1 className='secondsquare'></h1>
                    <ol className='rules'>
                      <li>ONLY CIVIL STUDENT</li>
                      <li>LAPTOP MUST </li>
                      <li>UNIFORM MUST </li>
                      </ol> 
                      <p className='spara'>Workshop engaged in the repair and maintenance of machinery, equipment and apparatus used for the measurement, generation, transmission, storage and utilisation of electric power
</p>
                
                  <button className='sreg'>register</button>




                  


                 </div>












                </div>
    )
   }
  }
