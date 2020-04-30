import {connect} from 'react-redux'
import {Category,mapDispatchToProps} from './categ_display'

const mapStateToProps=(state)=>{
    return {
        items:state.womenItems,
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Category)