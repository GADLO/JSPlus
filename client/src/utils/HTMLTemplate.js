

export const h1 = function (opt) {
    return `<h1 class=${opt?.className}>${opt?.text}</h1>`
}

export const div = function (opt) {
    return `<div id=${opt?.id} class=${opt?.className}>${opt?.text}</div>`
}

export const p = function (opt) {
    return `<p id=${opt?.id} class=${opt?.className}>${opt?.text}</p>`
}

export const canv = function (opt) {
    return `<canvas id=${opt?.id} class=${opt?.className}>${opt?.text}</canvas>`
}


export const btn = function (opt) {
    return `<button id=${opt?.id} class=${opt?.className}>${opt?.text}</button>`
}