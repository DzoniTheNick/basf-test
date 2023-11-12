import { useEffect } from "react";

import Container from "./components/Container/Container";
import Input from "./components/Input/Input";

import { useAppDispatch } from "./store/store";
import { setComments } from "./store/feature/comments";

import data from "./assets/data/data.json";

import { getFirstCommentDate } from "./utils/helpers";

import "./App.scss";

function App() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setComments(data.data.comments));
    }, []);

    return (
        <div className="App">
            <p id="date">{getFirstCommentDate(data)}</p>
            <Container />
            <Input />
        </div>
    );
}

export default App;
