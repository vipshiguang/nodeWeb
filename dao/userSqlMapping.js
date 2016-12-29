var user = {
	insert:'INSERT INTO t_user(name, password) VALUES(?,?)',
	update:'update t_user set name=?, password=? where u_id=?',
	delete: 'delete from t_user where u_id=?',
	queryById: 'select * from t_user where u_id=?',
	queryByNameAndPwd:'select u_id from t_user where name=? and password=?',
	queryAll: 'select * from t_user'
};
 
module.exports = user;