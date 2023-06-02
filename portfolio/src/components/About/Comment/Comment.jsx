import react from "react";
import "./Comment.css";

export default function Comment({content,title}){
    return (
        <div className='commentBox'>
            <div className='comment'>
                
                <h2>{title}</h2>
                
                <p>{content}</p>
            </div>
        </div>
    )
}




