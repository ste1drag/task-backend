'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db,callback) {
  db.createTable('review',{
    id:{ type:'int', primaryKey: true, autoIncrement:true },
    name: { type:'string', notNull: true },
    message: { type:'string', notNull: true },
    send_date: {type:'datetime', notNull: true }
  },callback);
};

exports.down = function(db,callback) {
  db.dropTable('review',callback);
};

exports._meta = {
  "version": 1
};
