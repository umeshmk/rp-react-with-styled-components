// SFC - May not be needed
type Styled = {
  className?: string;
};
export type SFC<T extends object = {}> = React.FC<Styled & T>;
