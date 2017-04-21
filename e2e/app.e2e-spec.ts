import { AngCrudPage } from './app.po';

describe('ang-crud App', function() {
  let page: AngCrudPage;

  beforeEach(() => {
    page = new AngCrudPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
