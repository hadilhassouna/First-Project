import React, { Component } from 'react';

class Other extends Component  {
    constructor(props){
        super(props)

       this.state = {
        data:[]
         
        };
    }
   
componentDidMount() {
    var that = this;
    $.ajax({
        url:"/relate",
        type:"GET",
        dataType:"json",
        success:function(data){
          console.log("other", data);
          that.setState({data:data})
            
          console.log(that.state.data)
          
        },
        error:function(err){
          console.log(err)
        }
      });
    }

    render(){
        console.log("H",this.state.data)
        
        const others = this.state.data.map((others) =>
        
            <li id="list" class="hs"   >
               <div class="container item">
            <img id="img" class=" image item" src={others.ip}></img>
            <div class="overlay">
            <div class="text" >{others.projectName}</div>
            </div>
            </div>
            </li>
        );
        return (
            
            <ul >
               
                {others}
              
            </ul>



        )
    }
};   
       

export default Other;
