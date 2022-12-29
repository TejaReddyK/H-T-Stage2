import { RepeatDataPipe } from './repeat-data.pipe';

describe('RepeatDataPipe', () => {
 
  it('create an instance', () => {
    const pipe = new RepeatDataPipe();
    expect(pipe).toBeTruthy();
  });

  it('testing repeat pipe', () => {
    const pipe = new RepeatDataPipe();
    const data = pipe.transform("teja",2);
    expect(data).toEqual("teja");
  });

});