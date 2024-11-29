function customRender(reactElement,container){

  // const domElement = document.createElement(reactElement.type)
  // domElement.innerHTML = reactElement.children
  // domElement.setAttribute('href',reactElement.props.href)
  // domElement.setAttribute('target', reactElement.props.target)
  // container.appendChild(domElement)


  // now we write loop base code
  const domElement =document.createElement(reactElement.type)
  domElement.innerHTML =reactElement.children
  for(const prop in reactElement.props){
    if(prop ==='children') continue;
    domElement.setAttribute(prop,reactElement.props[prop])
   


    }
    container.appendChild(domElement)
  }




//custom react
const reactElement={
  type: 'a',
  props:{
    href:'https://google.com',
    target:'_blank'
  },
  children: 'Click me to Visit Google'
}

const mainContainer=document.querySelector("#root")
customRender(reactElement,mainContainer)



// the const reactElement lines means is const reactElement = <a href="https://google.com" target="_blank">Click me to Visit Google</a>