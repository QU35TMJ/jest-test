function arrayAnalysis(array) {
    const total = array.reduce((acc, num) => {
        return acc + num;
    }, 0);
    const length = array.length;
    const average = total / length;
    
    return {
        average: average,
        min: Math.min(...array),
        max: Math.max(...array),
        length: length
    }
}

module.exports = arrayAnalysis;