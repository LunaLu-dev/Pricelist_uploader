
async function GetCategories(){
    fetch('http://127.0.0.1:7069?type=read')
        .then(response => response.json())
        .then(data => {
            data.forEach((item) => {
                var category = document.createElement('option');
                category.value = item.code_name;
                category.innerText = item.public_name;

                document.getElementById('category').appendChild(category);
            })
        })
        .catch(error => console.error('Error:', error));
}

async function GetSubCategories(category){
    url = 'http://127.0.0.1:7069?type=read&category=' + document.getElementById("category").value;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        data.forEach((item) => {
            console.log(item);
            var subCategory = document.createElement('option');
            subCategory.value = item.code_name;
            subCategory.innerText = item.public_name

            document.getElementById('subcategory').appendChild(subCategory);
        })
    })
}

