var people = []

function addPeople() {
    var fName = document.getElementById("fNameInput").value
    var lName = document.getElementById("lNameInput").value
    var fullName =fName + " " + lName
    let checkF = fName.includes("+", "*", "/", "!")
    let checkL = lName.includes("+", "*", "/", "!")
    if ( checkF !== true && checkL !== true ) {
        if (fName !== "" && lName !== "") {
            people.push(fullName)
            const node = document.createElement("li");
            const textnode = document.createTextNode(fullName);
            node.appendChild(textnode);
            document.getElementById("itemList").appendChild(node);
        } else {
            alert("Nějaké pole je prázdné");
        } 
    } else {
        alert("Nějaké pole obsahuje symboly");
    }
}

function clearList() {
    people = []
    parentNode.removeChild(document.getElementById("itemList"));
}