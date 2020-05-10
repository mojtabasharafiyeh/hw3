//solve 1
let deleteByIndex = (array, index) => array.filter((element, Index)=> Index - index)
// solve 1 another way
function removeItem(arr, value) { 
    let index = arr.indexOf(value);
    if (index > -1) {
        arr.splice(index, 1);
    }
    return arr;
}
//solve 2 
function combineArrays(){
    let tmp = []
    for(let i in arguments){
        tmp.push(...arguments[i])
    }
    return tmp.sort()
}
// solve 3
function flatten(arr) {
    return arr.reduce(function (flat, toFlatten) {
      return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
    }, []);
  }
//solve4
function findByItem(array , item){
    let index = array.indexOf(item)
    return "item : " + item + "  index : " + index
}
// solve 5
function replaceByItem(array,currentItem,newItem) {
    let current = array.indexOf(currentItem);
    array.splice(current, 1, newItem)
    return array
}
//solve 5
replaceByItem = (array = [], currentItem, newItem) => {
    for(let i in array){
        if(array[i] == currentItem){
            array[i] = newItem
            break;
        }
    }
    return array
}
//solve 6
findNumInArray = (argStr = "") => argStr.split(" ").filter((elem)=> +elem)
//solve 7
removeDuplicate = (array) => [...new Set(array)]
//another way 
function removeDuplicate(array){
    let unique = new Set(array)
    let backToArray = [...unique]
    return backToArray    
    }
    
