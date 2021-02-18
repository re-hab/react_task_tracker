import PropTypes from 'prop-types';
import Button from './Button'

const Header = ({title, onAdd, showAdd}) => {

    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button 
                label={ showAdd ? 'Close' : 'Add'} 
                color={ showAdd ? 'red' : 'green'}
                handleClick={onAdd}
            />
        </header>

    )
}


Header.defaultProps = {
    title: 'Task Tracker'
}

Header.propTypes = {
    title: PropTypes.string.isRequired,

}
//CSS in js
// const headingStyle ={
//     color: 'red', 
//     backgroundColor: 'black'
// }

export default Header
