const handleAsync = (fn) => (req, res, next) => {
    Promise 
        .resolve(fn(req, res, next))
        .catch((err) => next(err));
}

const converObject = (data) =>{
    var array = [];
         for (let i = 0; i < data.rows.length ; i++) {
             users = {};
            for (let j = 0; j < data.rows[i].length; j++) {
                let col = data.metaData[j].name;
               users[col] = data.rows[i][j];
            }
             array.push(users)
        }
        return array;
    }
    
    module.exports = {
        handleAsync,
        converObject
    }