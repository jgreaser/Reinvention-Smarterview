////////////UTILITIES////////////

function hasElement(x, y){
    for(var i=0; i < y.data.length; i++)
            {
            
            if (x ==  y.data[i].type){
               // console.log(x + " " + y.data[i].type);
                return true;}
            }
    return false;
}