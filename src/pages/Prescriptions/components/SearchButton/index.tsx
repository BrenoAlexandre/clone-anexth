import { Ring } from '@uiball/loaders';
import busca from '../../../../assets/busca.svg';

interface IProps {
  actionFn: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => any;
  loading: boolean;
}

const SearchButton = ({ actionFn, loading }: IProps) => {
  return (
    <button id='screenHeaderActionButton' type='button' onClick={(event) => actionFn(event)}>
      {!loading ? (
        <img src={busca} alt='Buscar' />
      ) : (
        <Ring size={16} lineWeight={5} speed={1} color='#ffffff' />
      )}
    </button>
  );
};

export default SearchButton;
