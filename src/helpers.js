const choice = function (items){
  const index = Math.floor(Math.random() * items.length);
  return items[index];
}

const remove = function (items, item){
    const index = items.indexOf(item);
    if (index != -1) {
        items.splice(index,1);
        return items;
    }
    else return undefined;
}

export {choice, remove};