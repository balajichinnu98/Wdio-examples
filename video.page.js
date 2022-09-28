import basePage from "./base.page";

class videoPage extends basePage {
   
    get greenTrigger() {
        return $('//div[@class="play-cta__icon"]');
    }

    async videoClick() {
        await this.greenTrigger.click();
    }
}
export default new videoPage();
