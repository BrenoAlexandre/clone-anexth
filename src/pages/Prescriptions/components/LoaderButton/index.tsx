import { LoaderSpinner } from '../../../../components/LoaderSpinner';

interface IProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => any;
  loading: boolean;
  children: React.ReactNode;
  className?: string;
}

const SearchButton = ({ onClick, loading, children, ...props }: IProps) => {
  return (
    <button type='button' onClick={onClick} {...props} disabled={loading}>
      {!loading ? children : <LoaderSpinner />}
    </button>
  );
};

export default SearchButton;
