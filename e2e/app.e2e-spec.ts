import { GatewayNgPage } from './app.po';

describe('gateway-ng App', () => {
  let page: GatewayNgPage;

  beforeEach(() => {
    page = new GatewayNgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
