const createCell = (value) => {
    const td = document.createElement('td');
    td.textContent = value;
    return td;
};

export const createRow = (values) => {
    const tr = document.createElement('tr');
    values.forEach((val) => tr.appendChild(createCell(val)));
    return tr;
};

export const createTable = (rows) => {
    const table = document.createElement('table');
    const tbody = document.createElement('tbody');
    table.appendChild(tbody);

    rows.forEach((values) => {
        tbody.appendChild(createRow(values));
    });

    return table;
};
