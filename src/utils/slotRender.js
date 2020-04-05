export default {
  name: 'slotRender',
  functional: true,
  render: function(createElement, context) {
    console.log(context, '-------context')

    let slots = {}
    
    // return createElement(name, {
    //   scopedSlots: slots,
    // }, name)
  }
}
