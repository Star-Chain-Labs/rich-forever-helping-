import React, { useEffect, useState, useMemo } from "react";
import Button from "../../../Component/Button";
// import { getInvestment } from "../../../api/payment.api";
import PageLoader from "../../../Component/PageLoader";
import TableComponent from "../../../Component/ui/TableComponent";

export default function InvestmentHistory() {
  const [investments, setInvestments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchInput, setSearchInput] = useState("");

  // 🔄 Fetch investment data
  const fetchInvestments = async () => {
    try {
      setLoading(true);
      const response = await getInvestment();
      setInvestments(response?.data || []);
    } catch (error) {
      console.error("Error fetching investments:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInvestments();
  }, []);

  // 🔍 Search Filter
  const filteredData = useMemo(() => {
    return investments.filter(
      (inv) =>
        inv?.utrNo?.toLowerCase().includes(searchInput.toLowerCase()) ||
        inv?.fromBank?.toLowerCase().includes(searchInput.toLowerCase()) ||
        inv?.toBank?.toLowerCase().includes(searchInput.toLowerCase()) ||
        inv?.userId?.username
          ?.toLowerCase()
          .includes(searchInput.toLowerCase()) ||
        inv?.userId?.email?.toLowerCase().includes(searchInput.toLowerCase())
    );
  }, [searchInput, investments]);

  // 📋 Table Columns
  const columns = [
    {
      header: "SR No.",
      render: (row, index) => index + 1,
    },
    {
      header: "From Bank",
      render: (row) => row?.fromBank || "-",
    },
    {
      header: "To Bank",
      render: (row) => row?.toBank || "-",
    },
    {
      header: "Amount (₹)",
      render: (row) => row?.amount?.toLocaleString("en-IN") || "0",
    },
    {
      header: "UTR No",
      render: (row) => row?.utrNo || "N/A",
    },
    // {
    //   header: "User ID",
    //   render: (row) => row?.userId?.username || "N/A",
    // },
    {
      header: "Email",
      render: (row) => row?.userId?.email || "-",
    },
    {
      header: "Status",
      render: (row) => (
        <span
          className={`px-2 py-1 rounded-full text-xs font-medium ${
            row?.status === "approved"
              ? "bg-green-100 text-green-700"
              : row?.status === "processing"
              ? "bg-yellow-100 text-yellow-700"
              : row?.status === "rejected"
              ? "bg-red-100 text-red-700"
              : "bg-gray-100 text-gray-700"
          }`}
        >
          {row?.status || "N/A"}
        </span>
      ),
    },
    {
      header: "Proof",
      render: (row) =>
        row?.paymentProof ? (
          <a
            href={row.paymentProof}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            View
          </a>
        ) : (
          "N/A"
        ),
    },
    {
      header: "Date",
      render: (row) =>
        new Date(row.createdAt).toLocaleDateString("en-IN", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        }),
    },
  ];

  return (
    <div className="p-4 bg-white rounded-xl shadow-md min-h-[60vh]">
      {loading ? (
        <PageLoader />
      ) : (
        <>
          {/* Header Section */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-700">
              Fund History
            </h2>
          </div>

          {/* 🔍 Search Input */}
          <div className="mb-4">
            <input
              type="text"
              placeholder="Search by UTR, Bank, Username, or Email"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md outline-none text-sm focus:border-green-500"
            />
          </div>

          <TableComponent
            columns={columns}
            data={filteredData}
            loading={loading}
            rowsPerPage={10}
            emptyMessage="No investments found"
          />
        </>
      )}
    </div>
  );
}
