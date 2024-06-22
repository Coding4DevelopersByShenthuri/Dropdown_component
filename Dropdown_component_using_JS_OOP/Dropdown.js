function createNewDropDown(items) {
    // this is a factory function
    // const items = [...items]
    const dropDownContainer = document.createElement('div')
    dropDownContainer.classList.add('dropDownContainer')
  
    function createDropDown() {
        dropDownContainer.innerHTML = newDivInnerHtml(items)
        return dropDownContainer

    }
    return {

        displayDropDown: (dropDownButton) => {
            //toggle on and off a class.
            dropDownContainer.classList.toggle('display-toggle')
            
            dropDownButton.appendChild(createDropDown())
        },
        // hideDropDown:()=> {
        //     dropDownContainer.classList.toggle('display-toggle')


        // }

    }
}
const newDivInnerHtml = (l) => {
    l = [...l]
    let divInnerHtml = ''

    let list_length = l.length
    for (i = 0; i < list_length; i++) {
        divInnerHtml += `<p>${l[i]}</p>`
    }

    return divInnerHtml
}

// buttons for activate dropdowns
const btn1 = document.getElementById('btn1')
const btn2 = document.getElementById('btn2')
const btn3 = document.getElementById('btn3')
const btn4 = document.getElementById('btn4')

// creating new drop down object 
let Dropdown_1 = createNewDropDown(['option1', 'option2', 'option3', 'option4'])
btn1.addEventListener('click', () => {

    Dropdown_1.displayDropDown(btn1)
})
// creating new drop down object 
let Dropdown_2 = createNewDropDown(['10', '20', '30', '40'])
btn2.addEventListener('click', () => {


    Dropdown_2.displayDropDown(btn2)
})
// creating new drop down object 
let Dropdown_3 = createNewDropDown(['welcome', 'Good Day', 'Thanks', 'Well done'])
btn3.addEventListener('click', () => {

    Dropdown_3.displayDropDown(btn3)
})
// creating new drop down object 
let Dropdown_4 = createNewDropDown(['*', '+', '-', '/'])
btn4.addEventListener('click', () => {
    
    Dropdown_4.displayDropDown(btn4)
})





