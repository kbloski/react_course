import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder(){
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    function onSubmit (e) {
        e.preventDefault();
        // console.log("Search for order #", query);

        if (!query) return;
        navigate(`/order/${query}`);


    }

    return<form onSubmit={onSubmit}>
        <input placeholder="Search order #" value={query} onChange={e => setQuery(e.target.value)} />;
        <button type="submit">Search</button>
    </form> 
}

export default SearchOrder;