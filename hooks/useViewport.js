import { useState } from 'react'

function isInViewport(item) {

    const bounding = item.getBoundingClientRect()
    const myElementHeight = item.offsetHeight
    const myElementWidth = item.offsetWidth

    if(bounding.top >= -myElementHeight
        && bounding.left >= -myElementWidth
        && bounding.right <= (window.innerWidth || document.documentElement.clientWidth) + myElementWidth
        && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) + myElementHeight) {
        return true;
    } else {
        return false;
    }

}

export default function useViewport(item) {
    
    const [isInViewport, setIsInViewport] = useState(false)
    
    const handleScroll = () => {
        if(isInViewport(item) && !isInViewport) {
            setIsInViewport(true)
        } else if(!isInViewport(item) && isInViewport) {
            setIsInViewport(false)
        }
    }

    window.addEventListener('scroll', handleScroll)

    return isInViewport
        
}

