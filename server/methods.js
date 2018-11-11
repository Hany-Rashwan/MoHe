
Mohedb.permit('insert').ifLoggedIn().allowInClientCode();
Mohedb.permit('update').ifLoggedIn().allowInClientCode();

//Mohedb.permit('insert').ifLoggedIn().allowInClientCode();