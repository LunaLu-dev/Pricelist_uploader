document.addEventListener('DOMContentLoaded', function() {
    const uploadForm = document.getElementById('uploadForm');
    if (!uploadForm) {
        console.error('Form not found');
        return;
    }

    uploadForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        console.log("Form submitted");

        const formData = new FormData();
        const fileInput = document.getElementById('fileInput');
        const file = fileInput.files[0];
        let name = document.getElementById("brand").value + ".pdf";

        console.log("Selected file:", file);
        console.log("New filename:", name);

        const renamedFile = new File([file], name, {
            type: file.type,
            lastModified: file.lastModified,
        });

        formData.append('file', renamedFile);

        try {
            const response = await fetch('https://backend-api-hificonsult.lunalu.xyz/upload', {
                method: 'POST',
                body: formData
            });


            const result = await response.json();
            console.log('Upload successful:', result);
            console.log('Upload successful:', 'https://price-hificonsult.lunalu.xyz/price/'+document.getElementById('brand').value + '.pdf');
            document.getElementById('result').value = 'https://price-hificonsult.lunalu.xyz/price/'+document.getElementById('brand').value + '.pdf';
            alert('File uploaded successfully!');
        } catch (error) {
            console.error('Upload failed:', error);
            alert('Upload failed!');
        }
    });
});

function UpdateFileName() {
    const fileInput = document.getElementById('fileInput');
    const fileName = document.getElementById('fileName');

    console.log("CHANGE");
    const file = fileInput.files[0];
    if (file) {
        console.log(file);
        console.log(file.name);
        fileName.innerText = file.name;
    }
}
