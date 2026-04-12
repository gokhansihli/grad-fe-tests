import "./dropDownMenu.css";

export default function DropDownMenu() {
  return (
    <div>
      <ul id="menu">
        <li className="menu">
          <a href="#">Home</a>
        </li>
        <li className="menu">
          <a href="#">About Us</a>
        </li>
        <li className="menu">
          <a href="#">Tests</a>
          <div className="dropDown">
            <ul>
              <li>
                <a href="#">Test 1</a>
              </li>
              <li>
                <a href="#">Test 2</a>
              </li>
              <li>
                <a href="#">Test 3</a>
              </li>
              <li>
                <a href="#">Test 4</a>
              </li>
              <li>
                <a href="#">Test 5</a>
              </li>
              <li>
                <a href="#">Test 6</a>
              </li>
            </ul>
          </div>
        </li>
        <li className="menu">
          <a href="#">Careers</a>
          <div className="dropDown">
            <ul>
              <li>
                <a href="https://northcoders.com/">Northcoders</a>
              </li>
              <li>
                <a href="https://www.apple.com/">Apple</a>
              </li>
              <li>
                <a href="https://www.google.com">Google</a>
              </li>
              <li>
                <a href="https://www.twitter.com">Twitter</a>
              </li>
            </ul>
          </div>
        </li>
        <li className="menu">
          <a href="#">Contact Us</a>
        </li>
      </ul>
    </div>
  );
}
