import React, { useState, useEffect } from "react";
import {useSearchParams} from "react-router-dom";
import {getSomeUpdatesSearch, getSomeUpdatesSearchCount} from "../utils/api";
import UpdateRow from "./updateRow";

function UpdatesList() {
    const ITEMS_PER_PAGE = 10

    const [updates, setUpdates] = useState([]);
    const [updatesCount, setUpdatesCount] = useState(0);
    const [searchParams, setSearchParams] = useSearchParams();

    async function fetchUpdates(event) {
        event.preventDefault()
        const page = searchParams.get("page") || 0;
        const itemOffset = page * ITEMS_PER_PAGE;
        const search = searchParams.get("search");
        const data = await getSomeUpdatesSearch(ITEMS_PER_PAGE, itemOffset, search);
        setUpdates(data);
        const countData = await getSomeUpdatesSearchCount(search);
        const count = Object.values(countData.count[0])[0]; // 🤦🏽‍
        setUpdatesCount(count);
    }

    useEffect(() => {
        async function fetchInitialData() {
            const page = searchParams.get("page") || 0;
            const itemOffset = page * ITEMS_PER_PAGE;
            const search = searchParams.get("search") || ""
            const initialData = await getSomeUpdatesSearch(ITEMS_PER_PAGE, itemOffset, search);
            setUpdates(initialData);
            const countData = await getSomeUpdatesSearchCount(search);
            const count = Object.values(countData.count[0])[0]; // 🤦🏽‍
            setUpdatesCount(count);
        }
        fetchInitialData().then();
    }, [searchParams]);

    const handleBackClick = () => {
        let pageNum = parseInt(searchParams.get("page")) || 0;
        let search = searchParams.get("search") || "";
        pageNum--;
        const page = pageNum.toString()
        setSearchParams({search, page})
    };

    const handleForwardClick = () => {
        let pageNum = parseInt(searchParams.get("page")) || 0;
        let search = searchParams.get("search") || "";
        pageNum++;
        const page = pageNum.toString()
        setSearchParams({search, page})
    };

    return (
        <div>
            <h1>Stream of Thots 🌊</h1>
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
                                searchTerm={searchParams.get("search") || ""}
                            />
                        ))}
                    </div>
                ) : null}
                <div className="pagination">
                    {parseInt(searchParams.get("page") || 0) > 0 ? (
                        <button className="pagination-button" onClick={handleBackClick}>←</button>
                    ): null}
                    {parseInt(searchParams.get("page") || 0) <= (updatesCount / ITEMS_PER_PAGE - 1) ? (
                        <button className="pagination-button" onClick={handleForwardClick}>→</button>
                    ): null}
                </div>
            </main>
        </div>
    );
}

export default UpdatesList;