import basePage from '../pageobjects/base.page';

class homePage extends basePage {
    //locators
    get navigationtoIP() {
        return $('//span[@class="ssrcss-154a395-NavItemHoverState e1gviwgp18"]');        
    }
    get signin() { 
        return $('//a[@id="idcta-link"]');
    }    
    get inUsername() {
        return $('//input[@id="user-identifier-input"]');
    }
    get inPass() {
        return $('//input[@id="password-input"]');
    }
    get insignin() {
        return $('//button[@id="submit-button"]');
    }  
    get logo() {
        return $('#homepage-link');
    }   

    async login(username, password) {
        await this.navigationtoIP.click();
        await this.signin.click();
        await this.inUsername.setValue(username);
        await this.inPass.setValue(password);
        await this.insignin.click();
            
    }
   
}
export default new homePage();
