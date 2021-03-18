Feature('add_test');

Scenario('Add to Cart', ({ I }) => {
    I.amOnPage('http://automationpractice.com');
    I.moveCursorTo('#block_top_menu > ul > li:nth-child(2) > a'); //Dresses
    I.click('#block_top_menu > ul > li:nth-child(2) > ul > li:nth-child(3) > a'); //Spring Dresses-1
    I.see("Printed Chiffon Dress");
    I.moveCursorTo('//*[@id="center_column"]/ul/li[3]/div/div[1]/div/a[1]/img'); //Spring Dresses-2
    I.click('//*[@id="center_column"]/ul/li[3]/div/div[2]/div[2]/a[1]/span') //Add to Cart
    I.click('//*[@id="layer_cart"]/div[1]/div[2]/div[4]/a/span'); //checkout
    I.see('Printed Chiffon Dress');
});
