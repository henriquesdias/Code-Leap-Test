import PrincipalButtonStyle from "../styles/Principa-Button-Style";

interface PrincipalButton {
  children: string;
  isDisabled: boolean;
}

export default function PrincipalButton({
  children,
  isDisabled,
}: PrincipalButton) {
  return (
    <PrincipalButtonStyle isDisabled={isDisabled} disabled={isDisabled}>
      {children}
    </PrincipalButtonStyle>
  );
}
