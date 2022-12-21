import h from '../_snowpack/pkg/hyperscript.js';
import { registerImage } from "./lazy.js";

const maximum = 122;
const minimum = 1;
const random = () => Math.floor(Math.random()* (maximum-minimum) + minimum);

const createImageNode = () => {
    // const container = document.createElement("div");
    // container.className = "p-4";

    // const image = document.createElement("img");
    // image.className = "mx-auto";
    // image.width = "320";
    // image.dataset.src = `https://randomfox.ca/images/${random()}.jpg`;

    const image = h('img.mx-auto', {
        width: '320',
        'data-src': `https://randomfox.ca/images/${random()}.jpg`,
    });

    const container = h("div.p-4.mt-3", image)

    return container;
}

const newImage = createImageNode();
const mountNode = document.getElementById("images");

const addButton = document.querySelector('button');

//
const addImage = () => {
    const newImage = createImageNode();
    mountNode.append(newImage);
    registerImage(newImage)
}

addButton.addEventListener("click", addImage);
 