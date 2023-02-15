import React, {useState} from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({title, info}) => {
    const [showInfo, setShowInfor] = useState(false);

    return (
        <article className="question">
        <header>
          <h4>{title}</h4>
          <button className="btn" onClick={ ()=>setShowInfor(!showInfo) }>
            {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
          </button>
        </header>
        {showInfo && <p>{info}</p>}
         {/* giá trị của true && expression luôn dựa vào expression, còn false && expression thì sẽ luôn được hiểu là false. */}
      </article>
    );

}
 export default Question ; 