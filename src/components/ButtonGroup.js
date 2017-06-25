import React from "react";
import reactCSS from "reactcss";
const styles = reactCSS({
  'default': {
    ButtonGroup: {
      border: '1px solid #d9d9d9',
      background: '#d9d9d9',
      borderRadius: 3,
      height: 24,
      boxSizing: 'border-box',
      display: 'flex',
    },
    button: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#fff',
      cursor: 'pointer',
      color: '#666',
      fontSize: 12,
      lineHeight: '16px',
    }
  },
  'hover': {
    button: {
      background: '#e5e5e5'
    }
  }
});
export default class ButtonGroup extends React.Component {
  onChange = (option) => {
    let {value, onChange} = this.props;
    onChange(option.value);
  };
  
  render() {
    let {options, value, onChange, style, ...props} = this.props;
    return (
      <div style={{...styles['ButtonGroup'], ...style}} {...props}>
        {options.map((option, i) => <div onClick={() => this.onChange(option)} style={{
          ...styles['button'],
          marginLeft: i === 0 ? undefined : 1,
          borderTopLeftRadius: i === 0 ? 2 : undefined,
          borderBottomLeftRadius: i === 0 ? 2 : undefined,
          borderTopRightRadius: i === options.length - 1 ? 2 : undefined,
          borderBottomRightRadius: i === options.length - 1 ? 2 : undefined,
          background: value === option.value ? '#e5e5e5' : '#fff'
        }}>{option.view}</div>)}
      </div>);
  }
}