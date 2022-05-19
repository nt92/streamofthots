import {useParams} from "react-router-dom";
import UpdateRow from "./updateRow";
import {useEffect, useState} from "react";
import {getUpdateByTimestamp} from "../utils/api";

function SingleUpdatePage() {
    const { timestamp } = useParams()
    const [update, setUpdate] = useState([])

    useEffect(() => {
        async function fetchInitialData() {
            const initialData = await getUpdateByTimestamp(timestamp)
            setUpdate(initialData)
        };
        fetchInitialData().then();
    }, []);

    return (
        <div className="list-container">
            {update.length !== 0 ? (
                <div className="feed">
                    <UpdateRow
                        timestamp={update.update[0].timestamp}
                        updateText={update.update[0].updateText}
                        title={update.update[0].title}
                    />
                </div>
            ) : null}
        </div>
    );
}

export default SingleUpdatePage