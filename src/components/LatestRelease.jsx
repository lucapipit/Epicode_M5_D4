import React, { useEffect, useState } from "react";
import SingleBook from "./SingleBook";
import { Row } from "react-bootstrap";
import CommentsModal from "./CommentsModal";

function LatestRelease({ myBooks }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isFormModalOpen, setIsFormModalOpen] = useState(false);
    const [comments, setComments] = useState([]);
    const [allComments, setAllComments] = useState([]);
    const [commentId, setCommentId] = useState("");
    const [commentBookTitle, setCommentBookTitle] = useState("");
    const [commentPost, setCommentPost] = useState("");
    const [rating, setRating] = useState(null);


    async function getComments(commentId) {
        setCommentId(commentId);
        const apiKey = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDk1N2YzODlhOGZmMDAwMTRhYjI5NjkiLCJpYXQiOjE2ODc1MTkwMzIsImV4cCI6MTY4ODcyODYzMn0.qjosllSZK6D3HjoPmlXCjD--USRRf0EteNvjoiiBvic";
        const endpoint = "https://striveschool-api.herokuapp.com/api/comments/";
        const response = await fetch(endpoint + commentId, { headers: { "Authorization": apiKey } });
        const data = await response.json();
        /* console.log(commentId);
        console.log(data); */
        return setComments(data)
    }

    async function getAllComments() {
        
        const apiKey = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDk1N2YzODlhOGZmMDAwMTRhYjI5NjkiLCJpYXQiOjE2ODc1MTkwMzIsImV4cCI6MTY4ODcyODYzMn0.qjosllSZK6D3HjoPmlXCjD--USRRf0EteNvjoiiBvic";
        const endpoint = "https://striveschool-api.herokuapp.com/api/comments/";
        const response = await fetch(endpoint, { headers: { "Authorization": apiKey } });
        const allData = await response.json();
        
        return setAllComments(allData)
    }

    async function postComment() {
        if (rating && commentPost) {
            setIsFormModalOpen(false);
            const myComment = {
                "rate": rating,
                "comment": commentPost,
                "elementId": commentId
            }
            console.log(myComment);

            try {
                const apiKey = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDk1N2YzODlhOGZmMDAwMTRhYjI5NjkiLCJpYXQiOjE2ODc1MTkwMzIsImV4cCI6MTY4ODcyODYzMn0.qjosllSZK6D3HjoPmlXCjD--USRRf0EteNvjoiiBvic";
                const endpoint = "https://striveschool-api.herokuapp.com/api/comments/";
                await fetch(endpoint , { 
                    method: "Post", 
                    headers: { "Authorization": apiKey, "Content-Type": "application/json" },
                    body: JSON.stringify(myComment)
                });
                console.log("post riuscita");
                getComments(commentId)
            
            } catch (error) {
                console.log(error);
            }
            setRating(null);
            setCommentPost("")

        }else{
            console.log("compilare tutto il form!");
            setIsFormModalOpen(true)
        }
       
    }

    useEffect(()=>{
        getAllComments();
    }, [comments]);

    return (
        <div style={{ padding: "0 30px" }}>
            <Row className="d-flex justify-content-center container-fluid" style={{ padding: "55px 0 0 0" }}>

                {isModalOpen && <CommentsModal
                    comments={comments}
                    isModalOpen={isModalOpen}
                    setIsModalOpen={setIsModalOpen}
                    commentBookTitle={commentBookTitle}
                    commentPost={commentPost}

                    postComment={postComment}
                    setCommentPost={setCommentPost}
                    isFormModalOpen={isFormModalOpen}

                    rating={rating}
                    setRating={setRating}
                />}

                {
                    myBooks && myBooks.map((el) => {
                        return (
                            <SingleBook
                                key={el.asin}
                                asin={el.asin}
                                src={el.img}
                                title={el.title}
                                price={el.price}
                                category={el.category}
                                setIsModalOpen={setIsModalOpen}
                                isModalOpen={isModalOpen}
                                getComments={getComments}
                                comments={comments}
                                commentId={commentId}
                                setCommentBookTitle={setCommentBookTitle}
                                allComments={allComments}
                            />
                        )
                    })
                }
            </Row>
        </div>
    )


}

export default LatestRelease