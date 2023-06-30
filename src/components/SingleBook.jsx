import React from "react";
import Card from 'react-bootstrap/Card';
import StarsSingleBook from "./StarsSingleBook";

function SingleBook({ asin, src, title, price, category, setIsModalOpen, isModalOpen, getComments, setCommentBookTitle, comments, allComments }) {
    const categoryColor = (input) => {
        switch (input) {
            case "fantasy":
                return "text-info";
            case "horror":
                return "text-danger";
            case "scifi":
                return "text-success";
            case "history":
                return "text-primary";
            case "romance":
                return "text-warning"
        }
    }
    return (
        <Card className="m-2 p-0" style={{ width: '18rem' }}>
            <div style={{ height: "450px" }}>
                <Card.Img variant="top" src={src} style={{ height: "100%" }} />
            </div>

            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>$ {price}</Card.Text>
                <div className="mb-2">
                    Category: <span className={categoryColor(category)} style={{ fontWeight: "bold" }}> {category}</span>
                </div>
                <a className="text-secondary d-flex align-items-center" style={{ cursor: "pointer", textDecoration: "none" }}
                    onClick={
                        () => {
                            setIsModalOpen(!isModalOpen);
                            getComments(asin)
                            setCommentBookTitle(title)
                        }
                    }><StarsSingleBook
                        asin={asin}
                        comments={comments}
                        allComments={allComments}
                    /> Comments
                </a>
            </Card.Body>
        </Card>
    )
}

export default SingleBook