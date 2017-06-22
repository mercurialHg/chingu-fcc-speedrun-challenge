import { TributePagePage } from './app.po';

describe('tribute-page App', () => {
  let page: TributePagePage;

  beforeEach(() => {
    page = new TributePagePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
