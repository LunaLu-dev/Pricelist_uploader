/*document.addEventListener('DOMContentLoaded', function() {
    // Call GetCategories when the page loads
    GetCategories();
});

//Read Data
async function GetCategories(){
    fetch('https://db-api-hificonsult.lunalu.xyz/?type=read')
        .then(response => response.json())
        .then(data => {
            document.getElementById('category').innerHTML = '<option value="" disabled selected>Select Category</option>';
            data.forEach((item) => {
                const category = document.createElement('option');
                category.value = item.code_name;
                category.innerText = item.public_name;

                document.getElementById('category').appendChild(category);
            })
        })
        .catch(error => console.error('Error:', error));
}

async function GetSubCategories(){
    const url = 'https://db-api-hificonsult.lunalu.xyz/?type=read&category=' + document.getElementById("category").value;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            document.getElementById('subcategory').innerHTML = '<option value="" disabled selected>Select Subcategory</option>';
            data.forEach((item) => {
                const subCategory = document.createElement('option');
                subCategory.value = item.code_name;
                subCategory.innerText = item.public_name

                document.getElementById('subcategory').appendChild(subCategory);
            })
        })
        .catch(error => console.error('Error:', error));
}*/

async function GetBrands(){
    const url = 'https://db-api-hificonsult.lunalu.xyz/?type=read';
    fetch(url)
        .then(response => response.json())
        .then(data => {
            document.getElementById('brand').innerHTML = '<option value="" disabled selected>Select Brand</option>';
            data.forEach((item) => {
                const subCategory = document.createElement('option');
                subCategory.value = item.code_name;
                subCategory.innerText = item.public_name

                document.getElementById('brand').appendChild(subCategory);
            })
        })
        .catch(error => console.error('Error:', error));
}

//Write
/*async function AddCategory(name){
    const url = 'https://db-api-hificonsult.lunalu.xyz/?type=write&name=' + name + '&ref=category';
    fetch(url)
        .then( () => {
            GetCategories();
            document.getElementById("category").value = name;
        })
        .catch(error => console.error('Error:', error));
}

async function AddSubCategory(name){
    const url = 'https://db-api-hificonsult.lunalu.xyz/?type=write&category=' + document.getElementById("category").value + '&name=' + name + '&ref=subcategory';
    fetch(url)
        .then( () => {
            GetSubCategories();
            document.getElementById("subcategory").value = name;
        })
        .catch(error => console.error('Error:', error));
}*/

async function AddBrand(name){
    const url = 'https://db-api-hificonsult.lunalu.xyz/?type=write&name='+name;
    fetch(url)
        .then( () => {
            GetBrands();
            document.getElementById("brand").value = name;
        })
        .catch(error => console.error('Error:', error));
}


