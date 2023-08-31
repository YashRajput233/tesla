import "./Button.css"
import Button from 'react-bootstrap/Button';

function Buttonclass(props) {
  return (
    <>
    <div className="main_div">
    <div className="text_div">
      <h1 className="btnheading">{props.title}</h1>
      <p className="btnpara1">{props.para1}</p>
      <p className="btnpara2">{props.para2}</p>
    </div>
    <div className="btn_div">
      <Button className="btn btn_color1" href="#" >
        {props.btntext1}
      </Button>

      <Button className="btn btn_color2" href="#"  >
      {props.btntext2}
      </Button>
      </div>
      </div>
    </> 
  )
}

export default Buttonclass
