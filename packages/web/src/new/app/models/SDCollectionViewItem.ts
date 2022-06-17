export class SDCollectionViewItem {
  value?: any;
  placeholderIndex?: string;
  emptyCellIndex?: string;

  constructor({
    value,
    placeholderIndex,
    emptyCellIndex,
  }: {
    value?: any;
    placeholderIndex?: string;
    emptyCellIndex?: string;
  }) {
    this.value = value;
    this.placeholderIndex = placeholderIndex;
    this.emptyCellIndex = emptyCellIndex;
  }

  get isPlaceholder(): boolean {
    return Boolean(this.placeholderIndex);
  }

  get isEmptyCell(): boolean {
    return Boolean(this.emptyCellIndex);
  }
}
