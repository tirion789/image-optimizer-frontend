import { LoginModalProps } from 'types/modals';

export const LoginModal = ({ login, password }: LoginModalProps) => {
  return (
    <p>
      {login} {password}
    </p>
  );
};
