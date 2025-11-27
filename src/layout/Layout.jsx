import React, { useState } from "react";
import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";
import {
  FaFile,
  FaHistory,
  FaHome,
  FaLock,
  FaMoneyBill,
  FaSignOutAlt,
  FaUser,
} from "react-icons/fa";
import {
  FaArrowsDownToPeople,
  FaMoneyBill1Wave,
  FaMoneyBillTrendUp,
  FaMoneyBillWheat,
  FaUsers,
  FaWallet,
} from "react-icons/fa6";
import { FiChevronsLeft, FiChevronsRight } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { MainContent } from "../constants/mainContent";
import { Routers } from "../constants/Routes";
import { clearUser } from "../store/slice/userSlice";
import { label } from "framer-motion/client";
import { History, RainbowIcon, Users } from "lucide-react";
import { GiMoneyStack } from "react-icons/gi";

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const userInfo = useSelector((store) => store?.user?.user);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    dispatch(clearUser());
    navigate(Routers.Login);
  };

  let pathParts = location.pathname.split("/").filter(Boolean);

  let page =
    pathParts.length > 0
      ? pathParts[pathParts.length - 1] // <-- this gets the last route part
      : "Dashboard";

  // Format name: replace '-' with space and capitalize each word
  page = page
    .replace(/-/g, " ")
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  if (page.includes(" ")) {
    page = page
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const menuItems = [
    { path: Routers.UserPanel, label: "Dashboard", icon: <FaHome /> },
    { path: Routers.MyProfile, label: "My Profile", icon: <FaUser /> },
    // { path: Routers.Kyc, label: "KYC", icon: <FaFile /> },
    // {
    //   path: Routers.MyDownlines,
    //   label: "My Downline",
    //   icon: <FaArrowsDownToPeople />,
    // },
    { path: Routers.Member, label: "Referral Members", icon: <FaUsers /> },
    { path: Routers.MyInvestment, label: "Add Fund", icon: <FaMoneyBill /> },
    { path: Routers.AllHelpingPlans, label: "Helping Plan", icon: <FaMoneyBill /> },
    { path: Routers.HelpingReferral, label: "My Referrals", icon: <Users /> },
    {
      path: Routers.InvestmentHistory,
      label: "Fund History",
      icon: <FaHistory />,
    },
    {
      path: Routers.HelpingIncomeHistory,
      label: "Helping Income History",
      icon: <History />,
    },
    // { path: Routers.OrderHistory, label: "Order History", icon: <FaHistory /> },
    // {
    //   label: "Incentive Income",
    //   icon: <FaWallet />,
    //   children: [
    //     { path: Routers.SelfIncentive, label: "Self Incentive" },
    //     { path: Routers.SponsorIncentive, label: "Sponsor Incentive" },
    //   ],
    // },
    // {
    //   label: "Performance Income",
    //   icon: <FaMoneyBillTrendUp />,
    //   children: [
    //     { path: Routers.SelfPerformance, label: "Self Performance" },
    //     { path: Routers.SponsorPerformance, label: "Sponsor Performance" },
    //   ],
    // },
    // {
    //   label: "Royal Star Income",
    //   icon: <FaHistory />,
    //   children: [
    //     { path: Routers.RoyalStar, label: "Royal Star Income" },
    //     { path: Routers.RoyalReferral, label: "Royal Referral Income" },
    //   ],
    // },

    // {
    //   path: Routers.RainbowIncome,
    //   label: "Rainbow Income",
    //   icon: <FaMoneyBill1Wave />,
    // },

    // {
    //   path: Routers.RoyalClubIncome,
    //   label: "Royal Club Income",
    //   icon: <FaMoneyBillWheat />,
    // },

    // {
    //   path: Routers.ForeverIncome,
    //   label: "Forever Income",
    //   icon: <GiMoneyStack />,
    // },

    // {
    //   path: Routers.FieldOfficerIncome,
    //   label: "Field Officer Income",
    //   icon: <GiMoneyStack />,
    // },

    

    
    {
      path: Routers.changePassword,
      label: "Change Password",
      icon: <FaLock />,
    },
  ];

  const actionButtons = [
    {
      label: "Logout",
      icon: <FaSignOutAlt />,
      bgColor: "bg-[#F04B4B]",
      func: handleLogout,
    },
  ];

  return (
    <div className="flex gap-4 justify-end w-full h-screen bg-white ">
      {/* Sidebar Section */}
      <div className="md:pl-2 md:py-2  shadow-lg  ">
        <div
          className={`absolute md:relative z-50 h-full flex flex-col transition-all duration-300 ${
            isSidebarOpen ? "left-0" : "-left-full md:left-0"
          }`}
        >
          <div className="p-4 bg-white flex ">
            <div className="w-full h-14 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="overflow-hidden rounded-sm">
                  <img
                    src={MainContent.logo1}
                    alt="profile"
                    className="h-10 w-14"
                  />
                </div>
                <div className="text-xs">
                  <p className="text-xs text-black font-bold capitalize">
                    {userInfo?.name}
                  </p>
                </div>
              </div>
              <button
                onClick={toggleSidebar}
                className="text-lg focus:outline-none bg-green-500 text-black rounded-sm p-1 ml-5"
              >
                <FiChevronsLeft />
              </button>
            </div>
          </div>

          {/* Sidebar Navigation */}
          <nav className="scrollbar-left flex-1 overflow-y-auto">
            <ul className="space-y-1 py-2 px-4 bg-white">
              {menuItems.map((item, index) => {
                const isActive = location.pathname === item.path;
                const hasChildren = item.children && item.children.length > 0;

                return (
                  <li key={index}>
                    {hasChildren ? (
                      <>
                        {/* Dropdown Button */}
                        <button
                          onClick={() => toggleDropdown(index)}
                          className={`flex items-center justify-between w-full gap-2 transition-all rounded-xl p-2 group text-xs ${
                            openDropdown === index
                              ? "bg-green-600 text-white font-medium"
                              : "text-[#0d0d0e] hover:bg-green-600  font-light"
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <div
                              className={`p-2 rounded-lg ${
                                openDropdown === index
                                  ? "text-black "
                                  : "bg-gray-200 text-black"
                              }`}
                            >
                              <p className="text-base group-hover:text-bg-color">
                                {item.icon}
                              </p>
                            </div>
                            {item.label}
                          </div>
                          <FiChevronsRight
                            className={`text-base transition-transform duration-200 ${
                              openDropdown === index ? "rotate-90" : ""
                            }`}
                          />
                        </button>

                        {/* Dropdown Items */}
                        {openDropdown === index && (
                          <ul className="ml-8 mt-1 space-y-1">
                            {item.children.map((child, i) => {
                              const isChildActive =
                                location.pathname === child.path;
                              return (
                                <li key={i}>
                                  <Link
                                    to={child.path}
                                    onClick={() => setIsSidebarOpen(false)}
                                    className={`flex items-center gap-2 rounded-md p-2 text-xs transition-all ${
                                      isChildActive
                                        ? "bg-green-600  font-medium"
                                        : "text-gray-700 hover:bg-green-600"
                                    }`}
                                  >
                                    • {child.label}
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>
                        )}
                      </>
                    ) : (
                      <Link
                        onClick={() => setIsSidebarOpen(false)}
                        to={item.path}
                        className={`flex items-center gap-2 hover:gap-3 transition-gap duration-300 rounded-xl p-2 group text-xs ${
                          isActive
                            ? "bg-green-600 text-white font-medium"
                            : "text-[#0d0d0e] hover:bg-green-600  font-light"
                        }`}
                      >
                        <div
                          className={`p-2 rounded-lg ${
                            isActive ? "bg-white text-gray-400" : "bg-gray-200"
                          }`}
                        >
                          <p className="text-base group-hover:text-bg-color">
                            {item.icon}
                          </p>
                        </div>
                        {item.label}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Logout Button */}
          <div className="px-4 py-2 space-y-1">
            {actionButtons.map(({ label, icon, bgColor, func }, index) => (
              <div key={index} className="p-2">
                <button
                  onClick={func}
                  className="flex w-full items-center text-[#101616] duration-500 transition-all gap-2 text-xs font-medium"
                >
                  <div
                    className={`p-2 ${bgColor} text-base text-black rounded-lg`}
                  >
                    {icon}
                  </div>
                  {label}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        className={`flex flex-col w-full px-2 duration-200 ${
          isSidebarOpen ? "w-full" : "md:w-[calc(100%-280px)]"
        } flex-shrink-0`}
      >
        <main className="overflow-y-auto">
          <header className="flex items-center bg-white my-2 p-4 justify-between shadow-md ">
            <div className="flex items-center gap-2">
              <button
                onClick={toggleSidebar}
                className={`text-lg focus:outline-none bg-green-500 text-black rounded-md p-1 ${
                  !isSidebarOpen ? "hidden" : "block"
                }`}
              >
                <FiChevronsRight />
              </button>
              <button
                onClick={toggleSidebar}
                className={`block md:hidden text-lg focus:outline-none bg-green-500 text-black rounded-md p-1 ${
                  isSidebarOpen ? "hidden" : "block"
                }`}
              >
                <FiChevronsRight />
              </button>
              <div className="flex flex-col gap-2">
                <p className="text-bg-color md:font-bold text-sm md:text-lg px-2">
                  {page}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 md:gap-5">
              <Link to={Routers.webiste}>
                <button className="px-2 py-2 md:py-2 md:px-4 bg-green-600 text-white text-xs md:text-sm rounded-md">
                  Continue shopping
                </button>
              </Link>
            </div>
          </header>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
