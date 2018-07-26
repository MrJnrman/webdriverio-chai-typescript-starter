describe('DuckDuckGo search', () => {
    it('searches for WebdriverIO', () => {
        browser.url('https://duckduckgo.com/');
        browser.setValue('#search_form_input_homepage', 'WebdriverIO');
        browser.click('#search_button_homepage');

        var title = browser.getTitle();
        console.log('Title is: ' + title);
        // outputs: "Title is: WebdriverIO (Software) at DuckDuckGo"
    });
});