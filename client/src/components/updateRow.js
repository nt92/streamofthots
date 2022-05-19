import {Link} from "react-router-dom";

function UpdateRow(props) {
    return (
        <div className="update">
            <div key={props.timestamp} className="update-time">
                <Link to={`updates/${props.timestamp}`}>{props.timestamp}</Link>
            </div>
            <div key={props.title} className="update-content">
                <div className="update-title">
                    <h3 className="title-text">{props.title}</h3>
                </div>
                <div className="update-text">
                    {props.updateText}
                </div>
            </div>
        </div>
    )
}

export default UpdateRow