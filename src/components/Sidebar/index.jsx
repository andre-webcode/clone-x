import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faBell, faBookmark, faEllipsis, faEnvelope, faFeatherAlt, faHashtag, faHome, faUserFriends,
} from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";

function Sidebar() {
  
  const NavItem = ({ icon, text }) => (
    <div className="flex items-center p-3 rounded-full cursor-pointer hover:bg-gray-600 transition-duration-200">
      <FontAwesomeIcon icon={icon} className="text-2xl mr-4" />
      <span className="text-xl hidden xl:inline ">{text}</span>
    </div>
  );

  return (
    <div className="w-20 xl:w-64 sticky top-0 px-2 h-screen">
      <FontAwesomeIcon
        icon={faTwitter}
        className="text-blue-400 text-3xl m-4"
      />
      <nav>
        <NavItem icon={faHome} text="Home" />
        <NavItem icon={faHashtag} text="Explore" />
        <NavItem icon={faBell} text="Notifications" />
        <NavItem icon={faEnvelope} text="Messages" />
        <NavItem icon={faBookmark} text="Bookmarks" />
        <NavItem icon={faUserFriends} text="Communities" />
        <NavItem icon={faTwitter} text="Premium" />
        <NavItem icon={faUser} text="Profile" />
        <NavItem icon={faEllipsis} text="More" />
      </nav>

      <button className="bg-blue-400 text-white rounded-full font-bold px-4 py-2 mt-4 w-full cursor-pointer">
        <FontAwesomeIcon
          icon={faFeatherAlt}
          className="text-white   inline xl:hidden"/>
        <span className="hidden xl:inline">Twitter</span>
      </button>
    </div>
  );
}

export default Sidebar;
