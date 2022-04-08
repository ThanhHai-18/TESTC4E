// Bài 1A:
// function allLongerString(inputArray){
//     let longerlength = 0;
//     for (let i = inputArray.length - 1; i >= 0; i--) {
//         if (inputArray[i].length > longerlength)
//             longerlength = inputArray[i].length;
//     }
//     let name=[];
//     for (let i = inputArray.length - 1; i >= 0; i--) {
//         if (inputArray[i].length == longerlength)
//         {
//             name.push(inputArray[i]);
//         }
//     }
//     return name;
// }
// let names =['BINH', 'HUNG', 'PHUOC', 'CAO', 'KHANH'] ;
// let name1 =[];
// name1 = allLongerString(names)
// alert(name1);

// Bài 2:
// function alternatingSums(inputArray){
//     let sum1 =[];
//     sum1[0] = 0;
//     sum1[1] = 0;
//    let i = 0;
//     for ( i; i <= inputArray.length - 1; i++) {
//         console.log(i % 2);
//         if (i % 2 == 0)
//         sum1[0] += inputArray[i];
//         else
//         sum1[1] += inputArray[i];
//     }
//     return sum1;
// }

// let weigth = [60, 40, 55, 75, 64] ;
// let sum2 =[];
// sum2 = alternatingSums(weigth);
// alert(sum2);

// Bài 3
let randomColor = "#000000";
document.getElementById("pick-color").addEventListener("click", ChangeColor, true);
function ChangeColor() {}
