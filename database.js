
async function GetCategories(){
    fetch('http://127.0.0.1:7069?type=read')
        .then(response => response.json())
        .then(data => {
            document.getElementById('category').innerHTML = '<option value="" disabled selected>Select Category</option>';
            data.forEach((item) => {
                var category = document.createElement('option');
                category.value = item.code_name;
                category.innerText = item.public_name;

                document.getElementById('category').appendChild(category);
            })
        })
        .catch(error => console.error('Error:', error));
}

async function GetSubCategories(){
    url = 'http://127.0.0.1:7069?type=read&category=' + document.getElementById("category").value;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        document.getElementById('subcategory').innerHTML = '<option value="" disabled selected>Select Subcategory</option>';
        data.forEach((item) => {
            var subCategory = document.createElement('option');
            subCategory.value = item.code_name;
            subCategory.innerText = item.public_name

            document.getElementById('subcategory').appendChild(subCategory);
        })
    })
}

async function GetBrands(){
    url = 'http://127.0.0.1:7069?type=read&category=' + document.getElementById("category").value + '&subcategory=' + document.getElementById("subcategory").value;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            document.getElementById('brand').innerHTML = '<option value="" disabled selected>Select Brand</option>';
            data.forEach((item) => {
                var subCategory = document.createElement('option');
                subCategory.value = item.code_name;
                subCategory.innerText = item.public_name

                document.getElementById('brand').appendChild(subCategory);
            })
        })
}

