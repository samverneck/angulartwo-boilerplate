import { WeatherpacitoPage } from './app.po';

describe('weatherpacito App', () => {
  let page: WeatherpacitoPage;

  beforeEach(() => {
    page = new WeatherpacitoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to weather!');
  });
});
