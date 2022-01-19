import { SignupData } from "../apis/authApi";

class AuthValidation {
    error: {};

    constructor() {
        this.error = {}
    }

    
    validateEmail(email: string) {
        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!re.test(email)) {
            this.error = { ...this.error, email: 'Invalid email' }
        }
    }
    
    validatePassword(password: string, confirmPassword: string) {
        if (password !== confirmPassword) {
            this.error = { ...this.error, confirmPassword: 'Confirm your password' }
        }
        
        if (password.length < 6) {
            this.error = { ...this.error, password: 'Password must be at least 6 characters' }
        }
        
    }
    
    validateUsername(username: string) {
        const re = /^[a-zA-Z0-9_]{5,}[a-zA-Z]+[0-9]*$/i;
        
        
        if (username.length < 6) {
            this.error = { ...this.error, username: 'Username must be at least 5 characters' }
        } else if (username.length > 25) {
            this.error = { ...this.error, username: 'Username must be at most 25 characters' }
        } else if (!re.test(username)) {
            this.error = { ...this.error, username: 'Please provide a valid username' }
        }
    }
    
    validateName(name: string) {
        if (name.length < 3) {
            this.error = { ...this.error, name: 'Name must be at least 3 characters' }
        } else if (name.length > 35) {
            this.error = { ...this.error, name: 'Name must be at most 35 characters' }
        }
    }
    
    validate() {
        if (Object.keys(this.error).length > 0) {
            return {
                error: this.error
            }
        }
        return {
            error: false
        };
    }
    
    validateAllFields(data: SignupData): true | string[] {
        this.validateEmail(data.email)
        this.validateName(data.name)
        this.validatePassword(data.password, data.confirmPassword)
        this.validateUsername(data.username)

        const { error } = this.validate()
        if (!error) {
            return true
        }

        return Object.values(this.error);

    }

    resetError() {
        this.error = {}
    }
}

export default AuthValidation;