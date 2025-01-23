


class Loginpage{

//constructor
constructor (page){

    this.page=page;
    this.username='[#user-name]';
    this.passcode='[input[name="password"]';
    this.click='[text=Login]';

 //reusbale Function/methods
 async login(username,passcode){

    await this.page.waitForSelector(this.username);
    await this.page.type(this.username,username);
    await this.page.waitForSelector(this.passcode);
    await this.page.type(this.passcode,passcode);
    await this.click(this.click);
    //end{code}

}

module.exports={loginpage}