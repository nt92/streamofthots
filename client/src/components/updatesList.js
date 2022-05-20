import React, { useState, useEffect } from "react";
import {getSomeUpdatesSearch, getSomeUpdatesSearchCount} from "../utils/api";
import UpdateRow from "./updateRow";
import {useSearchParams} from "react-router-dom";

function UpdatesList() {
    const [updates, setUpdates] = useState([]);
    const [updatesCount, setUpdatesCount] = useState(0);
    const [searchParams, setSearchParams] = useSearchParams();

    async function fetchUpdates(event) {
        event.preventDefault()
        const search = searchParams.get("search");
        const data = await getSomeUpdatesSearch(10, 0, search);
        setUpdates(data);
        const countData = await getSomeUpdatesSearchCount(10, 0, search);
        const count = Object.values(countData.count[0])[0]; // 🤦🏽‍
        setUpdatesCount(count);
    }

    useEffect(() => {
        async function fetchInitialData() {
            const search = searchParams.get("search") || ""
            const initialData = await getSomeUpdatesSearch(10, 0, search);
            setUpdates(initialData);
            const countData = await getSomeUpdatesSearchCount(10, 0, search);
            const count = Object.values(countData.count[0])[0]; // 🤦🏽‍
            setUpdatesCount(count);
        }
        fetchInitialData().then();
    }, [searchParams]);

    return (
        <div>
            <h1>Nikhil's Stream of Thots 🌊</h1>
            <p className="subtitle">{updatesCount} matching updates</p>
            <main>
                <form
                    className="search"
                    method="get"
                    onSubmit={fetchUpdates}>
                    <input
                        placeholder="search the streamofthots..."
                        value={searchParams.get("search") || ""}
                        onChange={(e) => {
                            let search = e.target.value;
                            if (search) {
                                setSearchParams({ search });
                            } else {
                                setSearchParams({});
                            }
                        }}/>
                </form>
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
            </main>
        </div>
    );
}

export default UpdatesList;