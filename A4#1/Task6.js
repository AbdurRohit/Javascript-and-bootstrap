
function loginOutput() {
    let newEmp = { name: 'Jack', level: 3 };
    let loginAttempt = { user: 'Guest', password: 'Jack' };
    let loginName = newEmp.name || 'Guest';
    let password = newEmp.password || 'Guest';
    let level = newEmp.level || 1;
    let admin = newEmp.admin || (newEmp.level >= 4);
    let loginSuccess = (loginAttempt.user === loginName) && (loginAttempt.password === password);
    let levelMsg = (admin ? "You have admin level access" : "Your access level is " + level);
    let message = (loginSuccess ? 'Welcome ' + loginName + ". " + levelMsg : 'Login Failed');
    console.log(message);
}

loginOutput()