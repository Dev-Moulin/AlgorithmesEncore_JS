const k = 17;
const list = [10, 15, 3, 8];
const n = list.length;

function doubleBoucle() {
    for (let i = 0; i < n -1; i++) {
        for (let j = i + 1; j < n; j++) {
            if ( list[j] + list[i] === k) {
                return true
            }
        }
    } 
    return false
}
console.log(doubleBoucle());