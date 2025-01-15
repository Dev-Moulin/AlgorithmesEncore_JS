const { log } = require("console");

const list_1 = [3, 7, 8, 3, 6, 1, 7, 6, 5];
const n = list.length;
let count_1 = 0

function Ouest() {
    for (let i = 0; i < n ; i++) {
        let view = true
        for (let j = i + 1; j < n; j++) {
            if (list_1[i] <= list_1[j]) { 
                view = false;
                break;
            }
        }
        if (view) {
            count_1++;
        }
    }
    return count_;
}

console.log(Ouest());



function vueCoucherDeSoleil(buildings) {
    let count = 0;

    for (let i = 0; i < buildings.length; i++) {
        let hasHigherBuilding = false;

        for (let j = i + 1; j < buildings.length; j++) {
            if (buildings[j] >= buildings[i]) {
                hasHigherBuilding = true;
                break;
            }
        }

        if (!hasHigherBuilding) {
            count++;
        }
    }
    return count;
}

const buildings1 = [3, 7, 8, 3, 6, 1];
console.log(vueCoucherDeSoleil(buildings1));