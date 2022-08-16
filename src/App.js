import './App.css';
import { Component } from 'react';

class App extends Component{

  state = {
    fullName : "",
    bio : "",
    img :"",
    profession: "",
     show:false
  }
  handleName = () => {
    this.setState({
    fullName : "Doumbia Fode",
    bio : "Etudiant",
    profession:"Etudiant",
    img:'logo192.png',
    show:!this.state.show
  });
}


  render() {
    return(

        <div>
          {this.state.show ?   
          <div className='profil'>
          <div className='profil--container'>
          <div className='profil--container--content'>
          <div className='profil--container--left'>
            <h4>Fullname : {this.state.fullName}</h4>
            <h4>Bio :{this.state.bio}</h4>
            <h4>Profession :{this.state.profession}</h4>
          </div>
          <div className='profil--container--right'>
              <div className='profil--images'>
                <img src={this.state.img} alt="" />
              </div>
          </div>
          </div>
          <button onClick={this.handleName}>Change profil</button>
          
          </div>
        </div>

        :

        <div className='profil'>
            <div className='profil--container'>
            <div className='profil--container--content'>
            <div className='profil--container--left'>
              <h4>Fullname :</h4>
              <h4>Bio : </h4>
              <h4>Profession : </h4>
            </div>
            <div className='profil--container--right'>
                <div className='profil--images'>
                  <img src="" alt="" />
                </div>
            </div>
            </div>
            <button onClick={this.handleName}>Change profil</button>
            
            </div>
          </div>
        
        
        }
          
        </div>
    )
  }
}

export default App;
