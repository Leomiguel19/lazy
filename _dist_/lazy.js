const isIntersecting = (entry) => {
    return entry.isIntersecting // true (dentro de la pantalla)
}

const loadImage = (entry) => {
    const container = entry.target; //container (DIV)
    const image = container.firstChild;
    const url = image.dataset.src;
    // load image
    image.src = url;

    // des registra la imagen (unlisten)
    observer.unobserve(container);
}

const observer = new IntersectionObserver((entries) => {
    entries
        .filter(isIntersecting)
        .forEach(loadImage)
});

//
export const registerImage = (imagen) => {
    // IntersectionObservador -> observer(imagen)
    observer.observe(imagen);
}