function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}
const imageList = [];
for (let i = 1; i <= 20; i++) {
    imageList.push(`img/photo${i}.jpg`);
}
shuffle(imageList);
// 然後就用「每次加 N 張，直到沒照片」的寫法
