import Buttonclass from "../Button/Button"
import "./Hero.css"

function Hero(props) {
  console.log("data",props)
  return (
    <>
    <div className="herosection_img"  style={{
          backgroundImage: `url(${props.backgroundImg}`,color: "white"}}>
    <Buttonclass title={props.title} para1={props.para1}  para2={props.para2} btntext1={props.btntext1} btntext2={props.btntext2}/>
    </div>
    </>
  )
}

export default Hero
