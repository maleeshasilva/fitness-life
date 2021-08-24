function memberPercentage(online,physical){

    let total = online + physical;

    if(online == 0){
        return 100;
    }else if(physical == 0){
        return 0;
    }else{
        return (online/total)*100;
    } 
}

export default memberPercentage;