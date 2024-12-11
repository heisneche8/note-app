const note = document.getElementById("note")
const screen = document.getElementById("screen")
const save = document.getElementById("save-btn")


window.addEventListener('load', function(e){
    save.style.display = "none"
    
})

note.addEventListener('input', function(){
    save.style.display = "block"
})

save.addEventListener('click',function(e){
    e.preventDefault()
    // alert('new')

    if(note.value==""){
        alert("note can't be empty")
        return ""
    }

    let main = document.createElement("main")
    main.className = `flex justify-between bg-slate-500 text-white w-full h-[200px] p-[10px] rounded-[20px] overflow-scroll`
    let h4 = document.createElement("h4")
    h4.className = ""
    let section = document.createElement("section")
    section.className = "text-white flex place-items-center flex-col gap-[10px] z-index[999]"
    let button =document.createElement("button")
    button.className = "text-red-600 font-bold text-[25px]"
    let div = document.createElement("div")
    div.className = "flex flex-col p-3 rounded-[20px]"
    let nav = document.createElement("nav")
    nav.className = "bg-black text-white w-[80px] rounded-[20px] text-center p-3"
    let label = document.createElement("label")
    label.className = " bg-black w-[80px] rounded-[20px] text-center p-3"


    
    h4.textContent = note.value
    button.textContent = "X"
    label.textContent = "read"
    nav.textContent = "unread"

    main.appendChild(h4)
    main.appendChild(section)
    section.appendChild(button)
    section.appendChild(div)
    div.appendChild(nav)
    div.appendChild(label)
    screen.appendChild(main)
    console.log(main);

    note.value = ""

    nav.style.display = "none"

    nav.addEventListener('click',function(){
        nav.style.display = "none"
        label.style.display = "block"

        h4.style.textDecoration = "none"
        h4.style.textDecorationColor = "none"
        main.style.background = "#64748B"

    })

    label.addEventListener('click',function(){
        nav.style.display = "block"
        label.style.display = "none"

        h4.style.textDecoration = "line-through"
        h4.style.textDecorationColor = "red"
        main.style.background = "blue"

    })

    button.addEventListener('click', function(){
        screen.removeChild(main)
    })

})