//write a js function to find the maximun and minimum value of array
const minMax=(arr)=>{
    const sorted=arr.sort((a,b)=>a-b);
    return{ min:sorted[0],max:sorted.pop()};
};
const r=minMax([2,10,12,8,0]);
console.log(r);
