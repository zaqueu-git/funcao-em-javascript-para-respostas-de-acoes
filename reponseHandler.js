function responseHandler(data) {
    if(typeof data.status === "undefined" || typeof data.message === "undefined") {
        return console.log("invalid data");
    }

    const status = data.status;
    const message = data.message;    
    const colors = {red: "#F2B8B8", green: "#B7E6B5", blue: "#AFDBE5", yellow: "#F2EAC7",};

    switch (status) {
        case "success":
            return success();
        case "error-type-1":
            return errorType1();
        case "error-type-2":
            return errorType2();
        default:
            return error();
    }

    function success() {
        console.log('%c'+ message, 'color: '+ colors.green +'; font-size: 30px');
    }

    function error() {
        console.log('%c'+ message, 'color: '+ colors.red +'; font-size: 30px');
    }

    function errorType1() {
        console.log('%c'+ message, 'color: '+ colors.blue +'; font-size: 30px');
    }

    function errorType2() {
        console.log('%c'+ message, 'color: '+ colors.yellow +'; font-size: 30px');
    }
}

const data = {
    status: "success",    
    message: "aqui vai o conteúdo",
};

responseHandler(data);