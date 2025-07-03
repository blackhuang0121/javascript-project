const imageList = [
    "img/DSCF2002.JPG",
    "img/DSCF2117.JPG",
    "img/DSCF2112.JPG",
    "img/DSCF2125.JPG",
    "img/DSCF2161.JPG",
    "img/DSCF2274.JPG"
];

const imageContainerEl = document.querySelector('.image-container');
const btnEl = document.querySelector('.btn');
let currentIndex = 0;
const imagesPerClick = 4;  // 每次新增幾張

btnEl.addEventListener('click', addNewImages);

function addNewImages() {
    const nextIndex = Math.min(currentIndex + imagesPerClick, imageList.length);
    for (let i = currentIndex; i < nextIndex; i++) {
        const newImgEl = document.createElement('img');
        newImgEl.src = imageList[i];
        imageContainerEl.appendChild(newImgEl);
    }
    currentIndex = nextIndex;
    if (currentIndex >= imageList.length) {
        btnEl.disabled = true;
        btnEl.textContent = '沒有更多照片了';
    }
}

// 預設載入第一批
addNewImages();
