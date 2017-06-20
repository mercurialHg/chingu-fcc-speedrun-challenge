import { TributePage } from './app.po';

describe('tribute App', () => {
  let page: TributePage;

  beforeEach(() => {
    page = new TributePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
