import React, { useState, useEffect } from "react";
import { getSomeUpdates } from "../utils/api";

function UpdatesList() {
    const [updates, setUpdates] = useState([])

    const handleGetUpdates = async () => {
        const data = await getSomeUpdates(10, 1);
        setUpdates(data);
    };

    useEffect(() => {
        async function fetchInitialData() {
            const initialData = await getSomeUpdates(10, 0);
            setUpdates(initialData);
        }
        fetchInitialData().then();
    }, []);

    return (
        <div className="list-container">
            {updates.length !== 0 ? (
                <div className="feed">
                    {updates.updates.map(({timestamp, updateText, title}, index) => (
                    <div key={index} className="update">
                        <div key={timestamp} className="update-time">
                            {timestamp}
                        </div>
                        <div key={title} className="update-content">
                            <div className="update-title">
                                <h3 className="title-text">{title}</h3>
                            </div>
                            <div className="update-text">
                                {updateText}
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            ) : null}
        </div>
    );
}

export default UpdatesList;