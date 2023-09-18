import { createOrderData, updateDragging} from './data.js';
import {html, createOrderHtml, moveToColumn, updateDraggingHtml} from './view.js'

let updateColumn = null;
/**
 * A handler that fires when a user drags over any element inside a column. In
 * order to determine which column the user is dragging over the entire event
 * bubble path is checked with `event.path` (or `event.composedPath()` for
 * browsers that don't support `event.path`). The bubbling path is looped over
 * until an element with a `data-area` attribute is found. Once found both the
 * active dragging column is set in the `state` object in "data.js" and the HTML
 * is updated to reflect the new column.
 *
 * @param {Event} event 
 */
const handleDragOver = (event) => {
    event.preventDefault();
    const path = event.path || event.composedPath()
    let column = null

    for (const element of path) {
        const { area } = element.dataset
        if (area) {
            column = area
            break;
        }
    }

    if (!column) return
    updateColumn = column;
    updateDragging({ over: column });
    updateDraggingHtml({ over: column })
}

/**
 * handler that fires when the user starts dragging a registered order
 * @param {event} event 
 */
const handleDragStart = (event) => {}


const handleDragEnd = (event) => {
    event.preventDefault();
    const targetColumn = updateColumn;
    const orderId = event.target.closest('.order').getAttribute('data-id');
    const orderColumn = document.querySelector(`section[data-area="${targetColumn}"]`);
    
    if(orderId&&targetColumn) moveToColumn(orderId,targetColumn);

    orderColumn.style = '';
}

/**
 * handler responsible for displaying the help contents and closing it where
 * close button clicked. takes the event as a parameter and returns void 
 * @param {event} event
 * @returns {void}
 */
const handleHelpToggle = (event) => {
    const helpOverlay = html.help.overlay;
    if(helpOverlay.open === true) {
        helpOverlay.open = false
    }else if(helpOverlay.open === false){
        helpOverlay.open = true;
    }
    html.other.add.focus();
}

/**
 * handler responds much like the handleHelpToggle handler except that it
 * responds on click of add oder button 
 * @param {event} event 
 */
const handleAddToggle = (event) => {
    const addOverlay = html.add.overlay;
    if(addOverlay.open === true){
        addOverlay.open = false;
        html.add.form.reset();
        html.other.add.focus();
    }else if(addOverlay.open === false){
        addOverlay.open = true;
    };
};

/**
 * handler takes the order form data and merges it with additional order data
 * through createOrderData handler, then the result is passed throught the
 * createOrderHtml handler which creates an HTML contents which could be
 * displayed and dragged. This handler take an event as its argument.
 * @param {event} event 
 */
const handleAddSubmit = (event) => {
    event.preventDefault();
   
    const column = 'Ordered'
    const title = html.add.title.value;
    const table = html.add.table.value;
    const orderData = createOrderData({title, table, column})
    
    html.columns.ordered.appendChild(createOrderHtml(orderData));
    html.add.overlay.open = false;
    html.add.form.reset();
};



/**
 * handler responsible for the editing function
 * @param {event} event 
 */
const handleEditToggle = (event) => {
    const editOverlay = html.edit.overlay;
    if(editOverlay.open)    editOverlay.open = false;

    const targetedOrder = event.target.closest('.order');
    if(targetedOrder){
        const targetedOrderId = targetedOrder.getAttribute('data-id');
        const targetedOrderTable = targetedOrder.querySelector('[data-order-table]').textContent;
        const targetedOrderTitle = targetedOrder.querySelector('[data-order-title]').textContent;
        const targetedOrderColumn = targetedOrder.parentNode.getAttribute('data-column');
        
        editOverlay.open = true;
        html.edit.table.value = targetedOrderTable;
        html.edit.id.value = targetedOrderId;
        html.edit.title.value = targetedOrderTitle;
        html.edit.column.value = targetedOrderColumn;
    };
};



/**
 * 
 * @param {*} event 
 */
const handleEditSubmit = (event) => {
    event.preventDefault();
    const currentId = html.edit.id.value;
    const currentTableElement = document.querySelector(`[data-id="${currentId}"].order__table[data-order-table]`);
    const currentTitleElement = document.querySelector(`[data-id="${currentId}"].order__title`);
    const tableEdit = html.edit.table.value;
    const titleEdit = html.edit.title.value;
    const columnEdit = html.edit.column.value;

    moveToColumn(currentId, columnEdit);
    html.edit.overlay.close();
    html.other.add.focus();
};

/**
 * 
 * @param {event} event
 * @returns {void} 
 */
const handleDelete = (event) => {
    const currentOrderId = html.edit.id.value;
    const orderElement = document.querySelector(`[data-id="${currentOrderId}"]`);

    orderElement.remove();
    html.edit.overlay.close();
    html.other.add.focus();
};

html.add.cancel.addEventListener('click', handleAddToggle);
html.other.add.addEventListener('click', handleAddToggle);
html.add.form.addEventListener('submit', handleAddSubmit);

html.other.grid.addEventListener('click', handleEditToggle);
html.edit.cancel.addEventListener('click', handleEditToggle);
html.edit.form.addEventListener('submit', handleEditSubmit);
html.edit.delete.addEventListener('click', handleDelete);

html.help.cancel.addEventListener('click', handleHelpToggle);
html.other.help.addEventListener('click', handleHelpToggle);

for (const htmlColumn of Object.values(html.columns)) {
    htmlColumn.addEventListener('dragstart', handleDragStart);
    htmlColumn.addEventListener('dragend', handleDragEnd);
};

for (const htmlArea of Object.values(html.area)) {
    htmlArea.addEventListener('dragover', handleDragOver);
};