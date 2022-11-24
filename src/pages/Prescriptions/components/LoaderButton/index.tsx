import { Ring } from '@uiball/loaders';

interface IProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => any;
  loading: boolean;
  children: React.ReactNode;
  className?: string;
}

const SearchButton = ({ onClick, loading, children, ...props }: IProps) => {
  return (
    <button type='button' onClick={onClick} {...props} disabled={loading}>
      {!loading ? children : <Ring size={16} lineWeight={5} speed={1} color='#ffffff' />}
    </button>
  );
};

export default SearchButton;
