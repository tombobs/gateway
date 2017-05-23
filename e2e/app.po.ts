import { browser, element, by } from 'protractor';

export class GatewayNgPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ig-root h1')).getText();
  }
}
