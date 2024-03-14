var c1=0;
var c2=0;
var c3=0;
var c4=0;
var c5=0;
function handleSubmit(event)
{
    event.preventDefault();
    const name=event.target.name.value;
    const rating=event.target.rating.value;
    const obj={
        name,
        rating
    }
    axios.post("https://crudcrud.com/api/bd14b87a0a02463a99c95c499da1ef7f/feedback", obj)
    .then((result)=>{
        showUserOnScreen(result.data);
    })
    .catch((error)=>{
        document.body.innerHTML = document.body.innerHTML + "<h4> Something went wrong </h4>"
        console.log(error)
    })
    
}
window.addEventListener("DOMContentLoaded",()=>{
    axios.get("https://crudcrud.com/api/bd14b87a0a02463a99c95c499da1ef7f/feedback")
    .then((result)=>
    {
        for(var i=0;i<result.data.length;i++)
        {
            showUserOnScreen(result.data[i]);
        }
    })
    .catch((error)=>{
        document.body.innerHTML = document.body.innerHTML +"<h4> Something went wrong </h4>"
    })
})
function showUserOnScreen(obj){
    const parentElem = document.getElementById('listOfitems')
    const childElem = document.createElement('li')
    childElem.textContent=' '+obj.name+' - '+obj.rating+' '

    const star1 = document.getElementById('count1')
    const star2 = document.getElementById('count2')
    const star3 = document.getElementById('count3')
    const star4 = document.getElementById('count4')
    const star5 = document.getElementById('count5')
    
    if(obj.rating==1)
    {
        star1.textContent=++c1
    }
    if(obj.rating==2)
    {
        star2.textContent=++c2
    }
    if(obj.rating==3)
    {
        star3.textContent=++c3
    }
    if(obj.rating==4)
    {
        star4.textContent=++c4
    }
    if(obj.rating==5)
    {
        star5.textContent=++c5
    }

    const deleteButton=document.createElement('input')
    deleteButton.type = 'button'
    deleteButton.value = 'Delete'
    deleteButton.className = "btn btn-primary btn-sm"

    deleteButton.onclick=()=>
    {
        axios.delete(`https://crudcrud.com/api/bd14b87a0a02463a99c95c499da1ef7f/feedback/${obj._id}`
    )
    .then((response) => {
        if(obj.rating==1)
        {
            star1.textContent=--c1
        }
        if(obj.rating==2)
        {
            star2.textContent=--c2
        }
        if(obj.rating==3)
        {
            star3.textContent=--c3
        }
        if(obj.rating==4)
        {
            star4.textContent=--c4
        }
        if(obj.rating==5)
        {
            star5.textContent=--c5
        }
    })
    .catch((error) => console.log(error));
    parentElem.removeChild(childElem)
    }

    const editButton=document.createElement('input')
    editButton.type = 'button'
    editButton.value = 'Edit'
    editButton.className = "btn btn-primary btn-sm"
    
    editButton.onclick=()=>
    {
        axios.delete(`https://crudcrud.com/api/bd14b87a0a02463a99c95c499da1ef7f/feedback/${obj._id}`
        )
        .then((response) =>{
            if(obj.rating==1)
        {
            star1.textContent=--c1
        }
        if(obj.rating==2)
        {
            star2.textContent=--c2
        }
        if(obj.rating==3)
        {
            star3.textContent=--c3
        }
        if(obj.rating==4)
        {
            star4.textContent=--c4
        }
        if(obj.rating==5)
        {
            star5.textContent=--c5
        }
        })
        .catch((error) => console.log(error));
        document.getElementById('name').value=obj.name;
        document.getElementById('rating').value=obj.rating;
        parentElem.removeChild(childElem)
        
    }
    childElem.appendChild(editButton)
    childElem.appendChild(document.createTextNode (" "))
    childElem.appendChild(deleteButton)
    parentElem.appendChild(childElem)
}