import React from "react";
import ReactCSS from "reactcss";


let styles = ReactCSS({
  'default': {
    Checkbox: {
      position: 'relative',
      display: 'flex',
      cursor: 'default',
      height: 16,
      
    },
    checkbox: {
      display: 'block',
      boxSizing: 'border-box',
      width: 12,
      height: 12,
      margin: '2px 6px 2px 0',
      verticalAlign: 'top',
      webkitAppearance: 'none',
      border: '1px solid #919191',
      borderRadius: 2,
      outline: 'none',
    },
    checkMark: {
      display: 'block',
      position: 'absolute',
      left: 0,
      top: 2,
    },
    label: {
      display: 'block',
      fontSize: 12,
      color: '#666',
      lineHeight: '16px',
      verticalAlign: 'top',
    }
  }
});
const checkMark = <svg width="13" height="12" viewBox="0 0 13 12" style={styles['checkMark']}>
  <path fill="white"
        d="M11.4 0c-.2 0-.4.1-.6.2-2.5 1.7-4 3.1-6 5.2C4 4.8 3.3 4.5 2.4 4c-.1 0-.3-.1-.4-.1-.3 0-.5.1-.7.3l-.9.9c-.2.2-.3.4-.3.7 0 .3.1.5.3.7l.7-.7-.7.7C2.2 8.2 3.2 9.3 4.7 11c.2.2.5.4.8.4h.1c.3 0 .6-.2.8-.5 2.4-4 4.4-6.4 6.4-8.6.4-.4.4-1 0-1.4l-.6-.7c-.3-.1-.5-.2-.8-.2"
        opacity=".3"/>
  <path fill="#666"
        d="M1.1 5.8l.9-.9c1.1.5 1.8.9 3 1.8C7.3 4.3 8.7 2.8 11.4 1l.6.7c-2.1 2.2-4.1 4.7-6.6 8.8-1.5-1.8-2.5-3-4.3-4.7z"/>
</svg>;
export default class Checkbox extends React.Component {
  
  render() {
    let {value, onChange, label, help, style, ...props} = this.props;
    return (
      <label style={{...styles['Checkbox'], ...style}} {...props}>
        <input style={styles['checkbox']} type="checkbox" value={value} onChange={(e) => onChange(e.target.value)}/>
        {value && checkMark}
        <div style={styles['label']}>{label}</div>
      </label>);
  }
}