Feature('search_test');

Scenario('Search for an Item', ({ I }) => {
    I.amOnPage('http://automationpractice.com');
    I.fillField('search_query', 'Blouse'); // Item
    I.click('submit_search');  //lens icon
    I.see('In stock'); 
});
