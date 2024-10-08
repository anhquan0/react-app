import { useState } from "react";

export default function ReadingStatusSelector({onUpdate, shelf, book}) {
    const [readingStatus, setReadingStatus] = useState(shelf || "none");

    const handleChange = (value) => {
        setReadingStatus(value);
        onUpdate(book, value);
    }

    return (
        <div className="book-shelf-changer">
            <select value={readingStatus} onChange={(e) => handleChange(e.target.value)}>
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