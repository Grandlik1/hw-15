let num = +prompt()
if (num < 1 || num == null){
    console.log('NaN')
}else {
    for (let i = 2 ; i < num ; i++ ){
        if ( num % i === 0 ){
            console.log(`минимальный делитель найден ${i}`)
            break;
        }else{
            console.log("число простое")
            break;
        }
    }
}
