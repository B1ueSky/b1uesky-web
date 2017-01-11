import { B1ueskyWebPage } from './app.po';

describe('b1uesky-web App', function() {
  let page: B1ueskyWebPage;

  beforeEach(() => {
    page = new B1ueskyWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
