function CreateObject(arr) {
    // Write your code here
    let d ={}
    for(let i=0;i<arr.length;i=i+2){
        {
            d[arr[i]] = arr[i+1]
        }
    }
    return (d)
}
module.exports = CreateObject;
