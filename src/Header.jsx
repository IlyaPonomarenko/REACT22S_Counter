import './Header.css';
const Header = (props) => {
    return <div className='container'> 
        <h1 className="header"> Counter app </h1>
        <h2>{props.name}</h2>
    </div>
  
  }

export default Header;