let myData = document.querySelector("#myData");

dab.collection("Report").get().then((data) => {
    console.log("all docs", data);
    let allData = [];

    data.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots

        console.log(doc.id, " => ", doc.data());
        allData.push(doc.data());
    });
    displayFirebaseData(allData);
});


let DomTree = '';


function displayFirebaseData(fireData){
    fireData.map((item)=>{
        DomTree = DomTree + `<div>
            <p>My name is : ${item.name} </p>
            <img src="${item.profImg}" width="200px"/> 
        </div>`;
    });

    console.log("after map->", DomTree);
    myData.innerHTML=DomTree;
}

















// functionName().then((data) =>{
//     // write any thing here
// }).catch((err) =>{
//     //when the error has happened
// });