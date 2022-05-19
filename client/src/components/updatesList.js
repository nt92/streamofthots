import React, { useState, useEffect } from "react";
import { getSomeUpdates } from "../utils/api";
import UpdateRow from "./updateRow";

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
        <div>
            <h1>Nikhil's Stream of Thots 🌊</h1>
            <div className="list-container">
                {updates.length !== 0 ? (
                    <div className="feed">
                        {updates.updates.map(({timestamp, updateText, title}, index) => (
                            <UpdateRow
                                key={index}
                                index={index}
                                timestamp={timestamp}
                                updateText={updateText}
                                title={title}
                            />
                        ))}
                    </div>
                ) : null}
            </div>
        </div>
    );
}

export default UpdatesList;