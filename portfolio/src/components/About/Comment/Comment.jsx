import react from "react";
import "./Comment.css";

export default function Comment({content,title}){
    return (
        <div className='comment'>
            <div className='commentBox'>
                
                <h2>{title}</h2>
                
                <p>{content}</p>
            </div>
        </div>
    )
}




