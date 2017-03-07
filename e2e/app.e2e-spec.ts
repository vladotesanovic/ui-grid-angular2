import { A2ttPage } from './app.po';

describe('a2tt App', () => {
  let page: A2ttPage;

  beforeEach(() => {
    page = new A2ttPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
