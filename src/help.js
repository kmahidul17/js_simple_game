export function getID(id){
     try{

        return document.getElementById(id)

     }catch(err){
         console.log(err)

     }

}

export function getClass(classes){
    try{

       return document.getElementsByClassName(classes)

    }catch(err){
        console.log(err)

    }
}

export function queryAll(data){
    try{

       return document.querySelectorAll(data)

    }catch(err){
        console.log(err)

    }

}

export function create(){
    if(arguments.length === 0){
        return document.createElement('div')
    }

    if(arguments.length === 1 & typeof arguments[0] != "object"){

        return document.createElement(arguments[0])
    }

    var tag = arguments[0]
    var attr = arguments[1] || arguments[0]

    if(arguments.length === 1 & typeof arguments[0] === "object"){
        tag = "div"
    }

    var element = document.createElement(tag);

    for(var i in attr){
        element.setAttribute(i, attr[i])
    }

    return element
}

//create() return div
//create('li') no object ,so this function return li or anything
//create('li', {class: 'list'}) return li {}