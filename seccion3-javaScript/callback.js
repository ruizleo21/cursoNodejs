const getUsuarioByID = (id, callBack) => {
    const user = {
        id,
        nombre: 'Leonardo'
    };

    setTimeout(() => {
        callBack(user);
    }, 1500);
};

getUsuarioByID(10, (user) => {
    console.log(user);
});