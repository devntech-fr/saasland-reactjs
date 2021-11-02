import React from "react";
import Layout from "projects/psychomot/Layout";
import SupportBanner from "sections/Banner/SupportBanner";

function ContactMe({ match }) {
    return (
        <Layout
            match={match}
        >

            <SupportBanner
                title={`Se rendre au cabinet paramédical`}
                p={`Accessible Métro Rangueil, Saouzelong, St Agne<br/>
17 Avenue des Écoles Jules Julien - 31400 TOULOUSE<br/>
Lundi au Samedi - Uniquement Sur RDV<br/>
Parking Gratuit`}
                image={{
                    src: `/img/new-home/banner.png`,
                    alt: "Cloud banner"
                }}
            />
        </Layout>
    )
}

export default ContactMe;
