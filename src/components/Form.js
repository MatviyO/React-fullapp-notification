import React, {useState, useContext} from  'react'
import {AlertContext} from "../context/alert/alertContext";
import {FireBaseContext} from "../context/firebase/firebaseContext";

export const Form = () => {
    const [value,setValue] = useState('')
    const alert = useContext(AlertContext)
    const firebase = useContext(FireBaseContext)

    const submitHandler = event => {
        event.preventDefault()
        if (value.trim()) {
            firebase.addNote(value.trim()).then(() => {
                alert.show('Note created good', 'success')
            }).catch(() =>  {
                alert.show('No created ', 'danger')
            })
            setValue('')
        } else {
            alert.show('writing text', 'warning')
        }

    }
    return (
        <form onSubmit={submitHandler}>
            <div className="form-group">
                <input type="text"className="form-control" placeholder="Name" value={value} onChange={e => setValue(e.target.value)} />
            </div>
        </form>
    )
}
