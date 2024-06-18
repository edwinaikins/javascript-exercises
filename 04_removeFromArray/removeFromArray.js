const removeFromArray = function(items,...itemToRemove) {
    let newItems = [];
    for(let item of items){
        if(!itemToRemove.includes(item)){
            newItems.push(item);
        }
    }
    return newItems;
};

// Do not edit below this line
module.exports = removeFromArray;
