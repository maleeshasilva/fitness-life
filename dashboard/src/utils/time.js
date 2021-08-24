function timeCal(time){

    let a = time.split(':');
    let mins = (+a[0])*60 + (+a[1]) + 30;
    let hours = (mins / 60);
    let rhours = Math.floor(hours);
    let minutes = (hours - rhours) * 60;
    let rminutes = Math.round(minutes);
    let nextAvailTime = rhours + ":" + rminutes;

    return nextAvailTime;
}

export default timeCal;