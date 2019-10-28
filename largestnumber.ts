const largestNumber =(arr:number[]) =>{
    let largest:number = 0;

    arr.map((item) => {
        if (item > largest){
            largest = item
        }
    })
 return largest;
}

console.log(largestNumber([1, 5, 7, 10, 100, 4]));