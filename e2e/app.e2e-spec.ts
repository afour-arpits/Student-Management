import { StudentMgrPage } from './app.po';

describe('student-mgr App', () => {
  let page: StudentMgrPage;

  beforeEach(() => {
    page = new StudentMgrPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
