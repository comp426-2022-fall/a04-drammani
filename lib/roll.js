export function roll(sides, dice, rolls) {
    var results = new Array(rolls);

    for(let roll=0; roll<results.length; roll++) {
        let total = 0;
        for(let die=0; die<dice; die++) {
            total += Math.floor(Math.random() * sides)+1;
        }
        results[roll] = total;
    }

    var obj = {
        sides: sides,
        dice: dice,
        rolls: rolls,
        results: results
    };
    return obj;
}
