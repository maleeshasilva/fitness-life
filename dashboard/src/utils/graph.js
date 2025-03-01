function graphGen(str){
    const yAxis = [];
    const xAxis = [];

    str.map((val, key) => {
        yAxis.push(val.count);
        const strip1 = val.DayDate;
        const strip2 = strip1.split(/[T,-]/);
        xAxis.push(strip2[2]);
      })
    
    return [yAxis, xAxis];
}

export default graphGen;