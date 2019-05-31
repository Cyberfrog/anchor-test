
import React from 'react';


export default class AnkLink extends React.Component {
  
    reinforceUrlFragment(){
        if( window.location.hash === `#${this.props.id}`){
            console.log('idmatch')
            window.location.hash ='';
            window.location.hash =`#${this.props.id}`
        }
    }
    componentDidMount(){
        this.reinforceUrlFragment();
    }
    render(){
        return <div id={this.props.id}>{this.props.id}</div>;
    }
}