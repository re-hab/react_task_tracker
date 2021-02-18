import PropTypes from 'prop-types';

const Button = ({label, color, handleClick}) => {
 
    return (
        <div>
            <button 
            onClick={handleClick}
            className='btn'
            style={{backgroundColor: color}}
            >
                {label}
            </button>
        </div>
    )
}

 Button.defaultProps = {
    color: 'steelblue'
}

 Button.propTypes = {
    color: PropTypes.string,
    label: PropTypes.string,
    handleClick: PropTypes.func.isRequired
 }

export default Button
