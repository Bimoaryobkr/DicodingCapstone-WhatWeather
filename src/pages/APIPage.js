import React from "react";
import APIDesc from "../components/APIDesc";
import APILink from "../components/APILinkCard";

function APIPage() {
    return (
        <section className="container pt-3 mb-4 api_page">
            <APIDesc />
            <APILink />
        </section>
    )
}

export default APIPage;