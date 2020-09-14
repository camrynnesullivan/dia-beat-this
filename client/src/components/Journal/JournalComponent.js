// import React, { useRef } from "react";
// import { useStoreContext } from "../../context/GlobalState";
// import { ADD_POST, LOADING } from "../../context/actions";
// import Journal from "../../utils/JournalUtil";

// import Card from "@material-ui/core/Card";
// import { makeStyles } from "@material-ui/core/styles";
// import TextField from "@material-ui/core/TextField";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     "& .MuiTextField-root": {
//       margin: theme.spacing(1),
//       width: "25ch",
//     },
//   },
// }));

// function JournalComponent() {
//   const classes = useStyles();
//   // const [value, setValue] = React.useState("Controlled");
//   // const handleChange = (event) => {
//   //   setValue(event.target.value);
//   // };

//   // const bodyRef = useRef();

//   // const [state, dispatch] = useStoreContext();

//   // const handleSubmit = (e) => {
//   //   e.preventDefault();
//   //   dispatch({ type: LOADING });
//   //   Journal.savePost({
//   //     body: bodyRef.current.value,
//   //   })
//   //     .then((result) => {
//   //       dispatch({
//   //         type: ADD_POST,
//   //         post: result.data,
//   //       });
//   //     })
//   //     .catch((err) => console.log(err));

//   //   bodyRef.current.value = "";
//   // };

//   return (
//     // <Card>
//     //   <form className={classes.container} noValidate>
//     //     <TextField
//     //       id="datetime-local"
//     //       label="Enter the Date and Time"
//     //       type="datetime-local"
//     //       defaultValue="2017-05-24T10:30"
//     //       className={classes.textField}
//     //       InputLabelProps={{
//     //         shrink: true,
//     //       }}
//     //     />

//     //     <TextField
//     //       id="outlined-multiline-static"
//     //       // inputRef={props.bodyRef}
//     //       label="Multiline"
//     //       multiline
//     //       rows={4}
//     //       defaultValue="Default Value"
//     //       variant="outlined"
//     //     />
//     //   </form>
//     <div>
//       <h1>Create a blog post</h1>
//       <form onSubmit={handleSubmit}>
//         {/* <input className="form-control mb-5" required ref={titleRef} placeholder="Title" /> */}
//         <textarea
//           className="form-control mb-5"
//           required
//           ref={bodyRef}
//           placeholder="Body"
//         />
//         {/* <input className="form-control mb-5" ref={authorRef} placeholder="Screen name" /> */}
//         <button
//           className="btn btn-success mt-3 mb-5"
//           disabled={state.loading}
//           type="submit"
//         >
//           Save Post
//         </button>
//       </form>
//     </div>
//     // </Card>
//   );
// }

// export default JournalComponent;

import React, { useRef } from "react";
import { useStoreContext } from "../../context/GlobalState";
import { ADD_POST, LOADING } from "../../context/actions";
import JournalUtil from "../../utils/JournalUtil";

function JournalComponent() {
  const titleRef = useRef();
  const bodyRef = useRef();
  const authorRef = useRef();
  const [state, dispatch] = useStoreContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: LOADING });
    JournalUtil.savePost({
      title: titleRef.current.value,
      body: bodyRef.current.value,
      author: authorRef.current.value,
    })
      .then((result) => {
        dispatch({
          type: ADD_POST,
          post: result.data,
        });
      })
      .catch((err) => console.log(err));

    titleRef.current.value = "";
    bodyRef.current.value = "";
  };

  return (
    <div>
      <h1>Create a blog post</h1>
      <form className="form-group mt-5 mb-5" onSubmit={handleSubmit}>
        <input
          className="form-control mb-5"
          required
          ref={titleRef}
          placeholder="Title"
        />
        <textarea
          className="form-control mb-5"
          required
          ref={bodyRef}
          placeholder="Body"
        />
        <input
          className="form-control mb-5"
          ref={authorRef}
          placeholder="Screen name"
        />
        <button
          className="btn btn-success mt-3 mb-5"
          disabled={state.loading}
          type="submit"
        >
          Save Post
        </button>
      </form>
    </div>
  );
}

export default JournalComponent;
