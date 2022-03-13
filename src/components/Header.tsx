import { StyledHeader } from '../styles/StyledHeader';

type HeaderProps = {
  children: React.ReactNode;
};

export function Header({ children }: HeaderProps) {
  return (
    <StyledHeader>
      <h2>{children}</h2>
    </StyledHeader>
  );
}
