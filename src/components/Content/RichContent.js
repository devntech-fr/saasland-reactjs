import React, { Component } from "react";

class RichContent extends Component {
    displayTitle = (givenTitle = undefined) => {
        const richTitle = this.props.title !== undefined ? this.props.title : givenTitle;
        return { __html: richTitle };
    }
    displayParagraph = (givenParagraph = undefined) => {
        const richParagraph = this.props.p !== undefined ? this.props.p : givenParagraph;
        return { __html: richParagraph };
    }
}

export default RichContent;

function displayTitle(givenTitle) {
    return { __html: givenTitle };
}

function displayParagraph(givenParagraph) {
    return { __html: givenParagraph };
}

export {
    displayTitle,
    displayParagraph
}
