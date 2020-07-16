
var oracledb = require('oracledb');
oracledb.getConnection(
    {
        user: 'maciopdm',
        password: 'y13zowee',
        connectString: '192.168.0.151:1521/orcl'
    },
    function (err, connection) {
        if (err) {
            console.error(err.message);
            return;
        }
        let sql = 'select * from tct_contract_ctrl where id=1108567';
        connection.execute(sql, function (err, result) {
                if (err) {
                    console.error(err.message);
                    return;
                }

                let data = [];
                let name = result.metaData;
                if (name) {
                    result.rows.forEach((row, index) => {
                        data[index] = new Object();
                        row.forEach((ele, ii) => {
                            data[index][name[ii].name] = ele;
                        })
                    })
                }
                console.log(data);
            });
});
