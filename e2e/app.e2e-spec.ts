import { Grid2Page } from './app.po';

describe('grid2 App', function() {
  let page: Grid2Page;

  beforeEach(() => {
    page = new Grid2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
