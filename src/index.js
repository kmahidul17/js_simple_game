import { getID, create, queryAll } from './help'

let circleTop = 0;
let circlelft = 0;

const root = getID('root')

const containerStyle = {
    width: '200px',
    height: '200px',
    margin: '50px auto',
    border: '4px solid palegreen',
    position: 'relative'

}

const circleStyle = {
    position: 'absolute',
    width: '30px',
    height: '30px',
    borderRadius: '15px',
    backgroundColor: 'palegreen',
    left: `${circlelft}`,
    top: `${circleTop}`

}



const container = create('div', { class: 'container' })
const circle = create('div', { class: 'circle' })

const left = create('button', { class: 'left btn' })
left.innerText = 'left'
const right = create('button', { class: 'right btn' })
right.innerText = 'right'
const top = create('button', { class: 'top btn' })
top.innerText = 'top'
const bottom = create('button', { class: 'bottom btn' })
bottom.innerText = 'bottom'

const btns = create('div', { class: 'btns' })

btns.append(left, right, top, bottom)

root.append(container, btns)
container.append(circle)
Object.assign(container.style, containerStyle)
Object.assign(circle.style, circleStyle)
console.log(root)

const btnList = queryAll('button')

const btnArr = Array.prototype.slice.call(btnList)
btnArr.map(item => {

    item.addEventListener('click', function (event) {
        let circleName = event.target.innerText
        switch (circleName) {
            case 'left':
                circlelft = circlelft - 10
                circlelft >= 0 ?
                    Object.assign(circle.style, { left: `${circlelft}px` })
                    : alert('No')
                break;
            case 'right':
                circlelft = circlelft + 10
                circlelft <= 170 ?
                    Object.assign(circle.style, { left: `${circlelft}px` })
                    : alert('No')
                break;
            case 'top':
                circleTop = circleTop - 10
                circleTop >= 0 ?
                    Object.assign(circle.style, { top: `${circleTop}px` })
                    : alert('No')
                break;
            case 'bottom':
                circleTop = circleTop + 10
                circleTop <= 170 ?
                    Object.assign(circle.style, { top: `${circleTop}px` })
                    : alert('No')
                break;



            default:
                alert('default')

        }
    })
    // item.addEventListener('click', function(event){
    //     circlelft = circlelft + 10
    //     circlelft <= 170 ? Object.assign(circle.style, {left: `${circlelft}px`}) : alert('No')

    // })
})



