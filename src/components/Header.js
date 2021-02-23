
function Header({isDarkMode, onDarkModeClick}){

    return (
 
        <header>
        <h2>Shopster</h2>
        <button onClick={onDarkModeClick}>
          {isDarkMode ? "Dark" : "Light"} Mode
        </button>
        </header>
  
    )
}

// Create a Header component by refactoring the <header> element out of the App component. Clicking on the <button> inside of the Header component should still toggle dark mode on and off.
// You will need to pass a callback function as a prop called onDarkModeClick to the Header component in order for the test to pass.




export default Header;