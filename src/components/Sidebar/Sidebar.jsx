import { useState } from "react";
import { Link } from "react-router-dom";
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
  const [active, setActive] = useState("البطاقات");
  const [isOpen, setIsOpen] = useState(true);

  const menuItems = [
    { name: "الرئيسية", icon: Home, path: "/dashboard" },
    { name: "البطاقات", icon: CreditCard, path: "/cards" },
    { name: "المجالس", icon: Heart, path: "/boards" },
  ];

  const pages = [
    { name: "العملاء", icon: Users, path: "/clients" },
    { name: "المهندس الميداني", icon: HardHat, path: "/site-engineer" },
    { name: "الأعمال", icon: Briefcase, path: "/works" },
    { name: "المشاريع", icon: Folder, path: "/projects" },
    { name: "التواصل", icon: Camera, path: "/contact" },
    { name: "من نحن", icon: Info, path: "/about-us" },
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
            <Link
              to={path}
              key={name}
              className={`flex items-center px-4 py-2 w-full text-right rounded-lg mb-2 ${
                active === name ? "bg-blue-500 text-white" : "hover:bg-gray-200"
              }`}
              onClick={() => setActive(name)}
            >
              <Icon className="ml-2" /> {/* الأيقونة على اليمين */}
              {isOpen && <span className="mr-2">{name}</span>}{" "}
              {/* النص على اليسار */}
            </Link>
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
            <Link
              to={path}
              key={name}
              className="flex items-center px-4 py-2 w-full text-right rounded-lg mb-2 hover:bg-gray-200"
            >
              <Icon className="ml-2" /> {/* الأيقونة على اليمين */}
              {isOpen && <span className="mr-2">{name}</span>}{" "}
              {/* النص على اليسار */}
            </Link>
          ))}
        </nav>
        <div className="mt-auto">
          <Link
            to="/settings"
            className="flex items-center px-4 py-2 w-full text-right rounded-lg hover:bg-gray-200"
          >
            <Settings className="ml-2" /> {/* الأيقونة على اليمين */}
            {isOpen && <span className="mr-2">الإعدادات</span>}{" "}
            {/* النص على اليسار */}
          </Link>
          <Link
            to="/logout"
            className="flex items-center px-4 py-2 w-full text-right rounded-lg hover:bg-gray-200 text-red-600"
          >
            <LogOut className="ml-2" /> {/* الأيقونة على اليمين */}
            {isOpen && <span className="mr-2">تسجيل الخروج</span>}{" "}
            {/* النص على اليسار */}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
