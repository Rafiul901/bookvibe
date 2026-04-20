const getStoredBook =()=>{
    const storeBook = localStorage.getItem('readList')
    if(storeBook){
        const storeBookData =JSON.parse(storeBook)
        return storeBookData;
    }
    else {
        return [];
    }
}

const addToStore =(id)=>{
    const storeBookData = getStoredBook();

    if(storeBookData.includes(id)){
        alert('already exist!')

    }
    else {
        storeBookData.push(id);
        const data =JSON.stringify(storeBookData);
        localStorage.setItem("readList",data)
    }
}

export {addToStore,getStoredBook }