// import React, { Component } from 'react';

// class App extends Component  {
//     constructor(props){
//         super(props)

//        this.state = {
//         data:[]
         
//         };
//     }
//     componentDidMount(){
//         var that = this;
//         $.ajax({
//             url:"/imgs",
//             type:"GET",
//             dataType:"json",
//             success:function(data){
//             //   console.log(data);
        //       that.setState({data:data})
        //       console.log(that.state.data)
              
        //     },
        //     error:function(err){
        //       console.log(err)
        //     }
        //   });
        // }
    // render() {
    //     const reviews  = this.state.data.map(() => 
    //     <li>

    //     </li>
        
        
    //     );
    //   return (
    //       <ul>
    //           {reviews}
    //       </ul>
        // <div className="container">
        //   {/* <div className="comments">
        //     <h2>Comments:</h2>
        //     {/* <CommentList data={DATA} /> */}
        //   </div>
        //   <div className="form">
        //     <CommentForm />
        //   </div>
        // </div> */}
//       );
//     }
//   }
  
//   export default CommentBox;

//   ///
//   // CommentList.js
// import React from 'react';
// import PropTypes from 'prop-types';
// import Comment from './Comment';

// const CommentList = (props) => {
//   const commentNodes = props.data.map(comment => (
//     <Comment author={comment.author} key={comment._id} id={comment._id}>
//       { comment.text}
//     </Comment>
//   ));
//   return (
//     <div>
//       { commentNodes }
//     </div>
//   );
// };

// CommentList.propTypes = {
//   data: PropTypes.arrayOf(PropTypes.shape({
//     author: PropTypes.string,
//     id: PropTypes.string,
//     text: PropTypes.string,
//   })),
// };

// CommentList.defaultProps = {
//   data: [],
// };

// export default CommentList;
// //
// // CommentForm.js
// import React from 'react';
// import PropTypes from 'prop-types';

// const CommentForm = props => (
//   <form onSubmit={props.submitComment}>
//     <input
//       type="text"
//       name="author"
//       placeholder="Your name…"
//       value={props.author}
//       onChange={props.handleChangeText}
//     />
//     <input
//       type="text"
//       name="text"
//       placeholder="Say something..."
//       value={props.text}
//       onChange={props.handleTextChange}
//     />
//     <button type="submit">Submit</button>
//   </form>
// );

// CommentForm.propTypes = {
//   submitComment: PropTypes.func.isRequired,
//   handleChangeText: PropTypes.func.isRequired,
//   text: PropTypes.string,
//   author: PropTypes.string,
// };

// CommentForm.defaultProps = {
//   text: '',
//   author: '',
// };

// export default CommentForm;