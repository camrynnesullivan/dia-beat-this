import React, { useRef } from "react";
import { useGlobalContext } from "../../context/GlobalContext";
import { ADD_POST, LOADING } from "../../context/actions";
import API from "../../utils/API";

function JournalComponent() {
  const dateRef = useRef();
  const bodyRef = useRef();

  const [state, dispatch] = useGlobalContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: LOADING });
    API.savePost({
      date: dateRef.current.value,
      body: bodyRef.current.value,
    })
      .then((result) => {
        dispatch({
          type: ADD_POST,
          post: result.data,
        });
      })
      .catch((err) => console.log(err));

    bodyRef.current.value = "";
  };

  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();

  const fullDate = month + "-" + date + "-" + year;
  return (
    <div>
      <div className="jumbotron">
        <img
          className="img-fluid img-thumbnail"
          src="https://images.pexels.com/photos/459688/pexels-photo-459688.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        />
      </div>
      <h1>How are you feeling today?</h1>
      <form className="form-group mt-5 mb-5" onSubmit={handleSubmit}>
        <input
          className="form-control mb-5"
          required
          ref={dateRef}
          placeholder={fullDate}
          readOnly
        />
        <textarea
          className="form-control mb-5"
          required
          ref={bodyRef}
          placeholder="Report how you are feeling today here"
        />

        <button
          className="btn btn-success mt-3 mb-5"
          disabled={state.loading}
          type="submit"
        >
          Save
        </button>
      </form>
    </div>
  );
}

export default JournalComponent;
