const HTMLTemplate = {};

HTMLTemplate.h1 = function (text, className) {
    return `<h1 class=${className}>${text}</h1>`
}

export default HTMLTemplate