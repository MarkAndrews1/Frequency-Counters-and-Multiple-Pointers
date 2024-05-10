// add whatever parameters you deem necessary
function twoArrayObject(keys, vals) {
    const obj = {}

    for(let i=0; i < keys.length; i++){
        obj[keys[i]] = i < vals.length ? vals[i] : null
    }

    return obj
}

module.exports = twoArrayObject