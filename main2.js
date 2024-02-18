function DOMElement(element) {
    this.element = element;
    this.element.addEventListener("focus", (event) => {
        this.element.classList.add("open")
    });
    this.element.addEventListener("blur", (event)=>{
        this.element.classList.remove("open");
    })
    this.addClass = () => {
        isOpen
        ? this.element.classList.add("open")
        : this.element.classList.remove("open");
    };
}
const el = new DOMElement(document.querySelector("#products"));

el.addClass(false);
