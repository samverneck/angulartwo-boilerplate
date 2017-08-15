import { browser, by, element } from 'protractor';

export class WeatherpacitoPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('weather-root h1')).getText();
  }
}
