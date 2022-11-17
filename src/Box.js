
import './Box.css';

function Box({color, width, height}) {
    const myStyles = {
        "backgroundColor": color,
        "width": width,
        "height": height
    }
    console.log(color, width, height, "<<<<<<<<<<<< In BOX.js");
    
  return (
    <div className="Box" style={ myStyles }>
    </div>
  );
}

export default Box;