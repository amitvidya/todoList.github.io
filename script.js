const arr=[];
function  addElement(){
    let va=document.getElementById("sebar").value;
    arr.push(va);
    show();
}
function show(){
    var ht='';
    for(let i=0;i<arr.length;i++){
        ht+=`<span>
        <p>${arr[i]} <button onclick="deletes(${i})">X</button></p>
    
    </span>`
    }
    document.getElementById("list").innerHTML=ht;
    console.log(arr);
}
function deletes(i){
    console.log(i);
    arr.splice(i,1);
    show();
}

document.getElementById('add').addEventListener("click",function(e){
    e.preventDefault();
    addElement()
})