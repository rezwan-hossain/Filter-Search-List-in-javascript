// lets grabe the Input section
var filterInput = document.getElementById('filterInput');

// Add Event Listener
filterInput.addEventListener('keyup', filterName);

// When key is press this function will trigger
function filterName (){
    // get the value form input
    var filterValue = filterInput.value.toUpperCase()
    
    //get ul
    var ul = document.getElementById('names');
    // get all the list form ul
    var li = ul.querySelectorAll('li.collection-item');
    // all li item pun on into arry because #querySelectorAll
    // now we need to loop all the collection-item li on array
    for (var i =0; i<li.length; i++){
        // to get the all the  #a tag 
        //#getElementByTagName return collection of element of nodeList
            // object, nodeList is collection of node it can access by index number
        var a = li[i].getElementsByTagName('a')[0];
        // now we have all the #a tag

        // Match logic
            /* The #indexOf() return the index at which a given element can be found
            in the array if it dosent found it return -1 */
        if(a.innerHTML.toUpperCase().indexOf(filterValue) > -1){
            li[i].style.display = '';
        } else{
            li[i].style.display = 'none';
        }
            
        
    }
}