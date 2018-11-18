import React, { Component } from 'react';

export default class ColorBox extends Component {
  
  render() {
    return (
      <div className="color-box" style={{opacity: this.props.opacity}}>
        {(this.props.opacity >= 0.2) ? <ColorBox opacity={this.props.opacity - 0.1} /> : null}
      </div>
    )
  }
  
}

// export default class ColorBox extends Component { couldnt get this to work
//   render() {


//     if (this.props.value >= 0.2) {
//       return (
//         <div className="color-box" style={{ opacity: this.props.opacity }}>
//           <ColorBox opacity={this.props.opacity - 0.1} />
//         </div>
//       );
//     } else { return (
//       <div className="color-box" style={{ opacity: this.props.opacity }}>
//         null;
//       </div>
//       );
//     }
//   }
// }