export class DadosBasicos {
  public qtdAtaques!: number;
  public qtdAtaquesPerigosos!: number;
  public perDePosso!: number;
  public qtdChutesBaliza!: number;
  public qtdChutesFora!: number;

  constructor(init?: Partial<DadosBasicos>) {
    if (init) Object.assign(this, init);
  }
}
