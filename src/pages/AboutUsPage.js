import React from "react";
import AboutUs from "../components/AboutUs";
import Team from "../components/OurTeamCard";

function AboutUsPage() {
    return (
        <section className="container pt-3 about_us">
            <AboutUs />
            <Team />
        </section>
    )
}

export default AboutUsPage;
