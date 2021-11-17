AOS.init();

async function getUploads() {
    let url = 'https://myvideo.gigalixirapp.com/api/uploads';
    try {
        let res = await fetch(url);
        alert(res);
        return await res.json();
    } catch (error) {
        //console.log(error);
	alert(error);
    }
}

async function renderUploads() {
    let uploads = await getUploads();
    let data = uploads.data;
    let html = '';
    
    data.forEach(upload => {
        let htmlSegment =
	    `<div class="uploads">
<h2>${upload.title}>
                        </div>`;

        html += htmlSegment;
    });

    let container = document.querySelector('#root');
    container.innerHTML = html;
}

renderUploads();
