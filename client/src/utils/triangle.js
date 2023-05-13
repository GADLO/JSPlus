function vec(a, b) {
    return {
        x: b.x - a.x,
        y: b.y - a.y
    }
}


function vecProduct(v1, v2) {
    return v1.x * v2.y - v2.x * v1.y;
}


function sameSymbols(a, b) {
    return (a ^ b) >= 0;
}


export function pointInTriangle(p, a, b, c) {
    var PA = vec(p, a),
        PB = vec(p, b),
        PC = vec(p, c),
        R1 = vecProduct(PA, PB),
        R2 = vecProduct(PB, PC),
        R3 = vecProduct(PC, PA);

    return sameSymbols(R1, R2) && sameSymbols(R2, R3)
}