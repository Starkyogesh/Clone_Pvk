import SQLite from 'react-native-sqlite-storage';

const db = SQLite.openDatabase({ name: 'MyDatas.db', location: 'default' });

const createTables = () => {
    db.transaction((tx) => {
        tx.executeSql(
            'CREATE TABLE IF NOT EXISTS infoData ( userName TEXT, userMail TEXT, userPhone INTEGER, userPassword TEXT)',
            [],
            (_, results) => {
                console.log('Table Created Sucess', results);
            },
            (_, error) => {
                console.log('Error Table Created ', error);
            }
        );
    });
};


const insertUser = (userName, userMail, userPhone, userPassword, onSuccess, onError) => {
    db.transaction((tx) => {
        tx.executeSql(
            'INSERT INTO infoData (userName, userMail, userPhone, userPassword) VALUES(?,?,?,?)',
            [userName, userMail, userPhone, userPassword],
            (_, results) => {
                onSuccess(results);
            },
            (_, error) => {
                onError(error);
            }
        );
    });
};


const getUser = (userName, userPassword, onSuccess, onError) => {
    db.transaction((tx) => {
        tx.executeSql(
            'SELECT * From infoData WHERE userName = ? AND userPassword = ?',
            [userName, userPassword],
            (_, results) => {
                onSuccess(results);
            },
            (_, error) => {
                onError(error);
            }
        );
    });
};


const getProfile = (setUserData) => {
    db.transaction(txn => {
        txn.executeSql('SELECT * FROM infoData LIMIT 1', [], (tx, res) => {
            if (res.rows.length > 0) {
                setUserData(res.rows.item(0));
            } else {
                console.log('No user data found');
            }
        });
    });
}

const logOutProfile = () => {
    db.transaction((tx) => {
        tx.executeSql(
          "DROP TABLE IF EXISTS infoData;",
          [],
          (tx, results) => {
            console.log("Users table dropped successfully");
          },
          (err) => {
            console.error("Error dropping Users table: ", err);
          }
        );
      });
};


export { createTables, insertUser, getUser, getProfile, logOutProfile };