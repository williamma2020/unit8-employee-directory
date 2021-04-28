const search = document.querySelector('#search');
const boxTexts = document.querySelectorAll('.card .name');
const handleSearch = event => {
    //define searchTerm as event
    const searchTerm = event.target.value.toLowerCase();
    boxTexts.forEach(boxText => {
        const text = boxText.textContent.toLowerCase();
        const box = boxText.parentElement;


        //if input letter included in the searchTerm, box show up.
        if(text.includes(searchTerm)) {
          box.style.display = "block";
          //otherwise, box disappear
        } else {
          box.style.display = "none";  
        }
      });
}
search.addEventListener('keyup', handleSearch);

