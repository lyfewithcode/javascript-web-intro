/*
================= Classes =================
- Base Class
- Sub Class (turunan atau extensi dari base class)
*/

// const Profile = {
//     firstName: "",
//     lastName: "",
//     email: ""
// };

class Profile {
    // property
    constructor(firstName, lastName, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }
    // method / function
    fullName() {
        return `${this.firstName} ${this.lastName}`
    }

    display() {
        return `
            First Name \t : ${this.firstName}
            Last Name \t : ${this.lastName}
            Email \t : ${this.email}`
    }

    updateEmail(newEmail) {
        this.email = newEmail;
        console.log('Email updated');
        console.log(this.display());
    }
};

const johnProfile = new Profile("John", "Doe", "john@doe.com");
// johnProfile.firstName = "John";
// johnProfile.lastName = "Doe";
// johnProfile.email = "john@doe.com";


console.log(typeof Profile);
console.log(typeof johnProfile);
console.log(johnProfile);
console.log(johnProfile.fullName());
console.log(johnProfile.display());
johnProfile.updateEmail("my@email.com");

//=> Sub Class

class ProfileSecret extends Profile {
    constructor(firstName, lastName, email, password) {
        super(firstName, lastName, email, password) // keyword super ini gunanya untuk mengakses constructor-nya profile atau parent-nya
        this.password = password
    }
    display() {
        return `
            First Name \t : ${this.firstName}
            Last Name \t : ${this.lastName}
            Email \t : ${this.email}
            Password \t : ${this.password}`
    }
    updatePassword(newPassword) {
        this.password = newPassword;
        console.log("Password Updated");
        console.log(this.display());
    }
}

const yuda = new ProfileSecret("Yuda", "Lego", "yuda@lego.com", "123");
console.log(yuda.display());
yuda.updatePassword("321");