import React from "react";
// class LayyoutEditor extends React.Component{
//
// }
export default class Editor extends React.Component {
  render() {
    let {className, ...props} = this.props;
    return (
      <div className={className} {...props}>
        {/*<LayoutEditor />*/}
      </div>);
  }
}