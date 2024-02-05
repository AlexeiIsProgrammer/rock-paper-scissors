import AsciiTable from 'ascii-table'

export default class Help {
    
    draw() {
        const table = new AsciiTable("A Title");
        table.setHeading("", "Name", "Age").addRow(1, "Bob", 52).addRow(2, "John", 34).addRow(3, "Jim", 83);
        console.log(table.toString());
    }
}
