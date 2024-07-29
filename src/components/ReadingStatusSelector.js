import { useState } from "react";

export default function ReadingStatusSelector() {
    const [readingStatus, setReadingStatus] = useState("None");

    return (
        <div className="book-shelf-changer">
            <select value={readingStatus} onChange={(e) => setReadingStatus(e.target.value)}>
                <option value="none" disabled>
                    Move to...
                </option>
                <option value="currentlyReading">
                    Currently Reading
                </option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
            </select>
        </div>
    )
} 