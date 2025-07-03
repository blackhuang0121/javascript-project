function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

// 準備所有圖片路徑
const imageList = [];
for (let i = 1; i <= 35; i++) {   // 這裡假設你有 20 張照片
    imageList.push(`img/DSCF${i}.JPG`);
}
shuffle(imageList);

const imageContainerEl = document.querySelector('.image-container');
const btnEl = document.querySelector('.btn');
let currentIndex = 0;
const imagesPerClick = 4;

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

btnEl.addEventListener('click', addNewImages);

// 一開始載入第一批
addNewImages();
