import React from "react";
import AboutUs from "../components/AboutUs";
import Feature from "../components/FeatureCard";
import Team from "../components/OurTeamCard";

function AboutUsPage() {
    return (
        <section className="container pt-3 about_us">
            <AboutUs />
            <Feature />
            <Team />
        </section>
    )
}

export default AboutUsPage;
