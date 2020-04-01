import React from 'react'

export const Notes = ({notes}) => {
    return (
        <ul className="list-group">
            {notes.map( note => (
                <li className="list-group-item note" key={note.id}>
                    <div>
                        <strong>{note.title}</strong>
                        <small>{new Date().toLocaleDateString()}</small>
                    </div>

                    <button className="btn btn-outline-danger" type="button">&times;</button>
                </li>

            ))}
        </ul>
    )
}
