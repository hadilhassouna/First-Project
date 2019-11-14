import React, { Component } from 'react';
class Comments extends Component  {
   constructor(props){
       super(props)
      this.state = {
    comments:[]
       };
   }
componentDidMount(){
   var that = this;
   $.ajax({
       url:"/Reviewers",
       type:"GET",
       success:function(data){
       //   console.log(data);
         that.setState({comments:data})
         console.log(that.state.data)
       },
       error:function(err){
         console.log(err)
       }
     });
   }
   // render(){
   //     const listUsers = this.state.data.map(userinfo) =>
   //     // <li>
   //     // <img src={img.url}></img>
   //     // <p >{img.imgInfo}</p>
   //     // </li>
   //     // <div> </div>
   //     <li>
   //     <p>{userInfo.name}</p>
   //     <p >{userInfo.location}</p>
   //     </li>
   //   );
   render(){
       var cc = [];
       if(Array.isArray(this.state.comments)){
           cc =this.state.comments;
       }
       var listcomments = cc.map((Reviewers) =>
       <li>
          <p>{Reviewers.profilePic}</p>
          <p >{Reviewers.time}</p>
          <p >{Reviewers.userName}</p>
          <p >{Reviewers.comment}</p>
          </li>
     );
       return (
           <div>
               {listcomments}
           </div>
       )
   }
}
export default Comments;