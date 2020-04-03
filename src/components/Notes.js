import React from 'react'

export const Notes = ({notes, onRemove}) =>
    (
        <ul className="list-group">
            {notes.map(note => (
                <li className="list-group-item note" key={note.id}>
                    <div>
                        <strong>{note.title}</strong>
                        <small>{note.date}</small>
                    </div>

                    <button onClick={() => onRemove(note.id)} className="btn btn-outline-danger"
                            type="button">&times;</button>
                </li>

            ))}
        </ul>
    )

