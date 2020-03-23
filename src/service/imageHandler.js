export function getImages() {
    return sortImagesDescOrder(importAll(require.context('../images', false, /\.(png|jpe?g|svg)$/)))
}

function importAll(r) {
    return r.keys().map(r);
}

function sortImagesDescOrder(images) {
    return images.sort((a, b) => a < b ? 1 : -1) 
}