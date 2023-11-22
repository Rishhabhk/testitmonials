import './Card.css';
import {ImQuotesLeft,ImQuotesRight} from "react-icons/im";

function Card({data}){
    return(
        <div className="card">
            <div className="img_div">
                <img src={data.image} width="140" height="140" alt=''></img>
            </div>
            <div className="name_div">
                <h3>{data.name}</h3>
            </div>
            <div className="job_div">
                <p>{data.job}</p>
            </div>
            <div className="open_icon_div">
                <ImQuotesLeft className='quotes'></ImQuotesLeft>
            </div>
            <div className="text_div">
                <p>{data.text}</p>
            </div>
            <div className="close_icon_div">
                <ImQuotesRight className='quotes'></ImQuotesRight>
            </div>
        </div>
    )
}

export default Card;