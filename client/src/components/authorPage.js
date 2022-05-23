import {useState} from "react";
import {createUpdate, deleteUpdate} from "../utils/api";

function AuthorPage() {
    const [updateText, setUpdateText] = useState("")
    const [title, setTitle] = useState("")
    const [deleteTimestamp, setDeleteTimestamp] = useState(0)

    const handleCreateUpdate = () => {
        const timestamp = Math.floor(Date.now()/1000);
        createUpdate(timestamp, title, updateText).then()
    }

    const handleDeleteUpdate = () => {
        deleteUpdate(deleteTimestamp).then()
    }

    const handleKeyDown = (event) => {
        switch (event.key) {
            case 'Tab': {
                const idx = event.target.selectionStart;
                if (idx == null) return;
                event.preventDefault();
                const val = event.target.value;
                const front = val.substring(0, idx);
                const back = val.substring(idx);
                event.target.value = front + '\t' + back;
                event.target.setSelectionRange(idx + 1, idx + 1);
                break;
            }
            case 'Enter': {
                if (!event.ctrlKey && !event.metaKey) return;
                event.preventDefault();
                event.target.closest('form').submit();
                break;
            }
            default: {
                break;
            }
        }
    }

    return (
        <div>
            <h1>Author ✍🏽</h1>
            <main>
                <form
                    className="author-create"
                    onSubmit={handleCreateUpdate}>
                    <input
                        placeholder="title"
                        onChange={e => setTitle(e.target.value)}/>
                    <textarea
                        placeholder="what's on your mind?"
                        onChange={e => setUpdateText(e.target.value)}
                        onKeyDown={handleKeyDown}></textarea>
                    <button type="submit">Send to Stream</button>
                </form>
                <form
                    className="author-delete"
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