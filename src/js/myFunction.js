export default function specialAttack(obj, [id, name, description, icon]) {
    const arr = obj.special;
    const arrResulte = [];
    
    for (let i = 0; i < arr.length; ++i) {
        // console.log(arr[i]);
        const objectOut = {
            id: obj.special[i].id,
            name: obj.special[i].name,
            
            icon: obj.special[i].icon
        };

        if (obj.special[i].description) {
            objectOut.description = obj.special[i].description
        } else {
            objectOut.description = 'Описание недоступно'
        };

        arrResulte.push(objectOut);
    }

    return arrResulte;
};