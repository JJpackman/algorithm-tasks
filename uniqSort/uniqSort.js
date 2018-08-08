export default (arr = []) => {
    const cache = {};
    const res = [];

    arr.forEach(el => {
        if (!cache[el]) {
            cache[el] = true;
            res.push(el);
        }
    });

    return res.sort((a, b) => a - b);
};
