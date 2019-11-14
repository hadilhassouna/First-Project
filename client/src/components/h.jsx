import React, { Component } from 'react';

// // class Other extends Component {
// //     render() {
// //       const child   = { width: `30em`, height: `100%`}
// //       const parent  = { width: `60em`, height: `100%`}
// //       return (
// //         <div style={parent}>
// //           <HorizontalScroll>
// //               <div style={child} />
// //               <div style={child} />
// //               <div style={child} />
// //           </HorizontalScroll>
// //         </div>
// //       )
// //     }
// //   }

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
        <div>
            <li>
            <img src={others.ip}></img>
            <p >{others.projectName}</p>
            </li>
        </div>            
        );
        return (
            <ul>
                {others}
            </ul>
        )
    }
};   
       

export default Other;