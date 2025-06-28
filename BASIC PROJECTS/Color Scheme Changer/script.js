const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body')

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        console.log(e.target)
        switch (e.target.id) {
            case "grey":
                body.style.backgroundColor = e.target.id //we can also keep it simple by writing just the color name:s
                break;
            case "blue":
                body.style.backgroundColor = e.target.id //we can also keep it simple by writing just the color name:s
                break;
            case "white":
                body.style.backgroundColor = e.target.id //we can also keep it simple by writing just the color name:s
                break;
            case "yellow":
                body.style.backgroundColor = e.target.id //we can also keep it simple by writing just the color name:s
                break;
            default:
                break;
        }
    })
})