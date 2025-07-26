function handleSave(){
    const inputs = document.querySelectorAll('.right input')
    let isEmpty = false

    inputs.forEach(input=>{
        if(input.value.trim()==="")
            isEmpty=true
    })
    if(isEmpty){
        alert("Please fill up the values first!")
    }
    else{
        alert("Data is Saved!")
    }
    inputs.forEach(input=>{
        input.value=""
    })
}