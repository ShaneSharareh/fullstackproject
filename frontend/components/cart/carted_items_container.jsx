import {connect} from 'react-redux'
import {fetchCartedItems, updateCartedItem} from '../../actions/carted_item.actions'
import {removeAllCartItems} from '../../actions/cart.actions'
import CartedItems from './carted_items'
const mapStateToProps = (state,ownProps) => ({
   cartedItems:  state.entities.cartedItems,
   currentUserSession: state.session,

});

const mapDispatchToProps = dispatch => ({
    fetchCartedItems: () => dispatch(fetchCartedItems()),
    updateCartedItem : (cartedItem) => dispatch(updateCartedItem(cartedItem)),
    removeAllCartItems : (cartId) => dispatch(removeAllCartItems(cartId))
});

export default connect(mapStateToProps, mapDispatchToProps)(CartedItems)