
import './Box.css';

function Box({backgroundColor, width, height, deleteBox}) {
    const myStyles = {
        "backgroundColor": backgroundColor,
        "width": width,
        "height": height
    }



  return (
    <div className="Box" style={ myStyles }>
    </div>
  );
}

export default Box;