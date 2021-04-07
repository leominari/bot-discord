const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync("./database/db.json");
const db = low(adapter);

exports.init = function () {
    db.defaults({ perolas: [] }).write();
};

exports.insert = function (tableName, object) {
    if (this.getByFilter(tableName, object).length == 0) {
        object.id = this.mrParcont(tableName);
        db.get(tableName).push(object).write();
        return true;
    }
    return false;
};

exports.getByFilter = function (tableName, filter) {
    return db.get(tableName).filter(filter).value();
};

exports.getAll = function (tableName) {
    return this.getByFilter(tableName, {});
};

exports.updateTable = function (tableName, filter, updatedValue) {
    db.get(tableName).find(filter).assign(updatedValue).write();
};

exports.mrParcont = function (tableName) {
    const id = this.getByFilter("parCont", { table: tableName })[0].nextId;
    this.updateTable("parCont", { table: tableName }, { nextId: id + 1 });
    return id;
};
