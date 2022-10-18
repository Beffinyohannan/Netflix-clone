import React,{useState} from 'react'
import './navBar.css' ;

function NavBar() {

    const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };
  return (
    <div className='navbar'>
        <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflix Logo" />
        {/* <div className='searchbar'> 
        <input
        type="text"
        placeholder="Search"
        // value={data.slug}
        // onChange={(e) => setData({ ...data, slug: e.target.value })}
      />
        </div> */}
        <img className='avatar' src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="Avatar" />
    </div>
  )
}

export default NavBar