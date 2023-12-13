import React from 'react';

class Butt extends React.Component(){
    constructor(props){
        super(props);
        this.state={
            name:"off"
        }

    }

    on=()=>{
        this.setstate({
        name:"on"
        
        });
    }
    render(){
        return(
            <div>
                <button type='button' onClick={this.on}>{this.state.name}</button>
            </div>

        );
    }
}
export default Butt;