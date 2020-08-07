import { CustomHerosPipe } from './custom-heros.pipe';

describe('CustomHerosPipe', () => {
  it('create an instance', () => {
    const pipe = new CustomHerosPipe();
    expect(pipe).toBeTruthy();
  });
});
