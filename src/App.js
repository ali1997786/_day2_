import './App.css';
import Person from './Person/Person';npm 
import React, { Component } from 'react';

class App extends Component {
  State = {
    persons:[
      {id:'aesf1',name:' Ishaque Ali', age :28},
      {id:'alei2',name:'Shahid', age :28},
      {id:'iswue3',name:'Ishaque', age :28}
    ],
  otherState : 'some other value',
  showpersons: false
  }
  
  namechangehandler = (event, id ) =>{
    const personIndex = this.state.persons.findindex(p =>{
     return  p.id===id;
    });

    const persons = {
      ...this.state.persons[personIndex]

    };

    //const person = object.assign({}, this.State.persons[personIndex])
    persons.name = event.target.value;
  const person = [...this.State.persons];
  person[personIndex]= persons;
    this.setState( { persons: persons}
    )
  }

  deletePersonHandler = (personindex) => {
 //const persons = this.state.persons.slice();
 const persons =  [...this.State.persons]
 persons.splice(personIndex, 1);
 this.setState({persons: persons});

  }

  togglepersonshHandler =() => {
  const doesShow = this.State.showpersons;
  this.setState({showpersons: !doesShow});
 
  }

  render() {
       const style = {
         backgroundColor: 'white',
         font: 'ingherit',
         border: '1px solid blue',
         padding : '8px',
         cursor:'pointer'
       };  
let person = null
if (this.State.showpersons)   {
  persons =(
    <div>
      {this.State.persons.map((persons, index) => {
        return <persons
        click={() => this.deletePersonHandler(index)}
         name={persons.name} 
        age={persons.age}
        key={persons.id}
        changed={(event) =>this.nameChangedHandler(event, persons.id)}/>
      })}

               
                </div>
  );
 // style.backgroundColor ='red',
    };
    const classes =[]
    if(this.State.persons.length <= 2){
      classes.push('red');
    }
    if(this.State.persons.length <= 1){
      classes.push('bold');
    }
       return(
              <div className="App">
                <h1>Hii I AM React APP</h1> 
                <p className={classes.join(' ')}>This is really Working !</p>
                <button
                style={style}
                onClick={ this.togglepersonshHandler}>Button Switch</button>
               
               {person }
              </div>

       );
       
  }

  
};


export default App;
