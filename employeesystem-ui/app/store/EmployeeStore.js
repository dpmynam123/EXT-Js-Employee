Ext.define('EmployeeApp.store.EmployeeStore', {
    extend: 'Ext.data.Store',
    alias: 'store.employeestore',
    
    model: 'EmployeeApp.model.Employee',
    
    proxy: {
        type: 'ajax',
        url: 'http://localhost:8080/api/employees', 
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    },
    
    autoLoad: true
});
