// ข้อ1
// let num = prompt("ใส่เลข");
// let star ="";
// function methoddraw(num){
//     for(let i=0; i<num; i++){
//     star+="*"  
//     }
//     alert(star)
// }
// methoddraw(num);


// ข้อ2
// let num = prompt("ใส่เลข");
// let star = "";
// function methodDraw(num) {
//     for (let i = 0; i < num; i++) {
//         for(let j = 0; j<num; j++){
//         star+= "*"    
//         }
//     star+= "\n"   
//     }
//     console.log(star);
// }
// methodDraw(num);

// ข้อ3
// let num = prompt("ใส่เลข");

// function methodDraw(num) {
// let star = "";    
//     for (let i = 1; i <= num; i++) {
//         for(let j = 1; j<=num; j++){
//         star+= j    
//         }
//     star+= "\n"   
//     }
//     console.log(star);
// }
// methodDraw(num);

// ข้อ4
// let num = prompt("ใส่เลข");
// function methodDraw(num) {
// let star = "";    
//     for (let i = 1; i <= num; i++) {
//         for(let j = 1; j<=num; j++){
//         star+= i   
//         }
//     star+="\n"   
//     }
//     console.log(star);
// }
// methodDraw(num);


// ข้อ5
// let num = prompt("ใส่เลข");
// function methodDraw(num) {
// let star = "";    
//     for (let i = num; i>0; i--) {
//         for(let j = 1; j<=num; j++){
//         star+= i   
//         }
//     star+="\n"   
//     }
//     console.log(star);
// }
// methodDraw(num);

// ข้อ6
// let num = prompt("ใส่เลข");

// function methodDraw(num) {
//     let star = "";
//     for (let i = 0; i <= num ** 2; i++) {
//         if (i % num == 0) {
//             star += "\n"
//         }
//         star+=i
//     }
//     console.log(star);

// }
// methodDraw(num);

// ข้อ7
// let num = prompt("ใส่เลข");

// function methodDraw(num) {
//     let star = "";
//     for (let i = num ** 2; i > 0; i--) {
//         star+=i
//         if (i % num !== 0) {
//             star += "\n"
//         }

//     }
//     console.log(star);

// }
// methodDraw(num);

// ข้อ8
// let num = prompt("ใส่เลข");

// function methodDraw(num) {
//     let star = "";
//     for (let j = 0; j < num; j+=2) {
//         star += j + "\n"
//     }
//     console.log(star);
// }
// methodDraw(num);

// ข้อ9
// let num = prompt("ใส่เลข");
// let star = "";
// function methodDraw(num) {
//     for (let i = 2; i<=num; i++) {
//         for(let j= 0; j<num; j++){
//            star+=i
//             if(i%2==0){
//             star+="\n"
//             } 
//             i+=2
//         }

//         console.log(star); 
//         }
//     }   
// methodDraw(num);


// let sum=0;
// for (let i = 1; i<=164; i++);{
//     sum += i
// }
// console.log(sum)

// console.log(sum)

// let sum = 0;
// for(let k=2; k<=420; k=k+2){
//     sum+=k;
// }
// console.log(sum)

// ข้อ 10
// let num = prompt("ใส่เลข");
// function methodDraw(num) {
//     let star = "";
//     for (let i = 1; i <= num; i++) {
//         for (let j = 1 ; j <= num; j++) {
//             star += j*i   
//         }
//         star+= "\n"
//     }console.log(star)
// }
// methodDraw(num);







// Map ฉบับเต็ม
// function myCustomMap(array, transformFn) {
//     let resultArray = []
//     for (let i = 0; i < array.length; i++) {
//         resultArray.push(transformFn(array[i])) 
//     }
//     return resultArray
// }
// // [1, 2, 3, 4] ==> [2, 4, 6, 8];
// const targetArray = [1, 2, 3, 4]
// // const resultArray = targetArray.map(item => item*2)
// const resultArray = myCustomMap(targetArray, item => item * 2);
// // const resultArray ==> [2, 4, 6, 8];

// console.log(myCustomMap(targetArray, item => item**3))

// filter ฉบับเต็ม
// function myCustomFilter(array, filterCondition) {
//     let resultArray = []
//     for (let i = 0; i < array.length; i++) { 
//     if(filterCondition(array[i])){
//       resultArray.push(array[i])
//     }
//     }
//     return resultArray
// }
// // [1, 2, 3, 4] ==> [2, 4, 6, 8];
// const targetArray = [1, 2, 3, 4]
// // const resultArray = targetArray.map(item => item*2)
// const resultArray = myCustomMap(targetArray, item => item * 2);
// // const resultArray ==> [2, 4, 6, 8];

// console.log(myCustomFilter(targetArray, item => item>1))

// ข้อ 11
// function methodDraw(num) {
//     let star = "";
//     for (let i = 0; i < num; i++) {
//         for (let j = 0 ; j < num; j++) {
//             if (i != j) {
//                 star += "*"
//             } else {
//                 star += "-"    
//             }   
//         } star+= "\n"
//     }console.log(star)
// }
// methodDraw(2);


// ข้อ 12
// function methodDraw(num) {
//     let star = "";
//     for (let i = 0; i < num; i++) {
//         for (let j = num; j>0; j--) {
//             if (i == j-1) {
//                 star += "-"
//             } else
//                 star += "*"
//         }
//         star += "\n"

//     } console.log(star)
// }
// methodDraw(3);

// ข้อ 13
// let num = prompt('enter number')
//     let star = "";
//     for (let i = 0; i < num; i++) {
//         for (let j = 0 ; j < num; j++) {
//             if (i<j) {
//                 star += "-"
//             }else star += "*"     
//         } star+= "\n"
//     }console.log(star)





// ข้อ 14
// function eDok(num){
//     let star ="";
//     for (i=0; i<num; i++){
//         for (j=0; j<num; j++){
//             if (j>=num-i){
//                 star+="-"
//         }else star+="*"
//     }star+="\n"
//     }
//     console.log(star)
// }
// eDok(3);



// ข้อ 15
// let num = prompt('enter number')
// let star = "";
// for (let i = 0; i < num; i++) {
//     for (let j = 0 ; j < num; j++) {
//         if (i<j) {
//             star += "-"
//         }else star += "*"     
//     } star+= "\n"
// }
//     for (i=1; i<num; i++){
//         for (j=0; j<num; j++){
//             if (j>=num-i){
//                 star+="-"
//         }else star+="*"
//     }star+="\n"
//     }
//     console.log(star)
// ข้อ 17
//   let num = prompt('enter num')
//     let star ="";
//     for (i=1; i<=num; i++){
//         for (j=0; j<num; j++){
//             if (num-i<=j){
//                 star+="*"
//         }else star+="-"
//     }star+="\n"
//     }
//     console.log(star)

// ข้อ 18
// function methodDraw(num) {
//     let star = "";
//     for (let i = 0; i < num; i++) {
//         for (let j = 0 ; j < num; j++) {
//             if (i>j) {
//                 star += "-"
//             }else star += "*"     
//         } star+= "\n"
//     }console.log(star)
// }
// methodDraw(3);


// ข้อ 19
//   let num = prompt('enter num')
//     let star ="";
//     for (i=1; i<=num; i++){
//         for (j=0; j<num; j++){
//             if (num-i<=j){
//                 star+="*"
//         }else star+="-"
//     }star+="\n"
//     }
//     for (let i = 1; i < num; i++) {
//         for (let j = 0 ; j < num; j++) {
//             if (i>j) {
//                 star += "-"
//             }else star += "*"     
//         } star+= "\n"
//     }
//     console.log(star)

ข้อ 20
let num = prompt("enter num")
let star = "";
for (let i = 1; i <= num; i++) {
    for (let j = 1; j<= num; j++) {
        if (j > num - i) {
            star+= i
        } else { star += "-" }
        
    }star += "\n"
}
    console.log(star)