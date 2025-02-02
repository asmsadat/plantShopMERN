function getImgUrl (name) {
    return new URL(`../assets/products/${name}`, import.meta.url)
}

function getSliderImgUrl (name) {
    return new URL(`../assets/sliderImg/${name}`, import.meta.url)
}

export {getImgUrl, getSliderImgUrl}