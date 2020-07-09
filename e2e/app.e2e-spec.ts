import { DemoappPage } from './app.po';

describe('demoapp App', () => {
  let page: DemoappPage;

  beforeEach(() => {
    page = new DemoappPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
