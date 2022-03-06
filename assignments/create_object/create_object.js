function CreateObject(arr) {
    // Write your code here
    let d = new Object();
    for(let i=0;i<arr.length -1;i++){
        if(i%2===0){
            d[arr[i]] = arr[i+1]
        }
    }
    return (d)
}
module.exports = CreateObject;
