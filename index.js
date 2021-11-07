
function mathmax(){

    let max = arguments[0];
    for(let i = 0; i < arguments.length; i++) {

        if(max<arguments[i]) {
            max = arguments[i];
        };
    }
    console.log(max);
} 
 
mathmax(-4, -6, -2, -1);