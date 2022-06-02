import {useState} from "react";
import {createUpdate, deleteUpdate} from "../utils/api";

function AuthorPage() {
    const [title, setTitle] = useState("")
    const [createTimestamp, setCreateTimestamp] = useState(0)
    const [updateText, setUpdateText] = useState("")
    const [deleteTimestamp, setDeleteTimestamp] = useState(0)
    const [isMacc, setIsMacc] = useState(false)

    const handleCreateUpdate = (event) => {
        event.preventDefault();
        const timestamp = createTimestamp === 0 ?
            (Math.floor(Date.now()/1000)) :
            createTimestamp;
        createUpdate(timestamp, title, updateText, isMacc).then(() => {
            window.location.reload()
        });
    }

    const handleDeleteUpdate = () => {
        deleteUpdate(deleteTimestamp).then(() => {
           window.location.reload()
        });
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
                    <div className="checkbox">
                        <input
                            type="checkbox"
                            checked={isMacc}
                            onChange={() => setIsMacc(!isMacc)}/>
                        <div className="check-label">Is Dis Macc? 🐈</div>
                    </div>
                    <input
                        placeholder="(optional) timestamp"
                        type="number"
                        onChange={e => setCreateTimestamp(parseInt(e.target.value))}/>
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