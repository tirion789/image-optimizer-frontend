export interface ImageModalProps {
  src: string;
  alt: string;
}

export interface LoginModalProps {
  login: string;
  password: string;
}

type initialModal = { type: null; props: null };

type ActiveModal =
  | { type: 'ImageModal'; props: ImageModalProps }
  | { type: 'LoginModal'; props: LoginModalProps };

export type ModalType = ActiveModal | initialModal;
