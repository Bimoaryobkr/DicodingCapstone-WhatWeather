import React from "react";

function SearchBar() {
    return (
        <div>
            <form className="d-flex search_bar my-4">
                <input placeholder="Search" aria-label="Search" type="search" className="me-2 form-control" />
                <button type="button" className="btn btn-dark">Search</button>
            </form>
        </div>
    )
}

export default SearchBar;