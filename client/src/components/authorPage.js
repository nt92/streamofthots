import {useState} from "react";
import {createUpdate, deleteUpdate} from "../utils/api";

function AuthorPage() {
    const [updateText, setUpdateText] = useState("")
    const [title, setTitle] = useState("")
    const [deleteTimestamp, setDeleteTimestamp] = useState(0)

    const handleCreateUpdate = (event) => {
        event.preventDefault();
        const timestamp = Math.floor(Date.now()/1000);
        createUpdate(timestamp, title, updateText).then()
    }

    const handleDeleteUpdate = (event) => {
        event.preventDefault();
        console.log(deleteTimestamp)
        deleteUpdate(deleteTimestamp).then()
    }

    return (
        <div>
            <h1>Author ✍🏽</h1>
            <main>
                <form
                    className="author-create"
                    method="post"
                    action="author/create"
                    onSubmit={handleCreateUpdate}>
                    <input
                        placeholder="title"
                        onChange={e => setTitle(e.target.value)}/>
                    <textarea
                        placeholder="what's on your mind?"
                        onChange={e => setUpdateText(e.target.value)}></textarea>
                    <button type="submit">Send to Stream</button>
                </form>
                <form
                    className="author-delete"
                    method="delete"
                    action="author/delete"
                    onSubmit={handleDeleteUpdate}>
                    <input
                        placeholder="timestamp"
                        type="number"
                        onChange={e => setDeleteTimestamp(parseInt(e.target.value))}/>
                    <button type="submit">Delete</button>
                </form>
            </main>
        </div>
    )
}

export default AuthorPage