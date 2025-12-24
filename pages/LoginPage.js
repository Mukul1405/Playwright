
class LoginPage{

    constructor(page){
        this.emailLocator = page.locator("input[type=email]");
        this.passwordLocator = page.locator("input[type=password]");
        this.loginButton = page.getByRole("button",{name: "Login"});
    } 

    async login(email, password){
        await this.emailLocator.fill(email);
        await this.passwordLocator.fill(password);
        await this.loginButton.click();

    }
}
module.exports = LoginPage;

