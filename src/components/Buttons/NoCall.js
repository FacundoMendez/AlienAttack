import gsap from 'gsap'

const noCall = () =>{
    const tokenNav = document.querySelector(".contadorCoin");
    gsap.to(tokenNav,{
      color:"red",
      y:2,
      ease: "elastic.out(1, 0.3)",
      duration:.9,

    })
    
   
    gsap.to(tokenNav,{
      delay:1,
      y:0,
      color:"#bdffeefd",
      duration:1,
    })
}

export default noCall;