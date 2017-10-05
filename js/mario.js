/*
 * printPyramid
 *
 * Prints to the console a pyramid of '#' characters of the specified height
 * For example, if height is 5, the console will look like this:
 *          ##
 *         ###
 *        ####
 *       #####
 *      ######
 */

const button = document.querySelector("button");
button.addEventListener("click", printPyramid);

function printPyramid() {
    const count = document.querySelector("input");
    if (count.value.length == 0) {
        return;
    }
    const construction = document.getElementById("construction");
    if (construction) {
        document.getElementById("construction").remove();
    };

    const height = parseInt(count.value, 10);
    const pyramid = document.getElementById("pyramid");
    const block = document.createElement("span");
    const emptyBlock = block.cloneNode();

    block.className = "block";
    emptyBlock.className = "empty-block";

    let wrapper = document.getElementsByClassName("wrapper")[0];
    if (wrapper) {
        wrapper.remove();
    }
    wrapper = document.createElement("div");
    wrapper.className = "wrapper";
    pyramid.appendChild(wrapper);


    let space = height - 1;
    for (let i = 2; i < height + 2; i++) {
        let div = document.createElement("div");
        div.innerHTML = emptyBlock.outerHTML.repeat(space--) + block.outerHTML.repeat(i);
        wrapper.appendChild(div);
    }
    count.value = "";
}