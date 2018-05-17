let getDataArr = (data, property) => {
    let arr = [];
    data && data.forEach( el => arr.push(el[property]))
    return arr;
}

export default getDataArr;