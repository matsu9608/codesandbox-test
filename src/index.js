// // /* constの中身*/
// // // テスト
// // var val1 = "var変数";
// // console.log(val1);

// // // var変数は上書き可能
// // val1 = "var変数をうわがき";
// // console.log(val1);

// // val

// let val2 = "let変数";
// console.log(val2);
// //letは上書き可能
// val2 = "let変数を上書き"
// console.log(val2)

// // let val2 = "let変数を再宣言"

// const val3 = "const変数";
// console.log(val3);
// const val4 = {
//   name: "松吉",
//   age:28,
// }
// console.log(val4);

// val4.name = "jak"
// val4.adress = "osaka"

// // console.log(val4);

// const val5 = ['dog','cat'];
// val5[0]= 'bird';
// val5.push('monkey');
// console.log(val5);

// const name = "matuyosi"
// const age = 28;

// //メッセージを作成する従来の方法
// const message1 = "私の名前は"　+ name + "です。年齢は"+ age + "です。";
// console.log(message1)

// //テンプレート

// const message2　= `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

//アロー関数

//従来のやり方
// function func1(str){
// //   return str;
// // }

// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です"));

// const func2 = (str) => str;

// console.log(func2("func2です"));

// const func3 = (num1, num2) => {
//   return num1 / num2;
// };
// console.log(func3(3, 10));

//分割代入

// //オブジェクト作成
// const myprofile = {
//   name:"松吉",
//   age:25
// }

// const message1 = `私の名前は${myprofile.name}です。年齢は${myprofile.age}です。`;
// console.log(message1);

// //myprofileオブジェクトの各プロパティをname,age変数に代入する。

// const {name,age} = myprofile;
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

// const myprofile = ["松吉", 25];

// const message = `${myprofile[0]}です。年齢は${myprofile[1]}です。`;
// console.log(message);

// const [name, age] = myprofile;
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

//デフォルト値
// const sayhello = (name = "ゲスト") => console.log(`こんにちは！${name}さん!`);
// sayhello();
// const arr1 = [1,2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1=0 ,num2=0) => console.log(num1+ num2);
// sumFunc(arr1[0],arr1[1]);
// sumFunc(...arr1);

//まとめる

// const arr2 = [1,2,3,4,5];
// const[num1,num2,...arry3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arry3);

//配列のコピー・結合
// const arr4 = [10,20];
// const arr5 = [30,40];

// const arr6 = [...arr4];
// arr6[0] = 100;
// console.log(arr6);
// console.log(arr4);

// const arr7 = [...arr4,...arr5];
// console.log(arr7);

// const arr8 = arr4;
// console.log(arr8);

// const nameArr = ["松吉","tanaka","永守"];
// for(let i = 0; i <nameArr.length ; i ++)
// {
//   console.log(`${i+1}番目は${nameArr[i]}です。`);
// }

// const nameArr2 = nameArr.map((name)=>{
//   return `${name}test`;
// })

// console.log(nameArr2);

// nameArr.map((name)=>console.log(name));

nameArr.map((name, index));

// const numArr =[1,2,3,4,5];
// const newNumArr = numArr.filter((num)=>{
//   return num % 2 ===1;
// })

// console.log(newNumArr);
