import { nanoid } from "nanoid";
import React, { useState } from "react";
import Card from 'react-bootstrap/Card';
import { ArrowRightCircleFill } from "react-bootstrap-icons";
import { ExclamationTriangleFill } from "react-bootstrap-icons";
import Alert from 'react-bootstrap/Alert';
import Stars from "./Stars";
import StarsRating from "./StarsRating";



function CommentsModal({ comments, isModalOpen, setIsModalOpen, commentBookTitle, commentPost, setCommentPost, postComment, isFormModalOpen, rating, setRating }) {


    return (
        <div className="position-fixed d-flex justify-content-center py-5" style={{ zIndex: "9", height: "95vh", background: "rgb(0,0,0,0.7)" }}>
            <Card className=" p-3 w-75">

                <Card.Header className="w-100 d-flex justify-content-between">
                    <span><span className="text-primary">Commenti su: </span><i className="ms-2">{commentBookTitle}</i></span>
                    <a onClick={() => setIsModalOpen(!isModalOpen)} style={{ cursor: "pointer" }}>X</a>
                </Card.Header>
                <Card.Body style={{ overflowY: "scroll" }}>

                    {
                        comments.map((el) => {
                            return (
                                <div key={nanoid()}>
                                    <span className="text-success">{el.author}: </span>
                                    <i className="pt-2">{el.comment}</i>
                                    <div className="py-2 border-bottom starsRating"><Stars rate={el.rate} /></div>
                                </div>
                            )
                        })
                    }

                </Card.Body>

                <form>
                    <hr />
                    <span className="d-flex align-items-center">
                        <span>
                            <StarsRating
                                rating={rating}
                                setRating={setRating}
                            />
                        </span>
                        <a className="text-primary d-flex align-items-center" style={{ fontSize: "30px", cursor: "pointer" }} onClick={postComment}><ArrowRightCircleFill /></a>
                    </span>
                    <textarea className="w-100 mt-3 px-3 py-1 rounded-4 border border-secondary" value={commentPost} name="comment" rows="3" placeholder="comment..." required onChange={(e) => setCommentPost(e.target.value)}></textarea>
                </form>

                {
                    isFormModalOpen && <Alert className="mt-2" variant="warning"><ExclamationTriangleFill className="me-3" />Fill the form!</Alert>
                }
            </Card>
        </div>
    )
}

export default CommentsModal