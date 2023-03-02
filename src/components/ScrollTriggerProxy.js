import { useEffect } from 'react'
import gsap from 'gsap'
import {useLocomotiveScroll} from 'react-locomotive-scroll'
import ScrollTrigger from 'gsap/ScrollTrigger'


const ScrollTriggerProxy = () => {
    // creating instance
    const {scroll} = useLocomotiveScroll();
    // registering scroll plugin
    gsap.registerPlugin(ScrollTrigger);
    useEffect(() => {
        if(scroll){
            const element = scroll?.el;
            scroll.on('scroll',ScrollTrigger.update) //update scroll trigger

            // scroller proxy
            ScrollTrigger.scrollerProxy(element , {
                scrollTop(value){
                    return arguments.length ? scroll.scrollTo(value,0,0):scroll.scroll.instance.scroll.y;
                },//we do not have to define a scroll left because we are scrolling vertically 
                getBoundingClientRect(){
                    return{
                        top:0,
                        left:0,
                        width:window.innerWidth,
                        height:window.innerHeight,
                    };
                },
                // locomotive scroll handles things completely different on mobile devices does not even transform
                pinType:element.style.transform?"transform":"fixed",
            });
        }
    
      return () => {
        ScrollTrigger.addEventListener('refresh',()=>scroll?.update())
        ScrollTrigger.refresh()
      }
    }, [scroll])
    

  return null;
}

export default ScrollTriggerProxy