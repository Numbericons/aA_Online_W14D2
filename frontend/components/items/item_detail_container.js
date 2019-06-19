import { connect } from 'react-redux';
import ItemDetail from './item_detail';
import { selectItemById } from '../../reducers/selectors';


const mapStateToProps = (state, ownProps ) => {
  let id = ownProps.match.params.itemId;
  return {item: selectItemById(state, id)}
};

const connection = connect(mapStateToProps);
const ItemDetailContainer = connection(ItemDetail);
export default ItemDetailContainer;