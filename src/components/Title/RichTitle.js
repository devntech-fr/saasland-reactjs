import React from "react";

function RichTitle(title) {
    return {__html: title ? title : `First &middot; Second`};
}

export default RichTitle;
