function exibir(){
    let n= document.getElementById("n").value
    //resolve os triangulares
    let t=0
    let i=1
    document.getElementById("tri").innerHTML=""
    document.getElementById("qua").innerHTML=""
    do{
        t+=i
        document.getElementById("tri").innerHTML += `${t} - `
        document.getElementById("qua").innerHTML += `${i**2} - `
        i++
    }while(i<=n)
    //resolve o Fibonacci
    let x1=0
    let x2=1
    for(let f=1;f<=n;f++){
        document.getElementById("fib").innerHTML += `${x2} - `
        x2 = x2 + x1
        x1 = x2 - x1
    }

}