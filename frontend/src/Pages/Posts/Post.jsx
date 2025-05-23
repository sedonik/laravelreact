import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useLocation } from "react-router-dom";

export default function Post() {
    const location = useLocation();
    const navigateTo = useNavigate();
    const [title, setTitle] = useState(location.state.title);
    const [author, setAuthor] = useState(location.state.author);
    const [body, setBody] = useState(location.state.body);

    return (
        <div>
            <div className="flex flex-col space-y-8 text-left">
                <h1 className="mx-auto text-xl">
                    Show {location.state.title}
                </h1>
                <h2 className="mb-5 font-bold">{title}</h2>
                <p className="font-bold">{author}</p>
                <p>{body}</p>
            </div>
        </div>
    );
}
