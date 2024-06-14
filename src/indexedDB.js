import {openDB} from 'idb'

const dbPromise = openDB('items-db', 1,{
    upgrade(db){
        db.createObjectStore("items", {keyPath: "id"})
    },

});

export const addItemdb = async(item)=>{
    const db = await dbPromise;
    await db.put('items', item)
};

export const getItemFromDb = async()=>{
    const db = await dbPromise;
    return await db.getAll("items")
};

export const deleteItemFromDb = async(id)=>{
    const db = await dbPromise;
    await db.delete("items", id)
}
