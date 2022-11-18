
import './Box.css';

function Box({backgroundColor, width, height, deleteBox, id}) {
    const myStyles = {
        "backgroundColor": backgroundColor,
        "width": width,
        "height": height
    }

    console.log(id, "<<<<<<<<<Box Id")

  return (
    <div className="Box">
        <div className="Box-Box" style={ myStyles }></div>
    </div>
  );
}

export default Box;
