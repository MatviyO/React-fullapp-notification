import React, {Fragment, useContext, useEffect} from "react";
import {Form} from "../components/Form";
import {Notes} from "../components/Notes";
import {FireBaseContext} from "../context/firebase/firebaseContext";
import {Loader} from "../components/loading";

export const Home = () => {
    const {loading, notes, fetchNodes, removeNote} = useContext(FireBaseContext)
    useEffect(() => {
        fetchNodes()
        // eslint-disable-next-line
    }, [])
    return (
        <Fragment>
            <Form/>

            <hr/>
            {loading ? <Loader/> : <Notes notes={notes} onRemove={removeNote}/>}

        </Fragment>

    )
}
