import { useState } from "react";

export default function Book({imageUrl, bookTitle, bookAuthors}) {
    return (
        <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 188,
              backgroundImage:
                'url()',
            }}
          ></div>
          <ReadingStatusSelector />
        </div>
        <div className="book-title">Ender's Game</div>
        <div className="book-authors">Orson Scott Card</div>
      </div>
    )
}