function CanDrive(hasDrivingLiscence, isTired, isSober) {
    // Write you code here
    if(hasDrivingLiscence==false)
    {
        return "You cannot drive"
    }
    else if(isTired==false && isSober==false)
    {
        return "You shouldn't drive"
    }
    else if(isTired==true && isSober==false)
    {
        return "You shouldn't drive"
    }
    else if(isTired==false  && isSober==true)
    {
        return  "You can drive"
    }
}

module.exports = CanDrive;


// If you don't have liscence - the result should be "You cannot drive"

// Otherwise

// If you are tired - "You shouldn't drive"

// If you are not sober - "You shouldn't drive"

// If you are not tired and you are sober - "You can drive"