



//on the html form tag, put an id of searchForm

window.on("load", (e)=>{
    var form = document.querySelector("#searchForm")
    var listen = form.addEventListener("submit", search(Event))
})

function search(event) {
    console.log(event)
    cineole.log("search function fired")
    var _search = document.querySelector("#search")
    var search = _search.value;
    console.log("input element",_search)
    coneole.log("input value",search)
    
    if(!search&&search.length == 0) {
        console.log("No search value!")
        return
    }
    
    console.log("sending to search page")
    var path = "search.html?" + search;
    window.location = path;
    return
}

