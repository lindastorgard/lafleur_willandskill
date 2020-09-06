/** @jsx jsx */
import { jsx } from "theme-ui";
import { useForm } from 'react-hook-form';
import Button from '../components/Button';
import { useRouter } from 'next/router'
import axios from 'axios';

const Modal = ({ 
  singleComment, 
  setSingleComment, 
  setOpenModal, 
  setKey, 
  productKey, 
  id 
  }) => {
  
  const router = useRouter()
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (forminput) => {
    updateComment(forminput);
    setOpenModal(false);
    router.reload();
  };

  const updateComment = (forminput) => {
    axios.put(`https://flowers-mock-data.firebaseio.com/comments/lindastorgard/${id}/${productKey}.json`, {
      comment: forminput.comment
    })
    .then((response) => {
    }, (error) => {
      console.log(error);
    });
  };

  return ( 
    <>
      {singleComment? (
        <section 
          sx={{
            backgroundColor: "rgba(0,0,0,0.9);",
            position: "fixed",
            zIndex: 300,
            height: "100vh",
            width: "100vw", 
            textAlign: "center",
            top: 0,
            left: 0
          }}>            
            <div sx={{
              position: "absolute", 
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "90%"
              }}
            >
              <form onSubmit={handleSubmit(onSubmit)} id="form2">
                <textarea 
                  defaultValue={singleComment.comment}
                  name="comment"
                  ref={register({ required: true, maxLength: 200})}
                  sx={{
                    boxSizing : "border-box",
                    width: ["100%", "400px", null],
                    height: ["200px", null, "160px"],
                    backgroundColor: "white",
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
                    color: "white",
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
                    color: "white",
                    fontWeight: "body",
                    m: "0 auto",
                    mb: 4
                    }}
                  >
                    * We love comments, but keep em short ... max 200 characters.
                  </p>
                }
              </form>
              <Button title={"Update comment"} form={"form2"}/>
            </div>
            <button 
              onClick={() => {setOpenModal(false), setKey(null), setSingleComment(null) }}
              sx={{
                position: "absolute",
                top: 0,
                right: 0,
                m: [2, 5, null],
                backgroundColor: "transparent",
                color: "white",
                cursor: "pointer",
                outline: "none",
                border: "none",
                fontSize: 3,
              }}
              >
                X
            </button>
        </section>
      ): null }
    </>
  )
}

export default Modal;