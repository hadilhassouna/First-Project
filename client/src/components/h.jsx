import React, { Component } from 'react';

// class Other extends Component {
//     render() {
//       const child   = { width: `30em`, height: `100%`}
//       const parent  = { width: `60em`, height: `100%`}
//       return (
//         <div style={parent}>
//           <HorizontalScroll>
//               <div style={child} />
//               <div style={child} />
//               <div style={child} />
//           </HorizontalScroll>
//         </div>
//       )
//     }
//   }

class Other extends Component  {
    constructor(props){
        super(props)

       this.state = {
        data:[]
         
        };
    }
   
componentFirstElement(){
    var that = this;
    $.ajax({
        url:"/relate",
        type:"GET",
        dataType:"json",
        success:function(data){
        //   console.log(data);
          that.setState({data:data})
            this.state.data[0].img.projectId
            this.state.data[0].img.imgId  
          console.log(that.state.data)
          
        },
        error:function(err){
          console.log(err)
        }
      });
    }

    render(){
        const others = this.state.data.map((img) =>
        <li>
        <img projectId={img.projectId=2,3,4,5,6,7} src={img.url}></img>
        <p >{img.porojectName}</p>
        </li>
      );
        return (
            <ul>
                {others}
            </ul>
        )
    }
}          

export default Other