class AbstractBanner {
    constructor() {
        if (this.constructor === AbstractBanner) {
            throw new Error('Abstract class "AbstractConfig" cannot be instantiated directly')
        }
        this.properties = {
            title: '',
            paragraph: '',
            image: {
                src: '',
                alt: ''
            }
        };
    }

    displayTitle(title) {
        return { __html: title };
    }

    displayParagraph(paragraph) {
        return { __html: paragraph };
    }
}

export default AbstractBanner;
