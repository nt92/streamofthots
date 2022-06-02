import {Link} from "react-router-dom";
import ReactMarkdown from 'react-markdown';

function UpdateRow(props) {
    const date = new Date(props.timestamp*1000)
    const dayAndTime =
        (date.getMonth()+1) +
        "/" + date.getDate() +
        "/" + date.getFullYear() +
        " " + date.getHours() +
        ":" + ('0' + date.getMinutes()).slice(-2);

    return (
        <div key={props.index} className="update">
            <div key={props.timestamp} className="update-time">
                <Link to={`updates/${props.timestamp}`}>{dayAndTime}</Link>
                {props.isMacc ? (
                    <div>macc</div>
                ) : null}
            </div>
            <div className="update-content">
                <div key={props.index + props.title} className="update-title">
                    <h3 className="title-text">{props.title}</h3>
                </div>
                <div key={props.updateText} className="update-text">
                    <ReactMarkdown>
                        {props.updateText}
                    </ReactMarkdown>
                </div>
            </div>
        </div>
    )
}

export default UpdateRow;