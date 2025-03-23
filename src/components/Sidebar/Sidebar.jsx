import { useState, useMemo } from "react";
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
  HardHat,
  UserCheck,
  Menu,
} from "lucide-react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const menuItems = useMemo(
    () => [
      { name: "الرئيسية", icon: Home, path: "/dashboard" },
      { name: "البطاقات", icon: CreditCard, path: "/cards" },
      { name: "المجالس", icon: Heart, path: "/boards" },
    ],
    []
  );

  const pages = useMemo(
    () => [
      { name: "العملاء", icon: Users, path: "clients" },
      { name: "المهندس الميداني", icon: HardHat, path: "site-engineer" },
      { name: "العمال", icon: UserCheck, path: "worker" },
      { name: "المشاريع", icon: Folder, path: "projects" },
      { name: "التواصل", icon: Camera, path: "contact" },
      { name: "من نحن", icon: Info, path: "about-us" },
    ],
    []
  );

  return (
    <>
      {/* زر القائمة للجوال */}
      <button
        className="p-2 md:hidden fixed right-4 top-4 z-50 bg-white rounded-lg shadow-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu />
      </button>

      {/* الشريط الجانبي */}
      <div
        className={`fixed right-0 min-h-screen bg-white shadow-md p-4 flex flex-col transition-all duration-300 ${
          isOpen ? "w-64" : "w-16 -right-16 md:-right-0"
        }`}
        style={{ direction: "rtl" }}
      >
        {/* العنوان */}
        <h1
          className={`text-xl font-bold text-blue-600 mb-6 text-center ${
            !isOpen && "hidden"
          }`}
        >
          CM<span className="text-black">AS</span>
        </h1>

        {/* القوائم */}
        <nav>
          {/* القائمة الرئيسية */}
          {menuItems.map(({ name, icon: Icon, path }) => (
            <NavLink
              key={name}
              to={path}
              end
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

        {/* صفحات إضافية */}
        {isOpen && (
          <span className="text-gray-400 text-sm mb-2 text-center">
            الصفحات
          </span>
        )}

        <nav>
          {pages.map(({ name, icon: Icon, path }) => (
            <NavLink
              key={name}
              to={path}
              end
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

        {/* الإعدادات وتسجيل الخروج */}
        <div className="mt-auto">
          <NavLink
            to="/settings"
            end
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
            end
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
    </>
  );
};

export default Sidebar;
