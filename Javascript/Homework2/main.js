let personData = [
    {
        uid: 1,
        firstName: "Ali",
        lastName: "Mahdavi"
    },
    {
        uid: 2,
        firstName: "Reza" ,
        lastName: "Shahmardan"
    },
    {
        uid: 3,
        firstName: "Hassan",
        lastName: "Qolami" 
    },
    {
        uid: 4,
        firstName: "Morteza",
        lastName: "Hamedani" 
    },
    {
        uid: 5,
        firstName: "Sina",
        lastName: "Hejazi" 
    },
    {
        uid: 6,
        firstName: "Hadi",
        lastName: "Sadri" 
    }
]

let additionalPersonData = [
    {
        uid: 3,
        position: "UI Designer",
        city: "Biarjmand" 
    },
    {
        uid: 1,
        position: "Back-End Develope",
        city: "Taleqan" 
    },
    {
        uid: 2,
        position: "Front-End Developer",
        city: "Behbahan"
    },
    {
        uid: 4,
        position: "Devops",
        city: "Shiraz"
    },
    {
        uid: 6,
        position: "Server Admin",
        city: "Tehran"  
    },
    {
        uid: 5,
        position: "Product Manager",
        city: "Hamedan" 
    }
]

let result = [];

for(let i=0; i<personData.length; i++) {
    result.push({
   ...personData[i], 
   ...(additionalPersonData.find((itmInner) => itmInner.uid === personData[i].uid))}
  );
}

console.log(result);


// result ===> [{
//     uid: 1,
//     firstName: "Ali",
//     lastName: "Mahdavi",
//     position: "Back-End Develope",
//     city: "Taleqan" 
// },
// {

// }, ...]