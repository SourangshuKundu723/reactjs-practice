function customRender(reactElement, mainContainer){
    const element = document.createElement(reactElement.type)
    for(let prop in reactElement.props){
        element.setAttribute(prop, reactElement.props.prop)
    }
    element.innerHTML = reactElement.children

    mainContainer.appendChild(element)
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://www.google.com',
        target: '_blank'
    },
    children: 'Visit google'
}

const mainContainer = document.querySelector("#root")

customRender(reactElement, mainContainer)