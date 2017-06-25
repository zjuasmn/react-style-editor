import React from "react";

export default {
  props: {
    options: [
      {value: 'row', view: 'Horizontal'},
      {value: 'column', view: 'Vertical'},
    ],
    value: 'row',
    onChange: alert,
  }
}