module.exports = function towelSort(matrix) {
    if (!matrix) return [];

    let arrClone = [...matrix];
    let res = [];

    arrClone.forEach((el, i) => {
        if (i % 2 === 0) res.push(...el);
        else res.push(...el.reverse());
    });

    return res;
};
