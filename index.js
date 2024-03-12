var count=0;
function handleSubmit(event)
{
    event.preventDefault();
    const name=event.target.name.value;
    const rating=event.target.rating.value;
    const obj={
        name,
        rating
    }
    axios.post("https://crudcrud.com/api/692d5e974c7040f2aef97ea45e90dbc1/feedback", obj)
    .then((result)=>{
        showUserOnScreen(result.data);
        increment();
    })
    .catch((error)=>{
        document.body.innerHTML = document.body.innerHTML + "<h4> Something went wrong </h4>"
        console.log(error)
    })
    const star1= document.getElementById('count1');
    const star2= document.getElementById('count2');
    const star3= document.getElementById('count3');
    const star4= document.getElementById('count4');
    const star5= document.getElementById('count5');
    
    function increment() {
        count += 1
        if(obj.rating==1)
        {
            star1.textContent = count
        }
        else if(obj.rating==2)
        {
            star2.textContent = count
        }
        else if(obj.rating==3)
        {
            star3.textContent = count
        }
        else if(obj.rating==4)
        {
            star4.textContent = count
        }
        else if(obj.rating==5)
        {
            star5.textContent = count
        }
    }
    function decrement() {
        count -= 1
        if(obj.rating==1)
        {
            star1.textContent = count
        }
        else if(obj.rating==2)
        {
            star2.textContent = count
        }
        else if(obj.rating==3)
        {
            star3.textContent = count
        }
        else if(obj.rating==4)
        {
            star4.textContent = count
        }
        else if(obj.rating==5)
        {
            star5.textContent = count
        }
    } 
}

window.addEventListener("DOMContentLoaded",()=>{
    axios.get("https://crudcrud.com/api/692d5e974c7040f2aef97ea45e90dbc1/feedback")
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

    const deleteButton=document.createElement('input')
    deleteButton.type = 'button'
    deleteButton.value = 'Delete'

    deleteButton.onclick=()=>
    {
        axios.delete(`https://crudcrud.com/api/692d5e974c7040f2aef97ea45e90dbc1/feedback/${obj._id}`
    )
    .then((response) => displayUserOnScreen(response.data))
    .catch((error) => console.log(error));
    parentElem.removeChild(childElem)
    decrement();
    }

    const editButton=document.createElement('input')
    editButton.type = 'button'
    editButton.value = 'Edit'
    
    editButton.onclick=()=>
    {
        axios.delete(`https://crudcrud.com/api/692d5e974c7040f2aef97ea45e90dbc1/feedback/${obj._id}`
        )
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
        document.getElementById('name').value=obj.name;
        document.getElementById('rating').value=obj.rating;
        parentElem.removeChild(childElem)
        decrement()
        
    }

    childElem.appendChild(editButton)
    childElem.appendChild(deleteButton)
    parentElem.appendChild(childElem)
}