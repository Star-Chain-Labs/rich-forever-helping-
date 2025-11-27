import React, { useEffect, useState } from "react";
import { FaGift, FaMoneyBillAlt, FaMoneyCheckAlt, FaRegStar, FaStarHalfAlt, FaUserFriends, FaUsers } from "react-icons/fa";
import { GiBossKey, GiInfinity, GiPodiumWinner, GiReceiveMoney, GiStarCycle, GiTakeMyMoney } from "react-icons/gi";
import { getDashboardStats } from "../../../api/user.api";
import { MdCardGiftcard, MdTrendingUp } from "react-icons/md";
import { FaMoneyBillTrendUp } from "react-icons/fa6";

const HeaderCard = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const res = await getDashboardStats();
        if (res?.data?.success) {
          setData(res.data.data);
        }
      } catch (err) {
        console.error("Failed to fetch user details", err);
      } finally {
        setLoading(false);
      }
    };
    fetchUserDetails();
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="px-4 py-3 bg-gray-100 border rounded-xl h-24 animate-pulse"
          ></div>
        ))}
      </div>
    );
  }

  if (!data) return null;

  const cards = [
    {
      title: "Total Users",
      value: data?.totalUsers,
      icon: <FaUsers />,
      color: "bg-blue-50 text-blue-700",
    },
    {
      title: "Total Active User",
      value: data?.totalActiveUsers,
      icon: <FaUsers />,
      color: "bg-pink-50 text-pink-700",
    },

    // Wallets
    {
      title: "Total Plans ",
      value: data?.totalPlans,
      symbol: "₹",
      icon: <FaMoneyCheckAlt />,
      color: "bg-amber-50 text-amber-700",
    },
    {
      title: "Total Orders",
      value: data?.totalOrders,
      symbol: "₹",
      icon: <FaMoneyBillAlt/>,
      color: "bg-green-50 text-green-700",
    },
    {
      title: "Total Purhase Wallet",
      value: data?.purchaseWallet,
      symbol: "₹",
      icon: <GiTakeMyMoney />,
      color: "bg-indigo-50 text-indigo-700",
    },

    // Incomes
    // {
    //   title: "Performance Income",
    //   value: data?.incomes?.performanceIncome,
    //   symbol: "₹",
    //   icon: <MdTrendingUp />,
    //   color: "bg-purple-50 text-purple-700",
    // },
    {
      title: "Upgrade Wallet",
      value: data?.upgradeWallet,
      symbol: "₹",
      icon: <FaMoneyBillAlt />,
      color: "bg-cyan-50 text-cyan-700",
    },
    {
      title: "Income Wallet",
      value: data?.incomeWallet,
      symbol: "₹",
      icon: <GiReceiveMoney />,
      color: "bg-rose-50 text-rose-700",
    },

  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
        {cards.map((stat, index) => (
          <div
            key={index}
            className={`p-5 rounded-xl border border-gray-200 shadow-sm ${stat.color} 
              hover:shadow-md hover:-translate-y-[2px] transition-all duration-200`}
          >
            <div className="flex justify-between items-center">
              <div>
                <h4 className="text-sm font-medium opacity-80">{stat.title}</h4>
                <h3 className="text-2xl font-semibold flex items-end gap-1 mt-1">
                  {stat.symbol}
                  {stat.value ?? 0}
                </h3>
              </div>
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-white/60 backdrop-blur-sm text-2xl shadow-inner">
                {stat.icon}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeaderCard;
