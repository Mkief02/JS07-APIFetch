class User {
    id;
    email;
    first_name;
    last_name;
    avatar;
    
    constructor( id, email, first_name, last_name, avatar) {
        this.id = id;
        this.email = email;
        this.first_name = first_name;
        this.last_name = last_name;
        this.avatar = avatar;
    }}

export { User };