
import React from 'react';


export default class AnkLink extends React.Component {
   
    reinforceUrlFragment(){
       
        if( window.location.hash === `#${this.props.id}`){
            console.log(' idmatch reinforcing ', this.props.id)
            window.location.hash ='';
            window.location.hash =`#${this.props.id}`
        }
    }
    componentDidMount(){
    
        this.reinforceUrlFragment();
        var callback = (mutationsList, observer) => {
            console.log('mutation observed', mutationsList)
            this.reinforceUrlFragment();
        };
        var config = {  childList: true, subtree: true };
        // Create an observer instance linked to the callback function
        this.observer = new MutationObserver(callback);
        this.observer.observe(document.body, config)
  
        }
    componentDidUpdate(...args){
        // this.reinforceUrlFragment();
        console.log('componentDidUpdate' , args);
    }
    // adding jsut div with seems to work without mutation observer
    // render(){
    //     return <div>
    //         <div style={{visibility:'hidden', fontSize:'1px'}}> div1 </div>
    //         <div id={this.props.id} ref={(e)=>{
    //         if(e){
    //         console.log('got ref',e);
    //                }
    //     }}/></div>; 
    // }
    render(){
        return <div id={this.props.id}/> 
    }
    componentWillUnmount(){
       this.observer && this.observer.disconnect();
    }
}