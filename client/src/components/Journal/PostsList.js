// import React, { useEffect } from "react";
// import { ListItem, List } from "../../components/Journal/List/index";
// import DeleteBtn from "../../components/Journal/DeleteBtn/JournalDeleteBtn";
// import { Link } from "react-router-dom";
// import { useGlobalContext } from "../../context/GlobalContext";
// import { REMOVE_POST, UPDATE_POSTS, LOADING } from "../../context/actions";
// import API from "../../utils/API";

// function PostsList() {
//   const [state, dispatch] = useGlobalContext();

//   const removePost = (id) => {
//     API.deletePost(id)
//       .then(() => {
//         dispatch({
//           type: REMOVE_POST,
//           _id: id,
//         });
//       })
//       .catch((err) => console.log(err));
//   };

//   const getPosts = () => {
//     dispatch({ type: LOADING });
//     API.getPosts()
//       .then((results) => {
//         dispatch({
//           type: UPDATE_POSTS,
//           posts: results.data,
//         });
//       })
//       .catch((err) => console.log(err));
//   };

//   useEffect(() => {
//     getPosts();
//   }, []);

//   return (
//     <div>
//       <h1>All Blog Posts</h1>
//       <h3 className="mb-5 mt-5">Click on a post to view</h3>
//       {state.posts.length ? (
//         <List>
//           {state.posts.map((post) => (
//             <ListItem key={post._id}>
//               <Link to={"/posts/" + post._id}>
//                 <strong>
//                   {post.title} by {post.author}
//                 </strong>
//               </Link>
//               <DeleteBtn onClick={() => removePost(post._id)} />
//             </ListItem>
//           ))}
//         </List>
//       ) : (
//         <h3>You haven't added any posts yet!</h3>
//       )}
//       <div className="mt-5">
//         <Link to="favorites">View favorites</Link>
//       </div>
//     </div>
//   );
// }

// export default PostsList;
