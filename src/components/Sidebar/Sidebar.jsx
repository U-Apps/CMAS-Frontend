import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Home,
  CreditCard,
  Heart,
  Users,
  Settings,
  LogOut,
  Folder,
  Info,
  Camera,
  Briefcase,
  HardHat,
  Menu,
} from "lucide-react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const menuItems = [
    { name: "الرئيسية", icon: Home, path: "/dashboard" },
    { name: "البطاقات", icon: CreditCard, path: "/cards" },
    { name: "المجالس", icon: Heart, path: "/boards" },
  ];

  const pages = [
    { name: "العملاء", icon: Users, path: "/pages/clients" },
    { name: "المهندس الميداني", icon: HardHat, path: "/pages/site-engineer" },
    { name: "الأعمال", icon: Briefcase, path: "pages/works" },
    { name: "المشاريع", icon: Folder, path: "pages/projects" },
    { name: "التواصل", icon: Camera, path: "pages/contact" },
    { name: "من نحن", icon: Info, path: "pages/about-us" },
  ];

  return (
    <div className="flex flex-row-reverse">
      <button className="p-2 md:hidden" onClick={() => setIsOpen(!isOpen)}>
        <Menu />
      </button>
      <div
        className={`${
          isOpen ? "w-64" : "w-16"
        } min-h-screen bg-white shadow-md p-4 flex flex-col transition-all duration-300 right-0 fixed`}
      >
        <h1
          className={`text-xl font-bold text-blue-600 mb-6 text-center ${
            !isOpen && "hidden"
          }`}
        >
          CM<span className="text-black">AS</span>
        </h1>
        <nav>
          {menuItems.map(({ name, icon: Icon, path }) => (
            <NavLink
              to={path}
              key={name}
              className={({ isActive }) =>
                `flex items-center px-4 py-2 w-full text-right rounded-lg mb-2 ${
                  isActive ? "bg-blue-500 text-white" : "hover:bg-gray-200"
                }`
              }
            >
              <Icon className="ml-2" />
              {isOpen && <span className="mr-2">{name}</span>}
            </NavLink>
          ))}
        </nav>
        <hr className="my-4" />
        <span
          className={`text-gray-400 text-sm mb-2 text-center ${
            !isOpen && "hidden"
          }`}
        >
          الصفحات
        </span>
        <nav>
          {pages.map(({ name, icon: Icon, path }) => (
            <NavLink
              to={path}
              key={name}
              className={({ isActive }) =>
                `flex items-center px-4 py-2 w-full text-right rounded-lg mb-2 ${
                  isActive ? "bg-blue-500 text-white" : "hover:bg-gray-200"
                }`
              }
            >
              <Icon className="ml-2" />
              {isOpen && <span className="mr-2">{name}</span>}
            </NavLink>
          ))}
        </nav>
        <div className="mt-auto">
          <NavLink
            to="/settings"
            className={({ isActive }) =>
              `flex items-center px-4 py-2 w-full text-right rounded-lg ${
                isActive ? "bg-blue-500 text-white" : "hover:bg-gray-200"
              }`
            }
          >
            <Settings className="ml-2" />
            {isOpen && <span className="mr-2">الإعدادات</span>}
          </NavLink>
          <NavLink
            to="/logout"
            className={({ isActive }) =>
              `flex items-center px-4 py-2 w-full text-right rounded-lg text-red-600 ${
                isActive ? "bg-red-500 text-white" : "hover:bg-gray-200"
              }`
            }
          >
            <LogOut className="ml-2" />
            {isOpen && <span className="mr-2">تسجيل الخروج</span>}
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
