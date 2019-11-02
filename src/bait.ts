import { ElementI, PositionI } from './interfaces';

export class Bait implements ElementI {
  public color = '#306230';

  public constructor(public position: PositionI) {}
}