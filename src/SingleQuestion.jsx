import { useState } from 'react'
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";


const SingleQuestion = ({ id, title, info, activeId, toggleId}) => {

    const isActive = id === activeId

    return <article className="question">
        <header>
            <h5>{title}</h5>
            <button type='button' className='question-btn' onClick={() => toggleId(id)}>
                {isActive ? <AiOutlineMinus /> : <AiOutlinePlus />}
            </button>
        </header>
        <p>{isActive && info}</p>
    </article>
}

export default SingleQuestion