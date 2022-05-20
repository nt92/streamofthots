import {Link} from "react-router-dom";
import ReactMarkdown from 'react-markdown';

function UpdateRow(props) {
    return (
        <div key={props.index} className="update">
            <div key={props.timestamp} className="update-time">
                <Link to={`updates/${props.timestamp}`}>{props.timestamp}</Link>
            </div>
            <div className="update-content">
                <div key={props.title} className="update-title">
                    <h3 className="title-text">{props.title}</h3>
                </div>
                <div key={props.updateText} className="update-text">
                    <ReactMarkdown>{props.updateText}</ReactMarkdown>
                </div>
            </div>
        </div>
    )
}

export default UpdateRow