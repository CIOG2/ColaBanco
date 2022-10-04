function* generatorID(){
    let id = 100;
    while(true){
        yield id++;
    }
}

export default generatorID;