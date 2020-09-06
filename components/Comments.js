/** @jsx jsx */
import { jsx } from "theme-ui";
import { useForm, get } from 'react-hook-form';
import { useState, useEffect } from "react";
import Button from '../components/Button';
import Modal from '../components/Modal';
import axios from 'axios';
import Editpen from './icons/editpen';
import Trash from './icons/trash';

const Comments = ({ id }) => {
  const [comments, setComments] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [key, setKey] = useState(null);
  const [singleComment, setSingleComment] = useState(null);

  console.log(openModal)
  
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (forminput, e) => {
    postComment(forminput);
    e.target.reset();
  };

  useEffect(() => {
    const getComments = () => {
      axios.get(`https://flowers-mock-data.firebaseio.com/comments/lindastorgard/${id}.json`)
      .then((response) => {
        console.log("all comments", response);
        setComments(response.data)
      }, (error) => {
        console.log(error);
      });
    };
    getComments();
  },[])

  //set comment key, get comment and open edit modal
  const editModal = (key) => {
    setKey(key)
    if(key){
      getSingleComment(key)
      setOpenModal(true)
    }
  };

  // get single comment
  const getSingleComment = (key) => {
    axios.get(`https://flowers-mock-data.firebaseio.com/comments/lindastorgard/${id}/${key}.json`)
    .then((response) => {
      console.log("single comment", response);
      setSingleComment(response.data);
    }, (error) => {
      console.log(error);
    });
  };

  //delete comments
  const deleteComment = (key) => {
    axios.delete(`https://flowers-mock-data.firebaseio.com/comments/lindastorgard/${id}/${key}.json`)
    .then((response) => {
      console.log("delete comment", response);
      axios.get(`https://flowers-mock-data.firebaseio.com/comments/lindastorgard/${id}.json`)
    .then(res => {
      setComments(res.data)
    })
    }, (error) => {
      console.log(error);
    });
  };

  // post new comment
  const postComment = (forminput) => {
    axios.post(`https://flowers-mock-data.firebaseio.com/comments/lindastorgard/${id}.json`, {
      comment: forminput.comment
    })
    .then((response) => {
      console.log("post comment", response);
      axios.get(`https://flowers-mock-data.firebaseio.com/comments/lindastorgard/${id}.json`)
    .then(res => {
      setComments(res.data)
    })
    }, (error) => {
      console.log(error);
    });
  };
  
  return (
    <section 
      sx={{
        mb: 7
      }}
    >
        <div 
          sx={{
            textAlign: "center"
          }}
        >
          <>
          <form onSubmit={handleSubmit(onSubmit)} id="form1">
            <textarea 
              name="comment"
              ref={register({ required: true, maxLength: 200})}
              sx={{
                boxSizing : "border-box",
                width: ["90%", "400px", null],
                height: ["180px", null, "160px"],
                backgroundColor: "transparent",
                border: "1px solid black",
                borderRadius: "5px",
                color: "text",
                fontSize: 1,
                fontFamily: "heading",
                fontWeight: "body",
                p: 1,
                mb: 4
              }}
            />
            {errors?.comment && errors?.comment.type === "required" && 
              <p sx={{
                position: "relative",
                fontSize: 0,
                color: "black",
                fontWeight: "body",
                m: 0,
                mb: 4
                }}
              >
                * This fiels is required
              </p>
            }
            {errors?.comment && errors?.comment.type === "maxLength" && 
              <p sx={{
                width: ["100%", "400px", null],
                position: "relative",
                fontSize: 0,
                color: "red",
                fontWeight: "body",
                m: "0 auto",
                mb: 4
                }}
              >
                * We love comments, but keep em short ... max 200 characters.
              </p>
            }
          </form>
          <Button title={"Post comment"} form={"form1"} />
          </>
        </div>
        <div
          sx={{ 
            maxWidth: "1000px",
            margin: "auto",
            display: "flex",
            flexDirection: ["column", "row", null],
            flexWrap: "wrap",
            justifyContent: "center",
            mt: 7
          }}
        > 
          {comments ? (Object.keys(comments).map((key, index) => { 
            return (
              <div 
                key={index} 
                sx={{
                  m: 2,
                  borderRadius: "5px",
                  boxShadow:"0 8.7px 8.3px rgba(0, 0, 0, 0.1048)",
                }}
              >
                <p 
                  sx={{
                  width: [null, "250px", null],
                  height: ["180px", null, "230px"],
                  m: 2,
                  p: 2
                  }}
                >
                  {comments[key].comment}
                </p>
                <div sx={{
                  display: "flex",
                  flexDirection:"row",
                  justifyContent: "center",
                }}>
                  <button
                    sx={{
                      outline: "none",
                      border: "none",
                      background: "transparent",
                      cursor: "poiter",
                      mx: 4,
                      my: 3,
                      div: {
                        "&:hover": {
                          fill: "grey"
                      }
                    }
                    }}
                    onClick={() => deleteComment(key)}
                  >
                    <Trash fill={"black"} width={"15px"}/>
                  </button>
                  <button 
                    onClick={() => {editModal(key)}}
                    sx={{
                      outline: "none",
                      border: "none",
                      background: "transparent",
                      cursor: "poiter",
                      mx: 2,
                      my: 3,
                    }}
                  >
                    <Editpen fill={"black"} width={"15px"}/>
                  </button>
                </div>
              </div>
            )
          })): null }
        </div>
        {openModal === true && key? (
          <Modal 
            singleComment={singleComment} 
            setSingleComment={setSingleComment} 
            setOpenModal={setOpenModal} 
            id={id} 
            setKey={setKey} 
            productKey={key} />
        ): null}
      </section>
  )
}

export default Comments;