(() => {

    const error = (msg: string):never => {
        throw new Error(msg);
    }

    console.log(error);

})()